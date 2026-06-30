import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import aptitudeQuestions, { categoryMeta } from '../data/aptitudeQuestions';
import {
  Clock,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
  RotateCcw,
  ArrowLeft,
  Award,
  Target,
  BarChart3
} from 'lucide-react';

const AptitudeQuiz = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { apiUrl } = useAuth();
  const meta = categoryMeta[category];

  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600);
  const [quizState, setQuizState] = useState('active'); // active | submitted | reviewing
  const [result, setResult] = useState(null);
  const [showExplanation, setShowExplanation] = useState({});

  useEffect(() => {
    if (!meta || !aptitudeQuestions[category]) {
      navigate('/aptitude');
      return;
    }
    const qs = [...aptitudeQuestions[category]].sort(() => Math.random() - 0.5);
    setQuestions(qs);
  }, [category, meta, navigate]);

  useEffect(() => {
    if (quizState !== 'active' || questions.length === 0) return;
    if (timeLeft <= 0) {
      handleSubmit(true);
      return;
    }
    const id = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(id);
  }, [quizState, timeLeft, questions.length]);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  const handleSelect = (qId, optIdx) => {
    if (quizState !== 'active') return;
    setSelectedAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmit = useCallback((isTimeout = false) => {
    let correct = 0;
    const details = questions.map(q => {
      const selectedIdx = selectedAnswers[q.id];
      const correctIdx = q.options.indexOf(q.correctAnswer);
      const isCorrect = selectedIdx === correctIdx;
      if (isCorrect) correct++;
      return {
        ...q,
        selectedOption: selectedIdx,
        correctOption: correctIdx,
        isCorrect
      };
    });

    const score = questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0;
    setResult({ score, correct, total: questions.length, details, isTimeout });
    setQuizState('submitted');

    // Persist results to backend so dashboard can track progress
    const token = localStorage.getItem('token');
    if (token) {
      const answersPayload = {};
      questions.forEach(q => {
        const selectedIdx = selectedAnswers[q.id];
        if (selectedIdx !== undefined) {
          answersPayload[q.id] = selectedIdx;
        }
      });
      fetch(`${apiUrl}/aptitude/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          answers: answersPayload,
          category: category.toUpperCase() + ' APTITUDE'
        })
      }).catch(() => {});
    }
  }, [questions, selectedAnswers, apiUrl, category]);

  const handleRestart = () => {
    const qs = [...aptitudeQuestions[category]].sort(() => Math.random() - 0.5);
    setQuestions(qs);
    setCurrentIdx(0);
    setSelectedAnswers({});
    setTimeLeft(600);
    setQuizState('active');
    setResult(null);
    setShowExplanation({});
  };

  const toggleExplanation = (qId) => {
    setShowExplanation(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const getDifficultyColor = (d) => {
    if (d === 'easy') return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
    if (d === 'medium') return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
    return 'text-red-400 bg-red-500/10 border-red-500/20';
  };

  if (!meta || questions.length === 0) return null;

  const answeredCount = Object.keys(selectedAnswers).length;
  const currentQuestion = questions[currentIdx];

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex">
      <Sidebar />
      <div className="flex-1 pl-64 pt-16">
        <Navbar title={`${meta.title} — Quiz`} />

        <main className="p-8 max-w-4xl mx-auto">

          {/* ===== ACTIVE QUIZ ===== */}
          {quizState === 'active' && (
            <div className="space-y-6">
              {/* Quiz Header Bar */}
              <div className="glass-card px-6 py-4 rounded-2xl flex items-center justify-between border-indigo-500/20">
                <div className="flex items-center gap-4">
                  <Link
                    to="/aptitude"
                    className="text-slate-400 hover:text-slate-200 transition-colors"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </Link>
                  <div>
                    <span className="text-xs font-bold bg-indigo-500/10 text-indigo-400 px-3 py-1.5 rounded-lg uppercase">
                      {meta.title}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 font-semibold">
                    {currentIdx + 1} / {questions.length}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] text-slate-500 font-semibold">
                    {answeredCount} answered
                  </span>
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${
                    timeLeft <= 60
                      ? 'text-red-400 bg-red-500/5 border-red-500/15'
                      : 'text-indigo-400 bg-indigo-500/5 border-indigo-500/15'
                  }`}>
                    <Clock className="h-4 w-4" />
                    <span className="font-mono text-sm font-bold">{formatTime(timeLeft)}</span>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-indigo-500 h-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question Navigation Dots */}
              <div className="flex flex-wrap gap-2">
                {questions.map((q, idx) => {
                  const isAnswered = selectedAnswers[q.id] !== undefined;
                  const isCurrent = idx === currentIdx;
                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIdx(idx)}
                      className={`w-8 h-8 rounded-lg text-[11px] font-bold transition-all ${
                        isCurrent
                          ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                          : isAnswered
                            ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                            : 'bg-slate-900/60 text-slate-500 border border-white/5 hover:border-white/15'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {/* Question Card */}
              {currentQuestion && (
                <div className="glass-card p-8 rounded-3xl space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-slate-200 font-medium text-base leading-relaxed flex-1">
                      <span className="text-indigo-400 font-bold mr-2">Q{currentIdx + 1}.</span>
                      {currentQuestion.question}
                    </p>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border shrink-0 ${getDifficultyColor(currentQuestion.difficulty)}`}>
                      {currentQuestion.difficulty}
                    </span>
                  </div>

                  {/* Options */}
                  <div className="space-y-3">
                    {currentQuestion.options.map((opt, oIdx) => {
                      const isSelected = selectedAnswers[currentQuestion.id] === oIdx;
                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleSelect(currentQuestion.id, oIdx)}
                          className={`w-full text-left px-5 py-4 rounded-xl border text-sm font-medium transition-all flex items-center gap-4 ${
                            isSelected
                              ? 'bg-indigo-600/10 border-indigo-500 text-indigo-200'
                              : 'border-white/5 bg-slate-950/20 text-slate-400 hover:text-slate-200 hover:bg-slate-950/40 hover:border-white/10'
                          }`}
                        >
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border shrink-0 ${
                            isSelected
                              ? 'bg-indigo-500 border-indigo-400 text-white'
                              : 'border-slate-700 text-slate-500'
                          }`}>
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center pt-2">
                <button
                  onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
                  disabled={currentIdx === 0}
                  className="bg-slate-900/60 border border-white/10 px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-slate-800/60 disabled:opacity-40 transition-colors flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </button>

                {currentIdx < questions.length - 1 ? (
                  <button
                    onClick={() => setCurrentIdx(prev => prev + 1)}
                    className="btn-gradient px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleSubmit(false)}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 px-6 py-2.5 rounded-xl text-xs font-bold transition-all"
                  >
                    Submit Quiz
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ===== RESULTS ===== */}
          {quizState === 'submitted' && result && (
            <div className="space-y-8">
              {/* Score Card */}
              <div className="glass-card p-8 rounded-3xl relative overflow-hidden border-indigo-500/20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative">
                  <div className="text-left">
                    <span className="text-[10px] font-bold tracking-wider uppercase bg-indigo-500/10 text-indigo-400 px-2.5 py-1 rounded-md">
                      {result.isTimeout ? 'Time Up' : 'Test Completed'}
                    </span>
                    <h2 className="text-2xl font-bold text-white mt-3">{meta.title}</h2>
                    <p className="text-xs text-slate-400 mt-1.5">
                      You answered {result.correct} out of {result.total} questions correctly.
                    </p>
                  </div>

                  <div className="flex items-center gap-6">
                    {/* Circular Score */}
                    <div className="relative w-24 h-24">
                      <svg className="w-24 h-24 -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(99,102,241,0.1)" strokeWidth="8" />
                        <circle
                          cx="50" cy="50" r="42" fill="none"
                          stroke={result.score >= 70 ? '#22c55e' : result.score >= 40 ? '#eab308' : '#ef4444'}
                          strokeWidth="8"
                          strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 42}`}
                          strokeDashoffset={`${2 * Math.PI * 42 * (1 - result.score / 100)}`}
                          className="transition-all duration-1000"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-xl font-extrabold text-white">{result.score}%</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl">
                        <p className="text-lg font-bold text-emerald-400">{result.correct}</p>
                        <p className="text-[9px] text-slate-400 uppercase tracking-wider font-bold">Correct</p>
                      </div>
                      <div className="text-center bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-xl">
                        <p className="text-lg font-bold text-red-400">{result.total - result.correct}</p>
                        <p className="text-[9px] text-slate-400 uppercase tracking-wider font-bold">Incorrect</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleRestart}
                  className="btn-gradient px-5 py-3 rounded-xl text-xs font-semibold flex items-center gap-2"
                >
                  <RotateCcw className="h-4 w-4" />
                  Restart Quiz
                </button>
                <Link
                  to="/aptitude"
                  className="bg-slate-900 border border-white/10 px-5 py-3 rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Categories
                </Link>
              </div>

              {/* Question Breakdown */}
              <div className="space-y-4">
                <h3 className="font-bold text-white text-base flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-indigo-400" />
                  Question Breakdown
                </h3>

                <div className="space-y-4">
                  {result.details.map((item, idx) => {
                    const isExpanded = showExplanation[item.id];
                    return (
                      <div
                        key={item.id}
                        className={`glass-card p-6 rounded-2xl border transition-all ${
                          item.isCorrect ? 'border-emerald-500/15' : 'border-red-500/15'
                        }`}
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div className="text-left flex-1">
                            <p className="text-slate-200 font-medium text-sm leading-relaxed">
                              <span className="font-bold mr-1">{idx + 1}.</span>
                              {item.question}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3 text-xs font-semibold">
                              <div className="flex items-center gap-2">
                                <span className="text-slate-500">Your Answer:</span>
                                {item.selectedOption !== undefined ? (
                                  <span className={`flex items-center gap-1.5 ${item.isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                                    {item.isCorrect ? <CheckCircle className="h-3.5 w-3.5" /> : <XCircle className="h-3.5 w-3.5" />}
                                    {item.options[item.selectedOption]}
                                  </span>
                                ) : (
                                  <span className="text-slate-500 italic">Skipped</span>
                                )}
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-slate-500">Correct:</span>
                                <span className="text-emerald-400 font-medium">{item.correctAnswer}</span>
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={() => toggleExplanation(item.id)}
                            className="bg-slate-900 border border-white/5 p-1.5 rounded-lg text-slate-400 hover:text-slate-200 text-xs font-semibold shrink-0"
                          >
                            {isExpanded ? 'Hide' : 'Why?'}
                          </button>
                        </div>
                        {isExpanded && item.explanation && (
                          <div className="mt-4 pt-4 border-t border-white/5 text-xs text-slate-400 leading-relaxed text-left bg-slate-950/20 p-3.5 rounded-xl">
                            <p className="font-bold text-slate-300 mb-1">Explanation:</p>
                            {item.explanation}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AptitudeQuiz;
