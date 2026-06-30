const mongoose = require('mongoose');

const testCaseSchema = new mongoose.Schema({
  input: { type: String, required: true },
  expectedOutput: { type: String, required: true },
  isHidden: { type: Boolean, default: false }
});

const starterCodeSchema = new mongoose.Schema({
  language: { type: String, required: true },
  template: { type: String, required: true }
});

const codingQuestionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], required: true },
  category: { type: String, default: 'General' },
  constraints: { type: String, default: '' },
  inputFormat: { type: String, default: '' },
  outputFormat: { type: String, default: '' },
  sampleInput: { type: String, default: '' },
  sampleOutput: { type: String, default: '' },
  testCases: [testCaseSchema],
  starterCode: [starterCodeSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('CodingQuestion', codingQuestionSchema);
