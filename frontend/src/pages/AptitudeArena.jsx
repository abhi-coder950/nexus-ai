import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { categoryMeta } from '../data/aptitudeQuestions';
import {
  BookOpen,
  HelpCircle,
  Award,
  Clock,
  Target,
  Zap,
  BarChart3,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  XCircle,
  RotateCcw,
  ArrowRight,
  Hash
} from 'lucide-react';

const AptitudeArena = () => {
  const { apiUrl } = useAuth();
  const navigate = useNavigate();

  // States
  const [activeTest, setActiveTest] = useState(false);
  const [category, setCategory] = useState('');
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // Timer
  const [timeLeft, setTimeLeft] = useState(600);
  const [timerIntervalId, setTimerIntervalId] = useState(null);

  // Grading Details
  const [result, setResult] = useState(null);
  const [details, setDetails] = useState([]);
  const [expandedExplanations, setExpandedExplanations] = useState({});
  const [loading, setLoading] = useState(false);

  const iconMap = { BookOpen, HelpCircle, Award };

  // Start Quiz (via API fallback path)
  const startQuiz = async (selectedCategory) => {
    setLoading(true);
    setCategory(selectedCategory);
    setResult(null);
    setDetails([]);
    setSelectedAnswers({});
    setCurrentIdx(0);

    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${apiUrl}/aptitude/questions?category=${selectedCategory}&limit=10`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success && data.questions.length > 0) {
        setQuestions(data.questions);
        setActiveTest(true);
        setTimeLeft(600);
      } else {
        navigate(`/aptitude/quiz/${selectedCategory}`);
      }
    } catch (err) {
      console.error(err);
      navigate(`/aptitude/quiz/${selectedCategory}`);
    } finally {
      setLoading(false);
    }
  };

  // Timer Tick
  useEffect(() => {
    if (activeTest && timeLeft > 0) {
      const id = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
      setTimerIntervalId(id);
      return () => clearInterval(id);
    } else if (activeTest && timeLeft === 0) {
      clearInterval(timerIntervalId);
      submitQuiz(true);
    }
  }, [activeTest, timeLeft]);

  const handleSelectOption = (questionId, optionIdx) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: optionIdx }));
  };

  // Submit Quiz
  const submitQuiz = async (isTimeout = false) => {
    if (timerIntervalId) clearInterval(timerIntervalId);
    setLoading(true);
    setActiveTest(false);

    if (isTimeout) {
      alert("Time is up! Your answers are being auto-submitted.");
    }

    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${apiUrl}/aptitude/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          answers: selectedAnswers,
          category: category.toUpperCase() + ' APTITUDE'
        })
      });
      const data = await res.json();
      if (data.success) {
        setResult(data.result);
        setDetails(data.details);
      } else {
        alert('Failed to submit results.');
      }
    } catch (err) {
      console.error(err);
      alert('Error grading quiz');
    } finally {
      setLoading(false);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleExplanation = (id) => {
    setExpandedExplanations(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = [
    { key: 'quantitative', colorClass: 'indigo', hoverBorder: 'hover:border-indigo-500/20' },
    { key: 'reasoning', colorClass: 'purple', hoverBorder: 'hover:border-purple-500/20' },
    { key: 'verbal', colorClass: 'cyan', hoverBorder: 'hover:border-cyan-500/20' }
  ];

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex">
      <Sidebar />
      <div className="flex-1 pl-64 pt-16">
        <Navbar title="Aptitude Assessment Arena" />

        <main className="p-8 max-w-5xl mx-auto text-left">

          {/* 1. Category Selection View */}
          {!activeTest && !result && (
            <div className="space-y-8">
              {/* Header */}
              <div className="text-left">
                <h2 className="text-2xl font-bold text-white tracking-tight">Practice Assessments</h2>
                <p className="text-sm text-slate-400 mt-2 max-w-xl">
                  Select a category below to test your speed and accuracy. Each test includes 10 questions with a 10-minute timer.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="glass-card px-5 py-4 rounded-2xl flex items-center gap-4">
                  <div className="bg-indigo-500/10 w-10 h-10 rounded-xl flex items-center justify-center text-indigo-400">
                    <Hash className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">30</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Total Questions</p>
                  </div>
                </div>
                <div className="glass-card px-5 py-4 rounded-2xl flex items-center gap-4">
                  <div className="bg-purple-500/10 w-10 h-10 rounded-xl flex items-center justify-center text-purple-400">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">3</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Categories</p>
                  </div>
                </div>
                <div className="glass-card px-5 py-4 rounded-2xl flex items-center gap-4">
                  <div className="bg-cyan-500/10 w-10 h-10 rounded-xl flex items-center justify-center text-cyan-400">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">10 min</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Per Test</p>
                  </div>
                </div>
              </div>

              {/* Category Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {categories.map(({ key, colorClass, hoverBorder }) => {
                  const meta = categoryMeta[key];
                  const Icon = iconMap[meta.icon] || BookOpen;
                  return (
                    <div
                      key={key}
                      className={`glass-card p-6 rounded-2xl flex flex-col justify-between ${hoverBorder} transition-all group`}
                    >
                      <div className="space-y-4">
                        <div className={`bg-${colorClass}-500/10 w-12 h-12 rounded-xl flex items-center justify-center text-${colorClass}-400`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold text-base text-white">{meta.title}</h3>
                        <p className="text-slate-400 text-xs leading-relaxed">
                          {meta.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                          <span className="text-[10px] font-bold bg-slate-900/60 text-slate-400 px-2.5 py-1 rounded-md border border-white/5">
                            {meta.questionCount} Questions
                          </span>
                          <span className="text-[10px] font-bold bg-slate-900/60 text-slate-400 px-2.5 py-1 rounded-md border border-white/5">
                            <Clock className="h-3 w-3 inline mr-1" />
                            {meta.duration}
                          </span>
                          <span className="text-[10px] font-bold bg-slate-900/60 text-slate-400 px-2.5 py-1 rounded-md border border-white/5">
                            {meta.difficulty}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => navigate(`/aptitude/quiz/${key}`)}
                        className="w-full btn-gradient py-2.5 mt-6 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 group/btn"
                      >
                        Start Practice
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 2. Active Test Panel (API fallback path) */}
          {activeTest && questions.length > 0 && (
            <div className="space-y-6">
              <div className="glass-card px-6 py-4 rounded-2xl flex items-center justify-between border-indigo-500/20">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold bg-indigo-500/10 text-indigo-400 px-3 py-1.5 rounded-lg uppercase">
                    {category}
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">
                    Question {currentIdx + 1} of {questions.length}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-indigo-400 bg-indigo-500/5 px-4 py-2 rounded-xl border border-indigo-500/15">
                  <Clock className="h-4 w-4" />
                  <span className="font-mono text-sm font-bold">{formatTime(timeLeft)}</span>
                </div>
              </div>

              <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-indigo-500 h-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
                />
              </div>

              <div className="glass-card p-8 rounded-3xl space-y-6">
                <p className="text-slate-200 font-medium text-base leading-relaxed">
                  {questions[currentIdx].question}
                </p>

                <div className="space-y-3.5">
                  {questions[currentIdx].options.map((opt, oIdx) => {
                    const isSelected = selectedAnswers[questions[currentIdx]._id] === oIdx;
                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelectOption(questions[currentIdx]._id, oIdx)}
                        className={`w-full text-left px-5 py-4 rounded-xl border text-sm font-medium transition-all flex items-center gap-4
                          ${isSelected
                            ? 'bg-indigo-600/10 border-indigo-500 text-indigo-200'
                            : 'border-white/5 bg-slate-950/20 text-slate-400 hover:text-slate-200 hover:bg-slate-950/40 hover:border-white/10'}`}
                      >
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border
                          ${isSelected
                            ? 'bg-indigo-500 border-indigo-400 text-white'
                            : 'border-slate-700 text-slate-500'}`}
                        >
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4">
                <button
                  onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
                  disabled={currentIdx === 0}
                  className="bg-slate-900/60 border border-white/10 px-5 py-2.5 rounded-xl text-xs font-semibold hover:bg-slate-800/60 disabled:opacity-40 transition-colors"
                >
                  Previous
                </button>

                {currentIdx < questions.length - 1 ? (
                  <button
                    onClick={() => setCurrentIdx(prev => prev + 1)}
                    className="btn-gradient px-5 py-2.5 rounded-xl text-xs font-semibold"
                  >
                    Next Question
                  </button>
                ) : (
                  <button
                    onClick={() => submitQuiz(false)}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 px-6 py-2.5 rounded-xl text-xs font-bold transition-all"
                  >
                    Submit Quiz
                  </button>
                )}
              </div>
            </div>
          )}

          {/* 3. Results Panel */}
          {result && (
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-3xl relative overflow-hidden border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

                <div className="text-left">
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-indigo-500/10 text-indigo-400 px-2.5 py-1 rounded-md">
                    Test Completed
                  </span>
                  <h2 className="text-2xl font-bold text-white mt-3">{result.category}</h2>
                  <p className="text-xs text-slate-400 mt-1.5">
                    You answered <strong className="text-white">{result.correctAnswers}</strong> out of <strong className="text-white">{result.totalQuestions}</strong> questions correctly.
                  </p>
                </div>

                <div className="flex items-center gap-4 bg-slate-950/40 border border-white/5 p-4 rounded-2xl shrink-0">
                  <div className="text-center">
                    <span className="text-4xl font-extrabold text-indigo-400">{result.score}%</span>
                    <p className="text-[9px] text-slate-400 uppercase tracking-wider font-bold mt-1">Final Score</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => startQuiz(category)}
                  className="btn-gradient px-5 py-3 rounded-xl text-xs font-semibold flex items-center gap-2"
                >
                  <RotateCcw className="h-4 w-4" />
                  Attempt Again
                </button>
                <button
                  onClick={() => { setResult(null); setActiveTest(false); }}
                  className="bg-slate-900 border border-white/10 px-5 py-3 rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Back to Categories
                </button>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-white text-base">Question Breakdown</h3>
                <div className="space-y-4">
                  {details.map((item, idx) => {
                    const isCorrect = item.isCorrect;
                    const isExpanded = expandedExplanations[item.questionId];
                    return (
                      <div
                        key={item.questionId}
                        className={`glass-card p-6 rounded-2xl border transition-all ${isCorrect ? 'border-emerald-500/15' : 'border-red-500/15'}`}
                      >
                        <div className="flex justify-between items-start gap-4">
                          <div className="text-left flex-1">
                            <p className="text-slate-200 font-medium text-sm leading-relaxed">
                              {idx + 1}. {item.question}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-xs font-semibold">
                              <div className="flex items-center gap-2">
                                <span className="text-slate-500">Your Answer:</span>
                                {item.selectedOption !== undefined ? (
                                  <span className={`flex items-center gap-1.5 ${isCorrect ? 'text-emerald-400' : 'text-red-400'}`}>
                                    {isCorrect ? <CheckCircle className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                                    {item.options[item.selectedOption]}
                                  </span>
                                ) : (
                                  <span className="text-slate-500 italic">Not Answered</span>
                                )}
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-slate-500">Correct Answer:</span>
                                <span className="text-emerald-400 font-medium">{item.options[item.correctOption]}</span>
                              </div>
                            </div>
                          </div>
                          <button
                            onClick={() => toggleExplanation(item.questionId)}
                            className="bg-slate-900 border border-white/5 p-1.5 rounded-lg text-slate-400 hover:text-slate-200"
                          >
                            {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
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

export default AptitudeArena;
