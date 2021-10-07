const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    res.send('No token found');
  } else {
    jwt.verify(token, 'jwtSecret', (err, decoded) => {
      if (err) {
        console.log(err);
        res.json({ auth: false, message: 'You failed to authenticate' });
      } else {
        req.uid = decoded.uid;
        next();
      }
    });
  }
};

module.exports = authMiddleware;
