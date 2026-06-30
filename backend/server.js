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

// ─── Existing Routes ───────────────────────────────────────────────────────────
app.use('/api/auth', require('./routes/auth'));
app.use('/api/aptitude', require('./routes/aptitude'));
app.use('/api/coding', require('./routes/coding'));
app.use('/api/interview', require('./routes/interview'));
app.use('/api/resume', require('./routes/resume'));
app.use('/api/admin', require('./routes/admin'));

// ─── Nexus AI New Routes ───────────────────────────────────────────────────────
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/goals', require('./routes/goals'));
app.use('/api/habits', require('./routes/habits'));
app.use('/api/expenses', require('./routes/expenses'));
app.use('/api/budget', require('./routes/budget'));
app.use('/api/bills', require('./routes/bills'));
app.use('/api/reminders', require('./routes/reminders'));
app.use('/api/emergency', require('./routes/emergency'));
app.use('/api/calendar', require('./routes/calendar'));
app.use('/api/savings', require('./routes/savings'));

// Health check
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Nexus AI Server is running', timestamp: new Date() });
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
  console.log(`🚀 Nexus AI Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
