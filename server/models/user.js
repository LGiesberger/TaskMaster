const mongoose = require('../db');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  first_name: { type: String, required: true },
});

userSchema.virtual('tasks', {
  ref: 'User',
  localField: '_id',
  foreignField: 'user',
});

userSchema.set('toObject', { virtuals: true });
userSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', userSchema);
