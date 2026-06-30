const mongoose = require('mongoose');

const interviewQuestionSchema = new mongoose.Schema({
  type: { type: String, enum: ['hr', 'technical'], required: true },
  category: { type: String, required: true }, // e.g. OOPs, DBMS, Java, Behavioral
  question: { type: String, required: true },
  suggestedAnswer: { type: String, default: '' },
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('InterviewQuestion', interviewQuestionSchema);
