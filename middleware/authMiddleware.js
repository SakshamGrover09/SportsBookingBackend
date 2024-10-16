const jwt = require('jsonwebtoken');
const User = require('../models/User');
const JWT_SECRET = 'Saksham123';

const authMiddleware = async (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'Access denied' });

  try {
    const decoded = jwt.verify(token.split(' ')[1], JWT_SECRET);
    console.log(decoded.user.id);
    req.user = await User.findById(decoded.user.id);
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
