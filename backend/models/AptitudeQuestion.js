const mongoose = require('mongoose');

const aptitudeQuestionSchema = new mongoose.Schema({
  category: { 
    type: String, 
    enum: ['quantitative', 'reasoning', 'verbal'], 
    required: true 
  },
  question: { type: String, required: true },
  options: {
    type: [String],
    validate: [val => val.length === 4, 'Must have exactly 4 options'],
    required: true
  },
  correctOption: { type: Number, required: true, min: 0, max: 3 },
  explanation: { type: String, default: '' },
  difficulty: { 
    type: String, 
    enum: ['easy', 'medium', 'hard'], 
    default: 'medium' 
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AptitudeQuestion', aptitudeQuestionSchema);
