const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/solo-project', (err) => {
  if (err) console.log(err);
  console.log('Connected to DB');
});

module.exports = mongoose;
