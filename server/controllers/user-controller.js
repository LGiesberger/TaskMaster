const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;
const accessTokenSecret = 'jwtSecret';

const user_controller = {};

user_controller.registerUser = async function (req, res) {
  try {
    const { username, password, email, firstName } = req.body;
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
            firstName,
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

module.exports = user_controller;
