const Task = require('../models/task');
const moment = require('moment');

const task_controller = {};

// Get requests

task_controller.getTask = async function (req, res) {
  try {
    const taskId = req.params.taskId;
    const task = await Task.findById(taskId);
    res.status(200).send(task);
  } catch (err) {
    console.log(err);
    res.status(500).send('Database error while retrieving task');
  }
};

task_controller.getAllTasks = async function (req, res) {
  try {
    const tasks = await Task.find({
      user: req.uid,
    }).populate({
      path: 'user',
      select: 'username password email name birthday',
    });
    res.status(200).send(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).send('Database error while retrieving all tasks');
  }
};

// Post requests

task_controller.getAllTasksForDay = async function (req, res) {
  try {
    const { numericalDate } = req.body;
    const tasks = await Task.find({
      user: req.uid,
      numericalDate,
    }).populate({
      path: 'user',
      select: 'username password email name birthday',
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

task_controller.createTask = async function (req, res) {
  try {
    const { title, date } = req.body;
    const newTask = await Task.create({
      title,
      completed: false,
      date,
      numericalDate: moment(date).format('YYYYMMDD'),
      user: req.uid,
    });
    res.status(201).send(newTask);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send('There was a database error while creating your task.');
  }
};

// Put requests

task_controller.editTask = async function (req, res) {
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

task_controller.setCompletedProp = async function (req, res) {
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

task_controller.deleteTask = async function (req, res) {
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

module.exports = task_controller;
