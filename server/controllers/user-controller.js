const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const accessTokenSecret = 'jwtSecret';

const user_controller = {};

user_controller.registerUser = async function (req, res) {
  try {
    const { username, password, email, name, birthday } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser)
      res.send('This emailaddress is taken, please use another');
    else {
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.log(err);
        } else {
          const user = await User.create({
            username,
            password: hash,
            email,
            name,
            birthday,
          });
          const accessToken = jwt.sign({ uid: user._id }, accessTokenSecret);
          res.status(201).json({ auth: true, accessToken, user });
        }
      });
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send('There was a database error while registering your account.');
  }
};

user_controller.loginUser = async function (req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const accessToken = jwt.sign({ uid: user._id }, accessTokenSecret);
          res.status(201).json({ auth: true, accessToken, user });
        } else {
          console.log(err);
          res.status(401).json({ auth: false, message: 'Invalid credentials' });
        }
      });
    } else {
      res.status(401).json({ auth: false, message: 'User does not exist.' });
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send('There was a database error while logging this user in.');
  }
};

user_controller.persistUser = async function (req, res) {
  try {
    const userId = req.uid;
    const user = await User.findById(userId);
    res.status(200).json({ auth: true, user });
  } catch (err) {
    console.log(err);
    res.status(500).send('error');
  }
};

module.exports = user_controller;
