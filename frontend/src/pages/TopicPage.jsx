import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import courseRoadmaps from '../data/courseRoadmaps';
import topicQuestions, { topicMeta } from '../data/topicQuestions';
import aptitudeQuestions from '../data/aptitudeQuestions';
import localCodingQuestions from '../data/localCodingQuestions';
import {
  ArrowLeft, BookOpen, Clock, CheckCircle2, Circle, ChevronRight,
  Code, Target, Brain, Trophy, Filter, RotateCcw, Lightbulb,
  ChevronDown, ChevronUp, AlertCircle, Zap, BarChart3, Play,
  MessageSquare
} from 'lucide-react';

const difficultyColors = {
  easy: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  medium: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  hard: 'bg-red-500/20 text-red-300 border-red-500/30',
};

function getQuestionsForTopic(topicId) {
  if (topicQuestions[topicId]) return topicQuestions[topicId];
  if (aptitudeQuestions[topicId]) return aptitudeQuestions[topicId];
  if (topicId === 'quantitative' && aptitudeQuestions.quantitative) return aptitudeQuestions.quantitative;
  if (topicId === 'verbal' && aptitudeQuestions.verbal) return aptitudeQuestions.verbal;

  const codingByCategory = {};
  localCodingQuestions.forEach((q) => {
    const cat = q.category;
    if (!codingByCategory[cat]) codingByCategory[cat] = [];
    codingByCategory[cat].push({
      id: q._id,
      question: q.title,
      description: q.description,
      difficulty: q.difficulty,
      options: [],
      correctAnswer: '',
      explanation: `Solve this coding problem. ${q.description}`,
      isCoding: true,
      starterCode: q.starterCode,
      testCases: q.testCases,
    });
  });

  if (codingByCategory[topicId]) return codingByCategory[topicId];

  const nameMap = {
    'c-programming': 'C',
    'cpp': 'C++',
    'java': 'Java',
    'python': 'Python',
    'javascript': 'JavaScript',
    'react': 'React',
    'nodejs': 'Node.js',
    'express': 'Express.js',
    'mongodb': 'MongoDB',
    'sql': 'SQL',
    'dbms': 'DBMS',
    'operating-system': 'Operating System',
    'computer-networks': 'Computer Networks',
    'oop': 'OOP',
    'dsa': 'DSA',
    'html': 'HTML',
    'css': 'CSS',
  };

  const mapped = nameMap[topicId];
  if (mapped && codingByCategory[mapped]) return codingByCategory[mapped];

  const csTopics = ['operating-system', 'dbms', 'computer-networks', 'oop', 'dsa', 'c-programming', 'cpp', 'java', 'python', 'javascript', 'react', 'nodejs', 'express', 'mongodb', 'sql', 'html', 'css'];
  if (csTopics.includes(topicId)) {
    return [
      { id: `${topicId}-gen1`, question: `What is ${topicId.replace(/-/g, ' ')}?`, options: ['A programming concept', 'A database', 'A networking protocol', 'An operating system feature'], correctAnswer: 'A programming concept', difficulty: 'easy', explanation: `${topicId.replace(/-/g, ' ')} is an important concept in computer science.` },
    ];
  }

  return [
    { id: `${topicId}-gen1`, question: `Practice question for ${topicId.replace(/-/g, ' ')}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', difficulty: 'easy', explanation: 'This is a practice question.' },
    { id: `${topicId}-gen2`, question: `Advanced question for ${topicId.replace(/-/g, ' ')}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option B', difficulty: 'medium', explanation: 'This is an intermediate question.' },
    { id: `${topicId}-gen3`, question: `Expert question for ${topicId.replace(/-/g, ' ')}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option C', difficulty: 'hard', explanation: 'This is an advanced question.' },
  ];
}

function generateMockTest(questions, count = 10) {
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

export default function TopicPage() {
  const { courseId, topicId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('practice');
  const [difficulty, setDifficulty] = useState('all');
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [attempted, setAttempted] = useState(0);
  const [answered, setAnswered] = useState([]);
  const [mockTestActive, setMockTestActive] = useState(false);
  const [mockQuestions, setMockQuestions] = useState([]);
  const [mockScore, setMockScore] = useState(null);
  const [mockTimeLeft, setMockTimeLeft] = useState(0);
  const [practiceComplete, setPracticeComplete] = useState(false);

  const course = useMemo(() => courseRoadmaps.find((c) => c.id === courseId), [courseId]);
  const topic = useMemo(() => course?.topics?.find((t) => t.id === topicId), [course, topicId]);
  const questions = useMemo(() => getQuestionsForTopic(topicId), [topicId]);
  const meta = topicMeta[topicId] || { title: topic?.name || topicId, description: topic?.description || '' };

  const filteredQuestions = useMemo(() => {
    if (difficulty === 'all') return questions;
    return questions.filter((q) => q.difficulty === difficulty);
  }, [questions, difficulty]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(`topic_progress_${courseId}_${topicId}`) || '{}');
      setScore(stored.score || 0);
      setAttempted(stored.attempted || 0);
      setAnswered(stored.answered || []);
    } catch { setScore(0); setAttempted(0); setAnswered([]); }
  }, [courseId, topicId]);

  const saveProgress = (newScore, newAttempted, newAnswered) => {
    localStorage.setItem(`topic_progress_${courseId}_${topicId}`, JSON.stringify({ score: newScore, attempted: newAttempted, answered: newAnswered }));
    localStorage.setItem('placement_last_activity', new Date().toISOString());
  };

  useEffect(() => {
    if (!mockTestActive || mockTimeLeft <= 0) return;
    const timer = setInterval(() => {
      setMockTimeLeft((prev) => {
        if (prev <= 1) { setMockTestActive(false); setMockScore({ total: mockQuestions.length, correct: 0 }); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [mockTestActive, mockTimeLeft]);

  if (!course || !topic) {
    return (
      <div className="min-h-screen bg-[#070A13] text-slate-100 flex">
        <Sidebar />
        <div className="flex-1 pl-64 pt-16">
          <Navbar title="Topic Not Found" />
          <main className="p-8 max-w-5xl mx-auto text-center py-24">
            <div className="glass-card p-12 rounded-3xl border border-white/5 max-w-md mx-auto">
              <AlertCircle className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-3">Topic Not Found</h2>
              <p className="text-slate-400 text-sm mb-8">The topic you're looking for doesn't exist.</p>
              <button onClick={() => navigate('/placement')} className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-500 transition-all inline-flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" /> Back to Placement
              </button>
            </div>
          </main>
        </div>
      </div>
    );
  }

  const handleAnswer = (option) => {
    if (showAnswer) return;
    setSelected(option);
    setShowAnswer(true);
    const correct = filteredQuestions[currentQ]?.correctAnswer === option;
    const newScore = correct ? score + 1 : score;
    const newAttempted = attempted + 1;
    setScore(newScore);
    setAttempted(newAttempted);
    setAnswered([...answered, { qId: filteredQuestions[currentQ]?.id, selected: option, correct }]);
    saveProgress(newScore, newAttempted, [...answered, { qId: filteredQuestions[currentQ]?.id, selected: option, correct }]);
  };

  const nextQuestion = () => {
    if (currentQ < filteredQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setShowAnswer(false);
    } else {
      setPracticeComplete(true);
    }
  };

  const resetPractice = () => {
    setCurrentQ(0);
    setSelected(null);
    setShowAnswer(false);
    setPracticeComplete(false);
  };

  const startMockTest = () => {
    const test = generateMockTest(filteredQuestions, Math.min(10, filteredQuestions.length));
    setMockQuestions(test);
    setMockTestActive(true);
    setMockScore(null);
    setMockTimeLeft(test.length * 60);
    setCurrentQ(0);
    setSelected(null);
    setShowAnswer(false);
  };

  const handleMockAnswer = (option) => {
    if (showAnswer) return;
    setSelected(option);
    setShowAnswer(true);
  };

  const nextMockQuestion = () => {
    if (currentQ < mockQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelected(null);
      setShowAnswer(false);
    } else {
      let correct = 0;
      mockQuestions.forEach((q, i) => {
        if (q.correctAnswer === answered[answered.length - mockQuestions.length + i]?.selected) correct++;
      });
      setMockScore({ total: mockQuestions.length, correct });
      setMockTestActive(false);
    }
  };

  const isCoding = filteredQuestions[currentQ]?.isCoding;

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex">
      <Sidebar />
      <div className="flex-1 pl-64 pt-16">
        <Navbar title={meta.title} />
        <main className="p-8 max-w-5xl mx-auto space-y-6">
          <Link to={`/placement/course/${courseId}`} className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to {course.name}
          </Link>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-950/30 via-slate-900/60 to-[#070A13] border border-white/5 p-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative">
              <h1 className="text-3xl font-bold text-white mb-2">{meta.title}</h1>
              <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">{meta.description || topic.description}</p>
              <div className="flex items-center gap-4 mt-4 text-sm text-slate-400">
                <div className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" /><span>{questions.length} questions</span></div>
                <div className="flex items-center gap-1.5"><Clock className="w-4 h-4" /><span>{topic.estimatedHours || 0}h estimated</span></div>
                <div className="flex items-center gap-1.5"><Target className="w-4 h-4" /><span>{attempted} attempted</span></div>
                <div className="flex items-center gap-1.5"><Trophy className="w-4 h-4" /><span>{score} correct</span></div>
              </div>
            </div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-white/5">
            <div className="flex items-center gap-2">
              {[
                { id: 'practice', label: 'Practice Mode', icon: Play },
                { id: 'mocktest', label: 'Mock Test', icon: Zap },
                { id: 'resources', label: 'Resources', icon: BookOpen },
              ].map((tab) => {
                const TabIcon = tab.icon;
                return (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      activeTab === tab.id ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25' : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}>
                    <TabIcon className="w-4 h-4" />{tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {activeTab === 'practice' && !practiceComplete && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <Filter className="w-4 h-4 text-slate-400" />
                {['all', 'easy', 'medium', 'hard'].map((d) => (
                  <button key={d} onClick={() => { setDifficulty(d); setCurrentQ(0); setSelected(null); setShowAnswer(false); setPracticeComplete(false); }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      difficulty === d ? 'bg-indigo-600 text-white' : 'bg-white/5 text-slate-400 hover:bg-white/10 border border-white/5'
                    }`}>
                    {d === 'all' ? 'All' : d.charAt(0).toUpperCase() + d.slice(1)}
                  </button>
                ))}
                <span className="text-xs text-slate-500 ml-2">{filteredQuestions.length} questions</span>
              </div>

              {filteredQuestions.length > 0 && (
                <div className="glass-card rounded-2xl border border-white/5 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Question {currentQ + 1} of {filteredQuestions.length}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase border ${difficultyColors[filteredQuestions[currentQ]?.difficulty] || difficultyColors.easy}`}>
                      {filteredQuestions[currentQ]?.difficulty}
                    </span>
                  </div>

                  <div className="w-full h-2 bg-slate-800/60 rounded-full overflow-hidden mb-6">
                    <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all" style={{ width: `${((currentQ + 1) / filteredQuestions.length) * 100}%` }}></div>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-6 leading-relaxed">{filteredQuestions[currentQ]?.question}</h3>

                  {filteredQuestions[currentQ]?.description && (
                    <div className="bg-slate-950/50 border border-white/5 rounded-xl p-4 mb-6">
                      <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono">{filteredQuestions[currentQ].description}</pre>
                    </div>
                  )}

                  {!isCoding && filteredQuestions[currentQ]?.options?.length > 0 && (
                    <div className="space-y-3">
                      {filteredQuestions[currentQ].options.map((opt, i) => {
                        const isSelected = selected === opt;
                        const isCorrect = opt === filteredQuestions[currentQ]?.correctAnswer;
                        let optClass = 'bg-white/5 border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/5';
                        if (showAnswer && isCorrect) optClass = 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300';
                        else if (showAnswer && isSelected && !isCorrect) optClass = 'bg-red-500/10 border-red-500/30 text-red-300';
                        else if (isSelected) optClass = 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300';

                        return (
                          <button key={i} onClick={() => handleAnswer(opt)} disabled={showAnswer}
                            className={`w-full text-left p-4 rounded-xl border transition-all ${optClass} ${showAnswer ? 'cursor-default' : 'cursor-pointer'}`}>
                            <div className="flex items-center gap-3">
                              <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-slate-400 shrink-0">
                                {String.fromCharCode(65 + i)}
                              </span>
                              <span className="text-sm text-slate-200">{opt}</span>
                              {showAnswer && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-400 ml-auto shrink-0" />}
                              {showAnswer && isSelected && !isCorrect && <AlertCircle className="w-5 h-5 text-red-400 ml-auto shrink-0" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {isCoding && (
                    <div className="space-y-3">
                      <div className="bg-slate-950/50 border border-white/5 rounded-xl p-4">
                        <p className="text-xs text-slate-400 mb-2">Test Cases:</p>
                        {filteredQuestions[currentQ]?.testCases?.map((tc, i) => (
                          <div key={i} className="text-xs text-slate-300 mb-1">
                            <span className="text-slate-500">Input:</span> {tc.input || '(none)'} → <span className="text-slate-500">Expected:</span> {tc.expectedOutput}
                          </div>
                        ))}
                      </div>
                      <button onClick={() => navigate('/coding')}
                        className="w-full py-3 rounded-xl bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-500 transition-all flex items-center justify-center gap-2">
                        <Code className="w-4 h-4" /> Open in Coding Arena
                      </button>
                    </div>
                  )}

                  {showAnswer && filteredQuestions[currentQ]?.explanation && (
                    <div className="mt-6 p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/20">
                      <div className="flex items-start gap-2">
                        <Lightbulb className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                        <div>
                          <p className="text-xs font-bold text-indigo-300 mb-1">Explanation</p>
                          <p className="text-sm text-slate-300 leading-relaxed">{filteredQuestions[currentQ].explanation}</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {showAnswer && (
                    <button onClick={nextQuestion}
                      className="mt-6 w-full py-3 rounded-xl bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-500 transition-all flex items-center justify-center gap-2">
                      {currentQ < filteredQuestions.length - 1 ? 'Next Question' : 'View Results'}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              )}

              {filteredQuestions.length === 0 && (
                <div className="glass-card p-12 rounded-2xl border border-white/5 text-center">
                  <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">No questions available</h3>
                  <p className="text-slate-400 text-sm">Try selecting a different difficulty level.</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'practice' && practiceComplete && (
            <div className="glass-card rounded-2xl border border-white/5 p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-8 w-8 text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Practice Complete!</h2>
              <p className="text-slate-400 mb-6">You answered {score} out of {attempted} questions correctly.</p>
              <div className="flex items-center justify-center gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-indigo-400">{attempted > 0 ? Math.round((score / attempted) * 100) : 0}%</p>
                  <p className="text-xs text-slate-500">Accuracy</p>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-400">{score}</p>
                  <p className="text-xs text-slate-500">Correct</p>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-400">{attempted - score}</p>
                  <p className="text-xs text-slate-500">Incorrect</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3 mt-8">
                <button onClick={resetPractice} className="px-6 py-3 rounded-xl bg-white/5 text-white font-medium text-sm hover:bg-white/10 transition-all flex items-center gap-2 border border-white/10">
                  <RotateCcw className="w-4 h-4" /> Practice Again
                </button>
                <button onClick={() => { setActiveTab('mocktest'); startMockTest(); }} className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-500 transition-all flex items-center gap-2">
                  <Zap className="w-4 h-4" /> Take Mock Test
                </button>
              </div>
            </div>
          )}

          {activeTab === 'mocktest' && !mockTestActive && mockScore === null && (
            <div className="glass-card rounded-2xl border border-white/5 p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-amber-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Mock Test</h2>
              <p className="text-slate-400 mb-2 text-sm">Test your knowledge with a timed mock test.</p>
              <p className="text-slate-500 text-xs mb-6">{Math.min(10, filteredQuestions.length)} questions · {Math.min(10, filteredQuestions.length)} minutes</p>
              <button onClick={startMockTest} className="px-8 py-3 rounded-xl bg-amber-600 text-white font-medium text-sm hover:bg-amber-500 transition-all inline-flex items-center gap-2">
                <Play className="w-4 h-4" /> Start Mock Test
              </button>
            </div>
          )}

          {activeTab === 'mocktest' && mockTestActive && (
            <div className="space-y-4">
              <div className="glass-card p-4 rounded-2xl border border-white/5 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Question {currentQ + 1} of {mockQuestions.length}
                </span>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span className={`font-mono text-sm font-bold ${mockTimeLeft < 60 ? 'text-red-400' : 'text-amber-300'}`}>
                    {Math.floor(mockTimeLeft / 60)}:{String(mockTimeLeft % 60).padStart(2, '0')}
                  </span>
                </div>
              </div>

              <div className="glass-card rounded-2xl border border-white/5 p-6">
                <div className="w-full h-2 bg-slate-800/60 rounded-full overflow-hidden mb-6">
                  <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full transition-all" style={{ width: `${((currentQ + 1) / mockQuestions.length) * 100}%` }}></div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-6">{mockQuestions[currentQ]?.question}</h3>
                <div className="space-y-3">
                  {mockQuestions[currentQ]?.options?.map((opt, i) => {
                    const isSelected = selected === opt;
                    const isCorrect = opt === mockQuestions[currentQ]?.correctAnswer;
                    let optClass = 'bg-white/5 border-white/10 hover:border-amber-500/50 hover:bg-amber-500/5';
                    if (showAnswer && isCorrect) optClass = 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300';
                    else if (showAnswer && isSelected && !isCorrect) optClass = 'bg-red-500/10 border-red-500/30 text-red-300';
                    return (
                      <button key={i} onClick={() => handleMockAnswer(opt)} disabled={showAnswer}
                        className={`w-full text-left p-4 rounded-xl border transition-all ${optClass} ${showAnswer ? 'cursor-default' : 'cursor-pointer'}`}>
                        <div className="flex items-center gap-3">
                          <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-slate-400 shrink-0">
                            {String.fromCharCode(65 + i)}
                          </span>
                          <span className="text-sm text-slate-200">{opt}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
                {showAnswer && (
                  <button onClick={nextMockQuestion} className="mt-6 w-full py-3 rounded-xl bg-amber-600 text-white font-medium text-sm hover:bg-amber-500 transition-all flex items-center justify-center gap-2">
                    {currentQ < mockQuestions.length - 1 ? 'Next Question' : 'Finish Test'}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          )}

          {activeTab === 'mocktest' && mockScore !== null && (
            <div className="glass-card rounded-2xl border border-white/5 p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-8 w-8 text-amber-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Mock Test Complete!</h2>
              <div className="flex items-center justify-center gap-4 mt-4 mb-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-amber-400">{mockScore.total > 0 ? Math.round((mockScore.correct / mockScore.total) * 100) : 0}%</p>
                  <p className="text-xs text-slate-500">Score</p>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-400">{mockScore.correct}</p>
                  <p className="text-xs text-slate-500">Correct</p>
                </div>
                <div className="w-px h-12 bg-white/10"></div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-400">{mockScore.total - mockScore.correct}</p>
                  <p className="text-xs text-slate-500">Incorrect</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <button onClick={() => { setMockScore(null); startMockTest(); }} className="px-6 py-3 rounded-xl bg-white/5 text-white font-medium text-sm hover:bg-white/10 transition-all flex items-center gap-2 border border-white/10">
                  <RotateCcw className="w-4 h-4" /> Retake
                </button>
                <button onClick={() => setActiveTab('practice')} className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-500 transition-all flex items-center gap-2">
                  <Play className="w-4 h-4" /> Practice Mode
                </button>
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="space-y-4">
              <div className="glass-card rounded-2xl border border-white/5 p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-400" /> Learning Resources
                </h3>
                <div className="space-y-3">
                  <button onClick={() => setActiveTab('practice')} className="w-full flex items-center gap-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all group text-left">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center border bg-emerald-500/20 text-emerald-300 border-emerald-500/30">
                      <Code className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white group-hover:text-emerald-300 truncate">Practice Question Bank</p>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border mt-1 bg-emerald-500/20 text-emerald-300 border-emerald-500/30">practice</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-emerald-400 shrink-0" />
                  </button>
                  <button onClick={() => { setActiveTab('mocktest'); startMockTest(); }} className="w-full flex items-center gap-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 transition-all group text-left">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center border bg-amber-500/20 text-amber-300 border-amber-500/30">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white group-hover:text-amber-300 truncate">Mock Test Series</p>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border mt-1 bg-amber-500/20 text-amber-300 border-amber-500/30">mock test</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 shrink-0" />
                  </button>
                  <button onClick={() => navigate('/aptitude')} className="w-full flex items-center gap-4 p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 hover:bg-indigo-500/20 transition-all group text-left">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center border bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
                      <Brain className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white group-hover:text-indigo-300 truncate">Aptitude & Reasoning Arena</p>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border mt-1 bg-indigo-500/20 text-indigo-300 border-indigo-500/30">article</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-indigo-400 shrink-0" />
                  </button>
                  <button onClick={() => navigate('/interview')} className="w-full flex items-center gap-4 p-4 rounded-xl bg-pink-500/10 border border-pink-500/20 hover:bg-pink-500/20 transition-all group text-left">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center border bg-pink-500/20 text-pink-300 border-pink-500/30">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white group-hover:text-pink-300 truncate">Interview Questions Bank</p>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border mt-1 bg-pink-500/20 text-pink-300 border-pink-500/30">interview</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-pink-400 shrink-0" />
                  </button>
                  <button onClick={() => navigate('/resume')} className="w-full flex items-center gap-4 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all group text-left">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center border bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white group-hover:text-cyan-300 truncate">Resume Analyzer & PYQ</p>
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border mt-1 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">notes</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 shrink-0" />
                  </button>
                </div>
              </div>

              <div className="glass-card rounded-2xl border border-white/5 p-6">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-indigo-400" /> Your Progress
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-xl bg-white/5">
                    <p className="text-2xl font-bold text-indigo-400">{attempted}</p>
                    <p className="text-xs text-slate-500 mt-1">Questions Attempted</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/5">
                    <p className="text-2xl font-bold text-emerald-400">{score}</p>
                    <p className="text-xs text-slate-500 mt-1">Correct Answers</p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-white/5">
                    <p className="text-2xl font-bold text-amber-400">{attempted > 0 ? Math.round((score / attempted) * 100) : 0}%</p>
                    <p className="text-xs text-slate-500 mt-1">Accuracy Rate</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
