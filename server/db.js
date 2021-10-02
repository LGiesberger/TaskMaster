const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/solo-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
