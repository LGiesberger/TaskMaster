const Task = require('../models/task');
const moment = require('moment');

const controller = {};

// Get requests

controller.getAllTasksForDay = async function (req, res) {
  try {
    const date = req.params.date;
    const tasks = await Task.find({ date: date });
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

// Post requests

controller.createTask = async function (req, res) {
  try {
    const { title } = req.body;
    const newTask = await Task.create({
      title: title,
      completed: false,
      date: moment().format('MMMM Do YYYY'),
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

controller.editTask = async function (req, res) {
  // modify an existing Task and send it back to the client
  try {
    const taskId = req.params.taskId;
    const newTitle = req.body;
    const selectedTask = await Task.findByIdAndUpdate(taskId, {
      title: newTitle,
    });
    res.status(204).send(selectedTask);
  } catch (err) {
    console.log(err);
    res.status(500).send('There was a database error while updating the task');
  }
};

controller.setFinishedProp = async function (req, res) {
  // set the 'finished' property to the opposite of the current value on an existing Task and send it back to the client
  try {
    const taskId = req.params.taskId;
    const selectedTask = await Task.findById(taskId);
    await Task.findByIdAndUpdate(taskId, {
      completed: !selectedTask.completed,
    });
    res.status(204).send(selectedTask);
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
    res.status(204).send('Successfully deleted the task.');
  } catch (err) {
    console.log(err);
    res.status(500).send('There was a database error while deleting the task.');
  }
};

module.exports = controller;
