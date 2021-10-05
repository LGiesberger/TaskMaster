const Task = require('../models/task');
const User = require('../models/user');
const moment = require('moment');
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'amazingsecrettoken';
const bcrypt = require('bcrypt');
const saltRounds = 10;

const controller = {};

// Get requests

controller.getTask = async function (req, res) {
  try {
    const taskId = req.params.taskId;
    const task = await Task.findById(taskId);
    res.status(200).send(task);
  } catch (err) {
    console.log(err);
    res.status(500).send('Database error while retrieving task');
  }
};

controller.getAllTasks = async function (req, res) {
  try {
    const tasks = await Task.find({
      user: '615c24381107cfb14d2224d6',
    }).populate({
      path: 'user',
      select: 'email password first_name',
    });
    res.status(200).send(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).send('Database error while retrieving all tasks');
  }
};

// Post requests

controller.getAllTasksForDay = async function (req, res) {
  try {
    const { numericalDate } = req.body;
    // retrieve user_id from jwt
    const tasks = await Task.find({
      user: '615c24381107cfb14d2224d6',
      numericalDate,
    }).populate({
      path: 'user',
      select: 'email password first_name',
    });
    res.status(200).send(tasks);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send(
        'There was a database error while retrieving the tasks for this day.'
      );
  }
};

controller.createTask = async function (req, res) {
  try {
    const { title, date } = req.body;
    // retrieve user_id from jwt
    const newTask = await Task.create({
      title,
      completed: false,
      date,
      numericalDate: moment(date).format('YYYYMMDD'),
      user: '615c24381107cfb14d2224d6',
    });
    res.status(201).send(newTask);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send('There was a database error while creating your task.');
  }
};

controller.registerUser = async function (req, res) {
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
          res.status(201).json({ accessToken });
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

controller.loginUser = async function (req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const accessToken = jwt.sign({ uid: user._id }, 'jwtSecret');
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

// Put requests

controller.editTask = async function (req, res) {
  // modify an existing Task and send it back to the client
  try {
    const taskId = req.params.taskId;
    const { newTitle, date } = req.body;
    const selectedTask = await Task.findByIdAndUpdate(
      taskId,
      {
        title: newTitle,
        date,
        numericalDate: moment(date).format('YYYYMMDD'),
      },
      { new: true } // Sends back the updated document
    );
    res.status(200).send(selectedTask);
  } catch (err) {
    console.log(err);
    res.status(500).send('There was a database error while updating the task');
  }
};

controller.setCompletedProp = async function (req, res) {
  // set the 'completed' property to the opposite of the current value on an existing Task and send it back to the client
  try {
    const taskId = req.params.taskId;
    const selectedTask = await Task.findById(taskId);
    const changedTask = await Task.findByIdAndUpdate(
      taskId,
      {
        completed: !selectedTask.completed,
      },
      { new: true }
    );
    res.status(200).send(changedTask);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send(
        'There was a database error while updating the finished property on the task'
      );
  }
};

// Delete requests

controller.deleteTask = async function (req, res) {
  // delete a task
  try {
    const taskId = req.params.taskId;
    await Task.findByIdAndDelete(taskId);
    res.status(204);
  } catch (err) {
    console.log(err);
    res.status(500).send('There was a database error while deleting the task.');
  }
};

module.exports = controller;
