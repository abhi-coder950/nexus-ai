const jwt = require('jsonwebtoken');
const User = require('../models/User');
const mongoose = require('mongoose');
const mockDb = require('../config/mockDb');

const protect = async (req, res, next) => {
  let token;
  const isDbOffline = mongoose.connection.readyState !== 1;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'supersecretjwtkeyforplacementportal123');
      
      if (isDbOffline) {
        const mockUser = mockDb.users.find(u => u._id === decoded.id);
        if (!mockUser) {
          return res.status(401).json({ success: false, message: 'User not found (Mock)' });
        }
        req.user = {
          id: mockUser._id,
          _id: mockUser._id,
          name: mockUser.name,
          email: mockUser.email,
          role: mockUser.role,
          academicDetails: mockUser.academicDetails,
          skills: mockUser.skills
        };
        return next();
      } else {
        req.user = await User.findById(decoded.id).select('-password');
        if (!req.user) {
          return res.status(401).json({ success: false, message: 'User not found' });
        }
        return next();
      }
    } catch (error) {
      console.error(error);
      return res.status(401).json({ success: false, message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized, no token provided' });
  }
};

const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403).json({ success: false, message: 'Access denied: Admin role required' });
  }
};

module.exports = { protect, adminOnly };
