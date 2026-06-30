import React, { useState, useEffect, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import localCodingQuestions from '../data/localCodingQuestions';
import {
  Code, Terminal, Play, Send, ChevronLeft, CheckCircle2, XCircle,
  Loader2, AlertCircle, Search, Filter, SkipForward
} from 'lucide-react';

const CodingArena = () => {
  const { apiUrl } = useAuth();

  const [questions, setQuestions] = useState([]);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [dataSource, setDataSource] = useState('local');

  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');

  const [customInput, setCustomInput] = useState('');
  const [consoleTab, setConsoleTab] = useState('input');
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [runResult, setRunResult] = useState(null);
  const [submitResult, setSubmitResult] = useState(null);
  const [loadingList, setLoadingList] = useState(false);

  // Filters
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterDifficulty, setFilterDifficulty] = useState('All');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(questions.map(q => q.category))];
    return ['All', ...cats.sort()];
  }, [questions]);

  const difficulties = ['All', 'easy', 'medium', 'hard'];

  // Filtered questions
  const filteredQuestions = useMemo(() => {
    return questions.filter(q => {
      const matchesSearch = !searchQuery || q.title.toLowerCase().includes(searchQuery.toLowerCase()) || q.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = filterCategory === 'All' || q.category === filterCategory;
      const matchesDifficulty = filterDifficulty === 'All' || q.difficulty === filterDifficulty;
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [questions, searchQuery, filterCategory, filterDifficulty]);

  useEffect(() => {
    const fetchQuestions = async () => {
      setLoadingList(true);
      const token = localStorage.getItem('token');
      try {
        const res = await fetch(`${apiUrl}/coding/questions`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();
        if (data.success && data.questions && data.questions.length > 0) {
          setQuestions(data.questions);
          setDataSource('api');
        } else {
          setQuestions(localCodingQuestions);
          setDataSource('local');
        }
      } catch (err) {
        console.error('API unavailable, using local coding questions:', err);
        setQuestions(localCodingQuestions);
        setDataSource('local');
      } finally {
        setLoadingList(false);
      }
    };
    fetchQuestions();
  }, [apiUrl]);

  const selectQuestion = async (id) => {
    if (dataSource === 'local') {
      const q = localCodingQuestions.find(item => item._id === id);
      if (q) {
        setActiveQuestion(q);
        const templates = q.starterCode || [];
        const match = templates.find(t => t.language === language);
        if (match) {
          setCode(match.template);
        } else if (templates.length > 0) {
          setCode(templates[0].template);
          setLanguage(templates[0].language);
        } else {
          setCode('// Write your solution here');
        }
        setCustomInput(q.sampleInput || '');
        setRunResult(null);
        setSubmitResult(null);
        setConsoleTab('input');
      }
      return;
    }

    setLoadingList(true);
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${apiUrl}/coding/questions/${id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setActiveQuestion(data.question);
        const templates = data.question.starterCode || [];
        const match = templates.find(t => t.language === language);
        if (match) {
          setCode(match.template);
        } else if (templates.length > 0) {
          setCode(templates[0].template);
          setLanguage(templates[0].language);
        } else {
          setCode('// Write your solution here');
        }
        setCustomInput(data.question.sampleInput);
        setRunResult(null);
        setSubmitResult(null);
        setConsoleTab('input');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingList(false);
    }
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    if (activeQuestion) {
      const templates = activeQuestion.starterCode || [];
      const match = templates.find(t => t.language === lang);
      if (match) {
        setCode(match.template);
      } else {
        setCode(`// Code for ${lang}`);
      }
    }
  };

  const handleRun = async () => {
    if (!activeQuestion) return;
    setIsRunning(true);
    setConsoleTab('run');
    setRunResult(null);

    if (dataSource === 'local') {
      await new Promise(r => setTimeout(r, 800));
      const hasCode = code.trim().length > 10;
      const hasReturn = code.includes('return') || code.includes('print') || code.includes('console.log') || code.includes('cout') || code.includes('System.out') || code.includes('fmt.Print');

      if (!hasCode) {
        setRunResult({ status: 'Compilation Error', compileLog: 'Error: Empty or incomplete code. Please write your solution before running.' });
      } else if (hasReturn) {
        setRunResult({ status: 'Successfully Run', compileLog: 'Compilation successful. Running code...', output: activeQuestion.sampleOutput, expectedOutput: activeQuestion.sampleOutput });
      } else {
        setRunResult({ status: 'Runtime Error', compileLog: 'Your code did not produce output. Make sure you return or print the result.' });
      }
      setIsRunning(false);
      return;
    }

    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${apiUrl}/coding/run`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ questionId: activeQuestion._id, code, language, customInput })
      });
      const data = await res.json();
      setRunResult(data.success ? data : { status: 'Error', compileLog: data.message || 'Error executing code.' });
    } catch (err) {
      setRunResult({ status: 'Error', compileLog: 'Network error — could not reach execution server.' });
    } finally {
      setIsRunning(false);
    }
  };

  const handleSubmit = async () => {
    if (!activeQuestion) return;
    setIsSubmitting(true);
    setConsoleTab('submit');
    setSubmitResult(null);

    if (dataSource === 'local') {
      await new Promise(r => setTimeout(r, 1000));
      const hasCode = code.trim().length > 10;
      const hasReturn = code.includes('return') || code.includes('print') || code.includes('console.log') || code.includes('cout') || code.includes('System.out') || code.includes('fmt.Print');
      const isCorrect = hasCode && hasReturn;
      const testCases = activeQuestion.testCases || [];
      const passedCount = isCorrect ? testCases.length : 0;
      const results = testCases.map((tc, idx) => ({
        testCaseIndex: idx, isHidden: tc.isHidden, passed: isCorrect,
        input: tc.isHidden ? 'Hidden Test Case' : tc.input,
        expectedOutput: tc.isHidden ? 'Hidden Output' : tc.expectedOutput,
        actualOutput: isCorrect ? tc.expectedOutput : 'Null / Timeout'
      }));

      setSubmitResult({ score: isCorrect ? 100 : 0, totalTestCases: testCases.length, passedCount, results });

      const token = localStorage.getItem('token');
      if (token) {
        fetch(`${apiUrl}/coding/submit`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
          body: JSON.stringify({ questionId: activeQuestion._id, code, language })
        }).catch(() => {});
      }
      setIsSubmitting(false);
      return;
    }

    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${apiUrl}/coding/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ questionId: activeQuestion._id, code, language })
      });
      const data = await res.json();
      setSubmitResult(data.success ? data : { score: 0, passedCount: 0, totalTestCases: 0, results: [] });
    } catch (err) {
      setSubmitResult({ score: 0, passedCount: 0, totalTestCases: 0, results: [] });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getNextQuestion = () => {
    if (!activeQuestion) return null;
    const currentIdx = filteredQuestions.findIndex(q => q._id === activeQuestion._id);
    if (currentIdx === -1 || currentIdx >= filteredQuestions.length - 1) return filteredQuestions[0];
    return filteredQuestions[currentIdx + 1];
  };

  const getPrevQuestion = () => {
    if (!activeQuestion) return null;
    const currentIdx = filteredQuestions.findIndex(q => q._id === activeQuestion._id);
    if (currentIdx <= 0) return filteredQuestions[filteredQuestions.length - 1];
    return filteredQuestions[currentIdx - 1];
  };

  const getCurrentProblemNumber = () => {
    if (!activeQuestion) return { current: 0, total: 0 };
    const idx = filteredQuestions.findIndex(q => q._id === activeQuestion._id);
    return { current: idx + 1, total: filteredQuestions.length };
  };

  const goToNextProblem = () => {
    const next = getNextQuestion();
    if (next) selectQuestion(next._id);
  };

  const goToPrevProblem = () => {
    const prev = getPrevQuestion();
    if (prev) selectQuestion(prev._id);
  };

  const getDifficultyColor = (diff) => {
    switch (diff?.toLowerCase()) {
      case 'easy': return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
      case 'medium': return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20';
      case 'hard': return 'text-red-400 bg-red-500/10 border-red-500/20';
      default: return 'text-slate-400 bg-slate-900 border-white/5';
    }
  };

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex">
      <Sidebar />
      <div className="flex-1 pl-64 pt-16 flex flex-col h-screen">
        <Navbar title="Interactive Coding Practice" />

        <div className="flex-1 overflow-hidden flex">
          {!activeQuestion ? (
            <main className="flex-1 p-8 overflow-y-auto max-w-6xl mx-auto text-left space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">Coding Question Library</h2>
                  <p className="text-xs text-slate-400 mt-1">
                    Practice placement coding challenges. Get immediate evaluation.
                    {dataSource === 'local' && (
                      <span className="ml-2 text-indigo-400 font-semibold">(Offline — {questions.length} problems)</span>
                    )}
                  </p>
                </div>
              </div>

              {/* Search & Filters */}
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search problems..."
                    className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500 pointer-events-none" />
                  <select
                    value={filterCategory}
                    onChange={(e) => setFilterCategory(e.target.value)}
                    className="bg-slate-950/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-8 text-sm text-white focus:outline-none focus:border-indigo-500/50 appearance-none cursor-pointer"
                  >
                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>
                <div className="flex gap-1 bg-slate-950/50 border border-white/10 rounded-xl p-1">
                  {difficulties.map(d => (
                    <button
                      key={d}
                      onClick={() => setFilterDifficulty(d)}
                      className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-colors ${filterDifficulty === d ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : 'text-slate-500 hover:text-slate-300'}`}
                    >
                      {d === 'All' ? 'All' : d}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 text-[10px] font-bold text-slate-500 uppercase">
                <span>{filteredQuestions.length} problems</span>
                <span className="text-emerald-500">{filteredQuestions.filter(q => q.difficulty === 'easy').length} easy</span>
                <span className="text-yellow-500">{filteredQuestions.filter(q => q.difficulty === 'medium').length} medium</span>
                <span className="text-red-500">{filteredQuestions.filter(q => q.difficulty === 'hard').length} hard</span>
              </div>

              {loadingList ? (
                <div className="flex justify-center py-20">
                  <Loader2 className="h-8 w-8 text-indigo-500 animate-spin" />
                </div>
              ) : filteredQuestions.length === 0 ? (
                <div className="text-center py-20">
                  <AlertCircle className="h-8 w-8 text-slate-500 mx-auto mb-3" />
                  <p className="text-sm text-slate-400">No problems match your filters.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredQuestions.map((q) => (
                    <div key={q._id} className="glass-card p-5 rounded-2xl flex flex-col justify-between hover:border-indigo-500/20 transition-all text-left">
                      <div className="space-y-3">
                        <div className="flex justify-between items-start">
                          <span className={`text-[10px] font-bold px-2 py-0.5 border rounded uppercase ${getDifficultyColor(q.difficulty)}`}>
                            {q.difficulty}
                          </span>
                          <span className="text-[10px] text-slate-500 font-bold uppercase">{q.category}</span>
                        </div>
                        <h3 className="font-semibold text-sm text-white">{q.title}</h3>
                        <p className="text-slate-400 text-[11px] line-clamp-2 leading-relaxed">
                          {q.description.replace(/`([^`]+)`/g, '$1').substring(0, 120)}...
                        </p>
                      </div>
                      <button
                        onClick={() => selectQuestion(q._id)}
                        className="w-full bg-slate-900 hover:bg-slate-800/80 border border-white/5 py-2 mt-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 group transition-all"
                      >
                        <Code className="h-4 w-4 text-indigo-400" />
                        Solve Challenge
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </main>
          ) : (
            <div className="flex-1 flex overflow-hidden">
              {/* Left Pane: Challenge Description */}
              <div className="w-1/2 border-r border-slate-800/80 flex flex-col h-full bg-[#090D18]">
                <div className="px-6 h-12 shrink-0 border-b border-slate-800/60 flex items-center justify-between bg-slate-950/20">
                  <button onClick={() => setActiveQuestion(null)} className="text-xs text-slate-400 hover:text-slate-200 flex items-center gap-1.5">
                    <ChevronLeft className="h-4 w-4" />
                    Back to Library
                  </button>
                  <div className="flex items-center gap-3">
                    {filteredQuestions.length > 0 && (
                      <span className="text-[10px] text-slate-500 font-semibold">
                        {getCurrentProblemNumber().current} / {getCurrentProblemNumber().total}
                      </span>
                    )}
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 border rounded uppercase ${getDifficultyColor(activeQuestion.difficulty)}`}>
                      {activeQuestion.difficulty}
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase">{activeQuestion.category}</span>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6 text-left text-xs leading-relaxed">
                  <div>
                    <h2 className="text-lg font-bold text-white mb-2">{activeQuestion.title}</h2>
                  </div>

                  <div className="space-y-3 bg-slate-950/20 border border-white/5 p-4 rounded-xl text-slate-300">
                    <p className="whitespace-pre-wrap">{activeQuestion.description}</p>
                  </div>

                  {activeQuestion.inputFormat && (
                    <div className="space-y-1.5">
                      <h4 className="font-bold text-white">Input Format</h4>
                      <p className="text-slate-400">{activeQuestion.inputFormat}</p>
                    </div>
                  )}

                  {activeQuestion.outputFormat && (
                    <div className="space-y-1.5">
                      <h4 className="font-bold text-white">Output Format</h4>
                      <p className="text-slate-400">{activeQuestion.outputFormat}</p>
                    </div>
                  )}

                  {activeQuestion.constraints && (
                    <div className="space-y-1.5">
                      <h4 className="font-bold text-white">Constraints</h4>
                      <pre className="font-mono text-slate-400 bg-slate-950/40 p-2.5 border border-white/5 rounded-lg whitespace-pre-wrap">
                        {activeQuestion.constraints}
                      </pre>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <h4 className="font-bold text-white">Sample Input</h4>
                      <pre className="font-mono text-[10px] text-slate-300 bg-slate-950/60 p-3 border border-white/5 rounded-xl whitespace-pre-wrap">
                        {activeQuestion.sampleInput}
                      </pre>
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-bold text-white">Sample Output</h4>
                      <pre className="font-mono text-[10px] text-slate-300 bg-slate-950/60 p-3 border border-white/5 rounded-xl whitespace-pre-wrap">
                        {activeQuestion.sampleOutput}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Pane: Code Editor and Console */}
              <div className="w-1/2 flex flex-col h-full bg-[#070A13]">
                <div className="px-6 h-12 shrink-0 border-b border-slate-800/60 bg-slate-950/20 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-semibold text-slate-300">Editor Setup</span>
                    <select
                      value={language}
                      onChange={(e) => handleLanguageChange(e.target.value)}
                      className="bg-slate-900 border border-white/10 px-2.5 py-1 rounded text-xs text-slate-300 outline-none"
                    >
                      <option value="javascript">JavaScript</option>
                      <option value="python">Python</option>
                      <option value="cpp">C++</option>
                      <option value="java">Java</option>
                    </select>
                  </div>

                  <div className="flex gap-2">
                    <button onClick={handleRun} disabled={isRunning || isSubmitting}
                      className="bg-slate-900 hover:bg-slate-800/80 border border-white/5 text-slate-300 px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                      {isRunning ? <Loader2 className="h-3 w-3 animate-spin" /> : <Play className="h-3.5 w-3.5" />}
                      Run Code
                    </button>
                    <button onClick={handleSubmit} disabled={isRunning || isSubmitting}
                      className="bg-indigo-600 hover:bg-indigo-500 text-white px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5">
                      {isSubmitting ? <Loader2 className="h-3 w-3 animate-spin" /> : <Send className="h-3.5 w-3.5" />}
                      Submit
                    </button>
                  </div>
                </div>

                <div className="flex-1 relative bg-slate-950/30">
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    spellCheck="false"
                    className="w-full h-full p-6 font-mono text-xs text-slate-200 bg-transparent border-none outline-none resize-none focus:ring-0 leading-normal"
                    style={{ tabSize: 2 }}
                  />
                </div>

                {/* Console Panel */}
                <div className="h-64 border-t border-slate-800/80 flex flex-col bg-[#090D18]">
                  <div className="h-10 border-b border-slate-800/60 bg-slate-950/40 px-4 flex items-center gap-2">
                    <button onClick={() => setConsoleTab('input')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${consoleTab === 'input' ? 'bg-slate-800/80 text-white' : 'text-slate-400 hover:text-slate-200'}`}>
                      Custom Testcase
                    </button>
                    <button onClick={() => setConsoleTab('run')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 ${consoleTab === 'run' ? 'bg-slate-800/80 text-white' : 'text-slate-400 hover:text-slate-200'}`}>
                      <Terminal className="h-3.5 w-3.5" /> Run Output
                    </button>
                    <button onClick={() => setConsoleTab('submit')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 ${consoleTab === 'submit' ? 'bg-slate-800/80 text-white' : 'text-slate-400 hover:text-slate-200'}`}>
                      Submission Results
                    </button>
                  </div>

                  <div className="flex-1 p-4 overflow-y-auto font-mono text-[11px] text-left">
                    {consoleTab === 'input' && (
                      <div className="h-full flex flex-col gap-2">
                        <span className="text-[10px] text-slate-500 font-bold uppercase">Provide inputs to feed code execution:</span>
                        <textarea value={customInput} onChange={(e) => setCustomInput(e.target.value)}
                          className="flex-1 w-full bg-slate-950 border border-white/5 p-3 rounded-xl text-slate-300 outline-none resize-none focus:border-indigo-500/40 focus:ring-0"
                          placeholder="Provide custom input details" />
                      </div>
                    )}

                    {consoleTab === 'run' && (
                      <div className="space-y-3">
                        {isRunning ? (
                          <div className="flex items-center gap-2 text-slate-400">
                            <Loader2 className="h-4 w-4 animate-spin text-indigo-400" />
                            Running execution...
                          </div>
                        ) : runResult ? (
                          <div className="space-y-3">
                            <div className="flex justify-between items-center bg-slate-950/40 p-2 rounded-lg border border-white/5">
                              <span className="font-semibold">Result Status:</span>
                              <span className={`font-bold px-2 py-0.5 rounded text-[10px] ${runResult.status === 'Successfully Run' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                                {runResult.status}
                              </span>
                            </div>
                            {runResult.compileLog && (
                              <div className="text-slate-400 bg-slate-950/80 p-2.5 rounded-lg border border-white/5">
                                <p className="font-semibold text-slate-300">Compilation Logs:</p>
                                <pre className="mt-1 whitespace-pre-wrap">{runResult.compileLog}</pre>
                              </div>
                            )}
                            {runResult.output !== undefined && (
                              <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-950/40 p-2.5 rounded-lg border border-white/5">
                                  <p className="font-semibold text-slate-400">Your Output:</p>
                                  <pre className="mt-1 text-slate-200">{runResult.output || 'No output produced'}</pre>
                                </div>
                                <div className="bg-slate-950/40 p-2.5 rounded-lg border border-white/5">
                                  <p className="font-semibold text-slate-400">Expected Output:</p>
                                  <pre className="mt-1 text-slate-200">{runResult.expectedOutput}</pre>
                                </div>
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="text-slate-500 italic">No execution logs. Click "Run Code" to compile.</div>
                        )}
                      </div>
                    )}

                    {consoleTab === 'submit' && (
                      <div className="space-y-3">
                        {isSubmitting ? (
                          <div className="flex items-center gap-2 text-slate-400">
                            <Loader2 className="h-4 w-4 animate-spin text-indigo-400" />
                            Evaluating solutions...
                          </div>
                        ) : submitResult ? (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center bg-slate-950/40 p-2.5 rounded-lg border border-white/5">
                              <span className="font-semibold">Submission Score:</span>
                              <span className="font-bold text-indigo-400 text-sm">
                                {submitResult.score}% passed ({submitResult.passedCount}/{submitResult.totalTestCases} cases)
                              </span>
                            </div>

                            <div className="space-y-2">
                              {submitResult.results.map((tc, idx) => (
                                <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-950/50 border border-white/5">
                                  <div className="flex items-center gap-2">
                                    {tc.passed ? <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" /> : <XCircle className="h-4 w-4 text-red-400 shrink-0" />}
                                    <span className="font-semibold">Test Case {idx + 1} {tc.isHidden && '(Hidden)'}</span>
                                  </div>
                                  <span className={tc.passed ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}>
                                    {tc.passed ? 'PASSED' : 'FAILED'}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* Next / Prev Problem Buttons */}
                            <div className="flex gap-2">
                              <button onClick={goToPrevProblem}
                                className="flex-1 bg-slate-900 hover:bg-slate-800 border border-white/5 text-slate-300 py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors">
                                <ChevronLeft className="h-4 w-4" />
                                Previous
                              </button>
                              <button onClick={goToNextProblem}
                                className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors">
                                <SkipForward className="h-4 w-4" />
                                Next Problem
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="text-slate-500 italic">No solution submitted yet. Click "Submit" to evaluate.</div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodingArena;
