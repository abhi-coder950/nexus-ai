import React, { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight, BookOpen, FileText, Lightbulb, MessageSquare,
  CheckCircle, Clock, Target, ArrowRight, Play, Award, Code
} from 'lucide-react';
import { COURSES } from '../data/courseData';
import { PRACTICE_QUESTIONS_BY_COURSE } from '../data/practiceQuestions';
import { MCQS_BY_COURSE } from '../data/mcqQuestions';
import { INTERVIEW_QUESTIONS_BY_COURSE } from '../data/interviewQuestions';

const CODING_COURSES = ['bca', 'mca', 'btech-cse', 'btech-it', 'diploma', 'polytechnic'];

const TABS_BASE = [
  { id: 'practice', label: 'Practice Questions', icon: Target },
  { id: 'important', label: 'Important Questions', icon: Award },
  { id: 'interview', label: 'Interview Questions', icon: MessageSquare },
  { id: 'mcqs', label: 'MCQs', icon: CheckCircle },
  { id: 'mock', label: 'Mock Tests', icon: Play },
];

const CODING_TAB = { id: 'coding', label: 'Coding Practice', icon: Code };

const difficultyColors = {
  easy: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
  medium: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20' },
  hard: { bg: 'bg-red-500/10', text: 'text-red-400', border: 'border-red-500/20' },
};

const CODING_QUESTIONS = [
  { id: 'code1', title: 'Two Sum', difficulty: 'easy', description: 'Given an array of integers and a target, return indices of two numbers that add up to the target.', language: 'Multiple' },
  { id: 'code2', title: 'Reverse a Linked List', difficulty: 'easy', description: 'Reverse a singly linked list iteratively and recursively.', language: 'Multiple' },
  { id: 'code3', title: 'Valid Parentheses', difficulty: 'easy', description: 'Given a string containing only parentheses, determine if the input is valid.', language: 'Multiple' },
  { id: 'code4', title: 'Merge Two Sorted Arrays', difficulty: 'easy', description: 'Merge two sorted arrays into a single sorted array.', language: 'Multiple' },
  { id: 'code5', title: 'Binary Search', difficulty: 'easy', description: 'Implement binary search to find a target in a sorted array.', language: 'Multiple' },
  { id: 'code6', title: 'Maximum Subarray', difficulty: 'medium', description: 'Find the contiguous subarray with the largest sum (Kadane\'s Algorithm).', language: 'Multiple' },
  { id: 'code7', title: 'Level Order Traversal', difficulty: 'medium', description: 'Perform level order traversal of a binary tree.', language: 'Multiple' },
  { id: 'code8', title: 'Detect Cycle in Linked List', difficulty: 'medium', description: 'Detect if a linked list has a cycle using Floyd\'s algorithm.', language: 'Multiple' },
  { id: 'code9', title: 'Longest Common Subsequence', difficulty: 'medium', description: 'Find the longest common subsequence of two strings using dynamic programming.', language: 'Multiple' },
  { id: 'code10', title: 'Validate BST', difficulty: 'medium', description: 'Check if a binary tree is a valid binary search tree.', language: 'Multiple' },
  { id: 'code11', title: 'Serialize and Deserialize Binary Tree', difficulty: 'hard', description: 'Design an algorithm to serialize and deserialize a binary tree.', language: 'Multiple' },
  { id: 'code12', title: 'Word Ladder', difficulty: 'hard', description: 'Find the shortest transformation sequence from beginWord to endWord.', language: 'Multiple' },
  { id: 'code13', title: 'Median of Two Sorted Arrays', difficulty: 'hard', description: 'Find the median of two sorted arrays in O(log(m+n)) time.', language: 'Multiple' },
  { id: 'code14', title: 'Trapping Rain Water', difficulty: 'hard', description: 'Compute how much water can be trapped after raining.', language: 'Multiple' },
  { id: 'code15', title: 'N-Queens', difficulty: 'hard', description: 'Place N queens on an N×N chessboard so that no two queens threaten each other.', language: 'Multiple' },
];

const SubjectDetail = () => {
  const { courseId, semester, subject } = useParams();
  const [activeTab, setActiveTab] = useState('practice');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const course = COURSES.find(c => c.id === courseId);
  const subjectName = decodeURIComponent(subject);
  const isCodingCourse = CODING_COURSES.includes(courseId);
  const TABS = isCodingCourse ? [...TABS_BASE, CODING_TAB] : TABS_BASE;

  const practiceQuestions = useMemo(() => {
    let qs = PRACTICE_QUESTIONS_BY_COURSE[courseId] || [];
    if (selectedDifficulty !== 'all') {
      qs = qs.filter(q => q.difficulty === selectedDifficulty);
    }
    return qs;
  }, [courseId, selectedDifficulty]);

  const importantQuestions = useMemo(() => {
    let qs = (PRACTICE_QUESTIONS_BY_COURSE[courseId] || []).filter(q => q.difficulty === 'hard');
    if (selectedDifficulty !== 'all') {
      qs = qs.filter(q => q.difficulty === selectedDifficulty);
    }
    return qs;
  }, [courseId, selectedDifficulty]);

  const mcqs = useMemo(() => {
    let qs = MCQS_BY_COURSE[courseId] || [];
    if (selectedDifficulty !== 'all') {
      qs = qs.filter(q => q.difficulty === selectedDifficulty);
    }
    return qs;
  }, [courseId, selectedDifficulty]);

  const interviewQuestions = INTERVIEW_QUESTIONS_BY_COURSE[courseId] || [];

  const MOCK_TESTS = [
    { id: 'mock-1', title: `${course?.shortName || 'Course'} Fundamentals Test`, totalQuestions: 25, duration: '45 min', difficulty: 'easy', topics: ['Core Concepts', 'Fundamentals', 'Basic Theory'] },
    { id: 'mock-2', title: `${course?.shortName || 'Course'} Intermediate Test`, totalQuestions: 30, duration: '60 min', difficulty: 'medium', topics: ['Applied Concepts', 'Problem Solving', 'Analysis'] },
    { id: 'mock-3', title: `${course?.shortName || 'Course'} Advanced Test`, totalQuestions: 35, duration: '75 min', difficulty: 'hard', topics: ['Advanced Topics', 'Complex Problems', 'Critical Thinking'] },
  ];

  if (!course) {
    return (
      <div className="min-h-screen bg-[#070A13] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-slate-300 mb-2">Subject not found</h2>
          <Link to="/hub" className="text-indigo-400 text-sm hover:underline">Back to Hub</Link>
        </div>
      </div>
    );
  }

  const renderQuestionCard = (q, index, isMcq = false) => {
    const diff = difficultyColors[q.difficulty] || difficultyColors.easy;
    const isExpanded = expandedQuestion === q.id;

    if (isMcq) {
      return (
        <motion.div
          key={q.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.03 }}
          className="glass-card rounded-xl border border-white/5 p-4 hover:border-white/10 transition-all"
        >
          <div className="flex items-start justify-between gap-3 mb-3">
            <p className="text-sm text-slate-200 font-medium flex-1">{q.question}</p>
            <span className={`text-[10px] px-2 py-0.5 rounded-full ${diff.bg} ${diff.text} border ${diff.border} font-medium shrink-0`}>
              {q.difficulty}
            </span>
          </div>

          <div className="space-y-2 mb-3">
            {(q.options || []).map((opt, i) => (
              <div key={i} className={`flex items-center gap-2 text-xs px-3 py-2 rounded-lg border ${
                isExpanded && i === q.answer
                  ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300'
                  : 'bg-slate-900/30 border-white/5 text-slate-400'
              }`}>
                <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-medium text-slate-500 shrink-0">
                  {String.fromCharCode(65 + i)}
                </span>
                {opt}
                {isExpanded && i === q.answer && <CheckCircle className="h-3.5 w-3.5 text-emerald-400 ml-auto" />}
              </div>
            ))}
          </div>

          <button
            onClick={() => setExpandedQuestion(isExpanded ? null : q.id)}
            className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            {isExpanded ? 'Hide Explanation' : 'Show Explanation'}
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="mt-3 p-3 rounded-lg bg-indigo-500/5 border border-indigo-500/10">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <span className="text-indigo-400 font-semibold">Explanation: </span>
                    {q.explanation}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      );
    }

    return (
      <motion.div
        key={q.id}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.03 }}
        className="glass-card rounded-xl border border-white/5 p-4 hover:border-white/10 transition-all"
      >
        <div className="flex items-start justify-between gap-3 mb-3">
          <p className="text-sm text-slate-200 font-medium flex-1">{q.question}</p>
          <span className={`text-[10px] px-2 py-0.5 rounded-full ${diff.bg} ${diff.text} border ${diff.border} font-medium shrink-0`}>
            {q.difficulty}
          </span>
        </div>
        <button
          onClick={() => setExpandedQuestion(isExpanded ? null : q.id)}
          className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          {isExpanded ? 'Hide Answer' : 'Show Answer'}
        </button>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-3 p-3 rounded-lg bg-indigo-500/5 border border-indigo-500/10">
                <p className="text-xs text-slate-400 leading-relaxed">
                  <span className="text-indigo-400 font-semibold">Answer: </span>
                  {q.answer}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'practice':
        return (
          <div>
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="text-xs text-slate-500">Difficulty:</span>
              {['all', 'easy', 'medium', 'hard'].map(d => (
                <button
                  key={d}
                  onClick={() => setSelectedDifficulty(d)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                    selectedDifficulty === d
                      ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                      : 'bg-slate-900/40 text-slate-400 border border-white/5 hover:border-white/10'
                  }`}
                >
                  {d === 'all' ? 'All' : d.charAt(0).toUpperCase() + d.slice(1)}
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-500 mb-4">{practiceQuestions.length} questions found</p>
            <div className="space-y-3">
              {practiceQuestions.map((q, i) => renderQuestionCard(q, i))}
            </div>
            {practiceQuestions.length === 0 && (
              <div className="text-center py-12">
                <Target className="h-10 w-10 text-slate-600 mx-auto mb-3" />
                <p className="text-sm text-slate-400">No practice questions available for this filter</p>
              </div>
            )}
          </div>
        );

      case 'important':
        return (
          <div>
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="text-xs text-slate-500">Difficulty:</span>
              {['all', 'easy', 'medium', 'hard'].map(d => (
                <button
                  key={d}
                  onClick={() => setSelectedDifficulty(d)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                    selectedDifficulty === d
                      ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                      : 'bg-slate-900/40 text-slate-400 border border-white/5 hover:border-white/10'
                  }`}
                >
                  {d === 'all' ? 'All' : d.charAt(0).toUpperCase() + d.slice(1)}
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-500 mb-4">{importantQuestions.length} important questions</p>
            <div className="space-y-3">
              {importantQuestions.map((q, i) => renderQuestionCard(q, i))}
            </div>
            {importantQuestions.length === 0 && (
              <div className="text-center py-12">
                <Award className="h-10 w-10 text-slate-600 mx-auto mb-3" />
                <p className="text-sm text-slate-400">No important questions available for this filter</p>
              </div>
            )}
          </div>
        );

      case 'interview':
        return (
          <div className="space-y-3">
            {interviewQuestions.length > 0 ? interviewQuestions.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="glass-card rounded-xl border border-white/5 p-5 hover:border-white/10 transition-all"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0">
                    <MessageSquare className="h-4 w-4 text-pink-400" />
                  </div>
                  <p className="text-sm text-slate-200 font-medium">{item.question}</p>
                </div>
                <div className="ml-11 p-3 rounded-lg bg-slate-900/40 border border-white/5">
                  <p className="text-xs text-slate-400 leading-relaxed">{item.answer}</p>
                </div>
                <div className="ml-11 mt-2">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    item.difficulty === 'easy' ? 'bg-emerald-500/10 text-emerald-400' :
                    item.difficulty === 'medium' ? 'bg-amber-500/10 text-amber-400' :
                    'bg-red-500/10 text-red-400'
                  }`}>
                    {item.difficulty}
                  </span>
                </div>
              </motion.div>
            )) : (
              <div className="text-center py-12">
                <MessageSquare className="h-10 w-10 text-slate-600 mx-auto mb-3" />
                <p className="text-sm text-slate-400">Interview questions for this course will be available soon</p>
              </div>
            )}
          </div>
        );

      case 'mcqs':
        return (
          <div>
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <span className="text-xs text-slate-500">Difficulty:</span>
              {['all', 'easy', 'medium', 'hard'].map(d => (
                <button
                  key={d}
                  onClick={() => setSelectedDifficulty(d)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                    selectedDifficulty === d
                      ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                      : 'bg-slate-900/40 text-slate-400 border border-white/5 hover:border-white/10'
                  }`}
                >
                  {d === 'all' ? 'All' : d.charAt(0).toUpperCase() + d.slice(1)}
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-500 mb-4">{mcqs.length} MCQs found</p>
            <div className="space-y-3">
              {mcqs.map((q, i) => renderQuestionCard(q, i, true))}
            </div>
            {mcqs.length === 0 && (
              <div className="text-center py-12">
                <CheckCircle className="h-10 w-10 text-slate-600 mx-auto mb-3" />
                <p className="text-sm text-slate-400">No MCQs available for this filter</p>
              </div>
            )}
          </div>
        );

      case 'mock':
        return (
          <div className="space-y-3">
            {MOCK_TESTS.map((test, i) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="glass-card rounded-xl border border-white/5 p-5 hover:border-white/10 transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-white text-sm mb-1">{test.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500 mb-3">
                      <span>{test.totalQuestions} Questions</span>
                      <span>{test.duration}</span>
                      <span className={`px-2 py-0.5 rounded-full ${
                        test.difficulty === 'easy' ? 'bg-emerald-500/10 text-emerald-400' :
                        test.difficulty === 'medium' ? 'bg-amber-500/10 text-amber-400' :
                        'bg-red-500/10 text-red-400'
                      }`}>
                        {test.difficulty}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {test.topics.map((topic, j) => (
                        <span key={j} className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800/50 text-slate-400">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium hover:bg-indigo-500/20 transition-all">
                    Start Test
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        );

      case 'coding':
        return (
          <div className="space-y-3">
            {CODING_QUESTIONS.map((q, i) => (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                className="glass-card rounded-xl border border-white/5 p-5 hover:border-white/10 transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="font-semibold text-white text-sm">{q.title}</h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${difficultyColors[q.difficulty].bg} ${difficultyColors[q.difficulty].text} border ${difficultyColors[q.difficulty].border} font-medium shrink-0`}>
                    {q.difficulty}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mb-3">{q.description}</p>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800/50 text-slate-400">
                    {q.language}
                  </span>
                  <button className="ml-auto px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium hover:bg-indigo-500/20 transition-all flex items-center gap-1.5">
                    <Code className="h-3.5 w-3.5" /> Solve Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/5">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
            <Link to="/hub" className="hover:text-slate-300 transition-colors">PrepNex Hub</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to={`/hub/course/${courseId}`} className="hover:text-slate-300 transition-colors">{course.shortName}</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-slate-300">{subjectName}</span>
          </div>

          <h1 className="text-xl sm:text-2xl font-bold mb-1">{subjectName}</h1>
          <p className="text-xs text-slate-500">
            {course.shortName} — {practiceQuestions.length + mcqs.length + interviewQuestions.length} Questions Available
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar Tabs */}
          <div className="lg:w-56 shrink-0">
            <div className="lg:sticky lg:top-6 space-y-1">
              {TABS.map(tab => {
                const Icon = tab.icon;
                const count = tab.id === 'practice' ? practiceQuestions.length
                  : tab.id === 'important' ? importantQuestions.length
                  : tab.id === 'interview' ? interviewQuestions.length
                  : tab.id === 'mcqs' ? mcqs.length
                  : tab.id === 'mock' ? MOCK_TESTS.length
                  : tab.id === 'coding' ? CODING_QUESTIONS.length
                  : 0;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-indigo-600/15 text-white border border-indigo-500/20'
                        : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="flex-1 text-left">{tab.label}</span>
                    <span className="text-[10px] text-slate-500">{count}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-300">
                {TABS.find(t => t.id === activeTab)?.label}
              </h2>
            </div>
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectDetail;
