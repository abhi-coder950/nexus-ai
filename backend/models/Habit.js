const mongoose = require('mongoose');

const completionSchema = new mongoose.Schema({
  date: { type: String, required: true }, // YYYY-MM-DD
  completedAt: { type: Date, default: Date.now }
});

const habitSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  icon: { type: String, default: '⭐' },
  color: { type: String, default: 'indigo' },
  frequency: { type: String, enum: ['daily', 'weekdays', 'weekends', 'weekly'], default: 'daily' },
  targetDays: { type: Number, default: 21 },
  completions: [completionSchema],
  streak: { type: Number, default: 0 },
  longestStreak: { type: Number, default: 0 },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Habit', habitSchema);
