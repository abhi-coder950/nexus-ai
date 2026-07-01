const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Initialize DB
connectDB();

const app = express();

// Middlewares
app.use(cors({
  origin: true,
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve uploads as static resources
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ─── Routes ────────────────────────────────────────────────────────────────────
app.use('/api/auth', require('./routes/auth'));
app.use('/api/aptitude', require('./routes/aptitude'));
app.use('/api/coding', require('./routes/coding'));
app.use('/api/interview', require('./routes/interview'));
app.use('/api/resume', require('./routes/resume'));
app.use('/api/admin', require('./routes/admin'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'PrepNex Server is running', timestamp: new Date() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 PrepNex Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
