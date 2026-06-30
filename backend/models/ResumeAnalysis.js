const mongoose = require('mongoose');

const resumeAnalysisSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fileName: { type: String, required: true },
  score: { type: Number, required: true }, // Rating out of 100
  keyStrengths: [{ type: String }],
  improvements: [{ type: String }],
  missingSkills: [{ type: String }],
  rawFeedback: { type: String, default: '' },
  analyzedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ResumeAnalysis', resumeAnalysisSchema);
