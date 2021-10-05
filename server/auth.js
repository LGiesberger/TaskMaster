const User = require('./models/user');

const authMiddleware = async (req, res, next) => {
  const user = await User.find({ _id: req.uid });
  if (user) next();
  else res.status(401).send(false);
};

module.exports = authMiddleware;
