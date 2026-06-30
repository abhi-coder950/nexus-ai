const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: ['aptitude', 'coding'], required: true },
  score: { type: Number, required: true }, // For aptitude: marks/percentage. For coding: number of testcases passed or points.
  totalQuestions: { type: Number, default: 0 },
  correctAnswers: { type: Number, default: 0 },
  category: { type: String, required: true }, // Category of aptitude test, or coding challenge title
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Result', resultSchema);
