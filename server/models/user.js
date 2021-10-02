const mongoose = require('../db');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  first_name: { type: String, required: true },
  tasks: { type: Schema.Types.ObjectId, ref: 'Tasks' },
});

module.exports = mongoose.model('Users', userSchema);
