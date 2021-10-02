const { Schema } = require('mongoose');
const mongoose = require('../db');

const taskSchema = mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
  date: { type: Date, required: true },
  numericalDate: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'Users' },
});

const Task = mongoose.model('Tasks', taskSchema);

module.exports = Task;
