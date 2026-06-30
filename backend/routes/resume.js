const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const pdfParse = require('pdf-parse');
const upload = require('../middleware/upload');
const { protect } = require('../middleware/auth');
const ResumeAnalysis = require('../models/ResumeAnalysis');
const mockDb = require('../config/mockDb');

// Safe import of @google/generative-ai — wrap in try/catch so if the
// package is missing or incompatible, the route file still loads.
let GoogleGenerativeAI = null;
try {
  const genAi = require('@google/generative-ai');
  GoogleGenerativeAI = genAi.GoogleGenerativeAI;
} catch (e) {
  console.warn('WARNING: @google/generative-ai package not available. Gemini AI analysis disabled. Using local mock analysis.');
}

// Safe import of mammoth for DOCX parsing
let mammoth = null;
try {
  mammoth = require('mammoth');
} catch (e) {
  console.warn('WARNING: mammoth package not available. DOCX text extraction will use limited fallback.');
}

const isDbOffline = () => mongoose.connection.readyState !== 1;

// ──────────────────────────────────────────────
// Helper: parse PDF with a timeout so it never hangs forever
// ──────────────────────────────────────────────
const parsePdfWithTimeout = (buffer, timeoutMs = 20000) => {
  return Promise.race([
    pdfParse(buffer).catch(err => {
      console.error('pdf-parse internal error:', err.message);
      return { text: '' };
    }),
    new Promise((resolve) =>
      setTimeout(() => {
        console.warn('PDF parsing timed out after ' + (timeoutMs / 1000) + 's');
        resolve({ text: '' });
      }, timeoutMs)
    )
  ]);
};

// ──────────────────────────────────────────────
// Helper: extract text from DOCX using mammoth if available, else fallback
// ──────────────────────────────────────────────
const extractTextFromDocx = async (filePath) => {
  // Method 1: Use mammoth if installed (reliable)
  if (mammoth) {
    try {
      const result = await mammoth.extractRawText({ path: filePath });
      if (result.value && result.value.trim().length > 0) {
        return result.value.trim();
      }
    } catch (e) {
      console.warn('mammoth DOCX extraction failed:', e.message);
    }
  }

  // Method 2: Fallback — read raw bytes and try to find XML text content
  try {
    const content = fs.readFileSync(filePath);
    // DOCX stores text in XML <w:t> tags inside word/document.xml
    // Search for these tags in the raw buffer
    const contentStr = content.toString('latin1'); // latin1 preserves all bytes
    const tagMatches = contentStr.match(/<w:t[^>]*>([^<]+)<\/w:t>/g);
    if (tagMatches && tagMatches.length > 0) {
      const text = tagMatches
        .map(tag => tag.replace(/<[^>]+>/g, ''))
        .join(' ')
        .replace(/\s+/g, ' ')
        .trim();
      if (text.length > 10) return text;
    }
  } catch (e) {
    console.warn('Raw DOCX text extraction failed:', e.message);
  }

  return '';
};

// ──────────────────────────────────────────────
// Helper: Local mock analysis (always works, no API needed)
// ──────────────────────────────────────────────
const performMockAnalysis = (text, fileName) => {
  const lowercaseText = text.toLowerCase();

  const skillsList = [
    'javascript', 'python', 'java', 'react', 'node', 'express', 'mongodb',
    'sql', 'html', 'css', 'git', 'docker', 'c++', 'aws', 'data structures',
    'algorithms', 'machine learning', 'angular', 'vue', 'django', 'typescript',
    'php', 'bootstrap', 'tailwind', 'flask', 'spring', 'mysql', 'postgresql',
    'rest api', 'graphql', 'kubernetes', 'linux', 'firebase', 'figma'
  ];

  const foundSkills = [];
  skillsList.forEach(skill => {
    if (lowercaseText.includes(skill)) {
      foundSkills.push(skill.toUpperCase());
    }
  });

  const defaultRequired = ['JAVASCRIPT', 'REACT', 'NODE', 'MONGODB', 'GIT', 'DATA STRUCTURES', 'ALGORITHMS'];
  const missingSkills = defaultRequired.filter(s => !foundSkills.includes(s));

  const keyStrengths = [];
  if (foundSkills.length > 5) {
    keyStrengths.push(`Diverse Technical Skill Set (${foundSkills.slice(0, 5).join(', ')})`);
  } else if (foundSkills.length > 0) {
    keyStrengths.push(`Foundational skills in ${foundSkills.join(', ')}`);
  } else {
    keyStrengths.push('Clean document layout and structure');
  }

  if (lowercaseText.includes('project') || lowercaseText.includes('experience')) {
    keyStrengths.push('Includes practical project work or professional experience');
  } else {
    keyStrengths.push('Entry-level structure ready for internship applications');
  }

  if (lowercaseText.includes('education') || lowercaseText.includes('college') || lowercaseText.includes('university')) {
    keyStrengths.push('Clearly lists academic background');
  }

  if (lowercaseText.includes('github') || lowercaseText.includes('portfolio')) {
    keyStrengths.push('Includes portfolio or GitHub links');
  }

  if (lowercaseText.includes('certification') || lowercaseText.includes('achievement')) {
    keyStrengths.push('Lists certifications or achievements');
  }

  const improvements = [];
  if (foundSkills.length < 5) {
    improvements.push('Expand technical skill set with modern frameworks (React, Node.js, etc.)');
  }
  if (!lowercaseText.includes('github') && !lowercaseText.includes('linkedin')) {
    improvements.push('Add GitHub and LinkedIn profile links');
  }
  if (!lowercaseText.includes('certification') && !lowercaseText.includes('achievement')) {
    improvements.push('Add a Certifications or Achievements section');
  }
  if (lowercaseText.split(' ').length < 150) {
    improvements.push('Elaborate project descriptions using the STAR method');
  }
  if (!lowercaseText.includes('summary') && !lowercaseText.includes('objective')) {
    improvements.push('Add a Professional Summary or Objective section at the top');
  }
  if (improvements.length === 0) {
    improvements.push('Quantify project results with metrics (e.g., "reduced load time by 30%")');
    improvements.push('Keep formatting consistent across all sections');
  }

  let score = 50;
  score += foundSkills.length * 3;
  if (lowercaseText.includes('project')) score += 8;
  if (lowercaseText.includes('experience')) score += 8;
  if (lowercaseText.includes('github')) score += 5;
  if (lowercaseText.includes('linkedin')) score += 4;
  if (lowercaseText.includes('summary') || lowercaseText.includes('objective')) score += 5;
  if (lowercaseText.includes('certification') || lowercaseText.includes('achievement')) score += 5;
  score = Math.min(score, 95);

  const rawFeedback = `Resume Analysis Report (Local Analysis)\n\nScore: ${score}/100\n\nKey Strengths:\n${keyStrengths.map(s => '  - ' + s).join('\n')}\n\nSuggested Improvements:\n${improvements.map(i => '  - ' + i).join('\n')}\n\nMissing Skills for Placements:\n${missingSkills.map(m => '  - ' + m).join('\n')}`;

  return {
    score,
    keyStrengths,
    improvements,
    missingSkills,
    rawFeedback
  };
};

// ──────────────────────────────────────────────
// POST /api/resume/analyze
// ──────────────────────────────────────────────
router.post('/analyze', protect, upload.single('resume'), async (req, res) => {
  // Always store file path so we can clean it up
  const filePath = req.file ? req.file.path : null;

  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'Please upload a resume file.' });
    }

    const fileExt = path.extname(req.file.originalname).toLowerCase();
    let resumeText = '';

    // ── Extract text from file ──
    if (fileExt === '.pdf') {
      try {
        const dataBuffer = fs.readFileSync(filePath);
        const parsedData = await parsePdfWithTimeout(dataBuffer, 20000);
        resumeText = (parsedData.text || '').trim();
      } catch (pdfError) {
        console.error('PDF parse error:', pdfError.message);
        resumeText = '';
      }
    } else if (fileExt === '.txt') {
      try {
        resumeText = fs.readFileSync(filePath, 'utf8').trim();
      } catch (e) {
        console.error('TXT read error:', e.message);
        resumeText = '';
      }
    } else if (fileExt === '.docx' || fileExt === '.doc') {
      try {
        resumeText = await extractTextFromDocx(filePath);
      } catch (e) {
        console.error('DOCX extraction error:', e.message);
        resumeText = '';
      }
    }

    // If we still have no text, create a minimal fallback
    if (!resumeText || resumeText.trim().length < 5) {
      resumeText = `Resume document: ${req.file.originalname}. Limited text could be automatically extracted from this file. The analysis is based on available metadata and structure.`;
    }

    // ── Run analysis ──
    let analysisResults;
    const geminiApiKey = process.env.GEMINI_API_KEY;

    if (geminiApiKey && GoogleGenerativeAI) {
      try {
        const genAI = new GoogleGenerativeAI(geminiApiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const prompt = `You are an expert HR Manager and Technical Recruiter. Analyze this resume text and provide a structured JSON response.

Resume Text:
"""
${resumeText.substring(0, 8000)}
"""

Provide the output EXACTLY in this JSON format (no markdown, no backticks, just raw JSON):
{
  "score": 85,
  "keyStrengths": ["Strength 1", "Strength 2"],
  "improvements": ["Improvement 1", "Improvement 2"],
  "missingSkills": ["React", "SQL"],
  "rawFeedback": "A short summary paragraph of the candidate's profile."
}`;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text().trim();

        let cleanJsonText = responseText;
        if (cleanJsonText.startsWith('```')) {
          cleanJsonText = cleanJsonText.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/```\s*$/i, '').trim();
        }

        const jsonResults = JSON.parse(cleanJsonText);
        analysisResults = {
          score: jsonResults.score || 70,
          keyStrengths: Array.isArray(jsonResults.keyStrengths) ? jsonResults.keyStrengths : ['Analysis complete'],
          improvements: Array.isArray(jsonResults.improvements) ? jsonResults.improvements : ['Review the suggestions'],
          missingSkills: Array.isArray(jsonResults.missingSkills) ? jsonResults.missingSkills : [],
          rawFeedback: jsonResults.rawFeedback || 'AI analysis completed.'
        };
      } catch (geminiError) {
        console.error('Gemini API failed, using local analysis:', geminiError.message);
        analysisResults = performMockAnalysis(resumeText, req.file.originalname);
      }
    } else {
      analysisResults = performMockAnalysis(resumeText, req.file.originalname);
    }

    // ── Save result ──
    let savedAnalysis;

    if (isDbOffline()) {
      savedAnalysis = {
        _id: `mock-resume-${Date.now()}`,
        user: req.user.id,
        fileName: req.file.originalname,
        score: analysisResults.score,
        keyStrengths: analysisResults.keyStrengths,
        improvements: analysisResults.improvements,
        missingSkills: analysisResults.missingSkills,
        rawFeedback: analysisResults.rawFeedback,
        analyzedAt: new Date()
      };
      mockDb.resumeAnalyses.push(savedAnalysis);
    } else {
      savedAnalysis = await ResumeAnalysis.create({
        user: req.user.id,
        fileName: req.file.originalname,
        score: analysisResults.score,
        keyStrengths: analysisResults.keyStrengths,
        improvements: analysisResults.improvements,
        missingSkills: analysisResults.missingSkills,
        rawFeedback: analysisResults.rawFeedback
      });
    }

    // ── Clean up uploaded file ──
    if (filePath) {
      try { fs.unlinkSync(filePath); } catch (e) { /* ignore cleanup errors */ }
    }

    return res.status(201).json({
      success: true,
      analysis: savedAnalysis
    });

  } catch (error) {
    console.error('Resume analysis error:', error);

    // Clean up file on error too
    if (filePath) {
      try { fs.unlinkSync(filePath); } catch (e) { /* ignore */ }
    }

    return res.status(500).json({
      success: false,
      message: 'Resume analysis failed. Please try again with a different file.'
    });
  }
});

// ──────────────────────────────────────────────
// GET /api/resume/history
// ──────────────────────────────────────────────
router.get('/history', protect, async (req, res) => {
  try {
    if (isDbOffline()) {
      const history = mockDb.resumeAnalyses
        .filter(r => r.user === req.user.id)
        .sort((a, b) => new Date(b.analyzedAt) - new Date(a.analyzedAt));
      return res.json({ success: true, history });
    }

    const history = await ResumeAnalysis.find({ user: req.user.id }).sort({ analyzedAt: -1 });
    res.json({ success: true, history });
  } catch (error) {
    console.error('History fetch error:', error);
    res.status(500).json({ success: false, message: 'Failed to load history.' });
  }
});

module.exports = router;
