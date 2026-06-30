import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import {
  FileText,
  Upload,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  ListTodo,
  History,
  Loader2,
  FileDown,
  XCircle
} from 'lucide-react';

const ResumeAnalyzer = () => {
  const { apiUrl } = useAuth();

  // States
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [history, setHistory] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch upload history
  const fetchHistory = async () => {
    setHistoryLoading(true);
    const token = localStorage.getItem('token');
    try {
      const res = await fetch(`${apiUrl}/resume/history`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setHistory(data.history);
      }
    } catch (err) {
      console.error('Error fetching history:', err);
    } finally {
      setHistoryLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, [apiUrl]);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setError('');
    }
  };

  // Upload and submit analysis
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    setAnalysis(null);
    setError('');
    const token = localStorage.getItem('token');

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const res = await fetch(`${apiUrl}/resume/analyze`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      const data = await res.json();
      if (data.success) {
        setAnalysis(data.analysis);
        setError('');
        fetchHistory();
      } else {
        setError(data.message || 'Analysis failed. Please check the file format and try again.');
      }
    } catch (err) {
      console.error(err);
      setError('Network error — could not reach the server. Make sure the backend is running and try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex">
      <Sidebar />
      <div className="flex-1 pl-64 pt-16">
        <Navbar title="AI Resume Reviewer" />

        <main className="p-8 max-w-5xl mx-auto text-left space-y-8">

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Drop zone upload container */}
            <div className="lg:col-span-1 space-y-6">
              <div className="glass-card p-6 rounded-3xl space-y-6">
                <div className="text-left">
                  <h3 className="font-bold text-white text-base">Upload Document</h3>
                  <p className="text-[10px] text-slate-400 mt-1">Provide a PDF, TXT, or Word resume below.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* File input label area */}
                  <label className="border border-dashed border-white/10 hover:border-indigo-500/30 bg-slate-950/20 p-8 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all group">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.txt,.docx,.doc"
                      className="hidden"
                    />
                    <Upload className="h-8 w-8 text-slate-500 group-hover:text-indigo-400 mb-3 transition-colors" />
                    <span className="text-xs font-semibold text-slate-300">
                      {file ? file.name : 'Select Resume File'}
                    </span>
                    <span className="text-[9px] text-slate-500 mt-1">PDF, TXT or DOCX up to 5MB</span>
                  </label>

                  {/* Inline Error Message */}
                  {error && (
                    <div className="flex items-start gap-2.5 bg-red-500/10 border border-red-500/20 text-red-300 px-4 py-3 rounded-xl text-xs leading-relaxed">
                      <XCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={!file || uploading}
                    className="w-full btn-gradient py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 disabled:opacity-40"
                  >
                    {uploading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Analyzing Resume...
                      </>
                    ) : (
                      <>
                        <FileText className="h-4 w-4" />
                        Analyze Resume
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Upload History list */}
              <div className="glass-card p-6 rounded-3xl space-y-4">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <History className="h-4.5 w-4.5 text-indigo-400" />
                  Review History
                </h3>

                <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                  {historyLoading ? (
                    <div className="flex justify-center py-4">
                      <Loader2 className="h-5 w-5 text-indigo-500 animate-spin" />
                    </div>
                  ) : history.length > 0 ? (
                    history.map((h) => (
                      <button
                        key={h._id}
                        onClick={() => { setAnalysis(h); setError(''); }}
                        className="w-full text-left p-3 rounded-xl bg-slate-950/20 hover:bg-slate-950/40 border border-white/5 hover:border-white/10 transition-all flex items-center justify-between gap-3 group"
                      >
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold text-slate-200 truncate group-hover:text-indigo-300 transition-colors">
                            {h.fileName}
                          </p>
                          <p className="text-[9px] text-slate-500 mt-0.5">
                            {new Date(h.analyzedAt).toLocaleDateString()}
                          </p>
                        </div>
                        <span className="text-xs font-bold text-indigo-400 shrink-0 bg-indigo-500/10 px-2 py-0.5 rounded">
                          {h.score}/100
                        </span>
                      </button>
                    ))
                  ) : (
                    <div className="text-slate-500 italic text-[10px] py-4 text-center">No uploads recorded.</div>
                  )}
                </div>
              </div>
            </div>

            {/* Right: Analysis Report panel */}
            <div className="lg:col-span-2">
              {analysis ? (
                <div className="space-y-6 animate-fade-in">

                  {/* Rating Header info */}
                  <div className="glass-card p-8 rounded-3xl border-indigo-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <div className="text-left space-y-2">
                      <div className="inline-flex items-center gap-1.5 bg-indigo-500/15 border border-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase">
                        AI Score Report
                      </div>
                      <h2 className="text-xl font-bold text-white tracking-tight">{analysis.fileName}</h2>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Analysis evaluated your resume against benchmark criteria (Structure, technical keynotes, and placement profiles).
                      </p>
                    </div>

                    {/* Circular Score Rating Meter */}
                    <div className="relative w-24 h-24 flex items-center justify-center bg-slate-950/40 border border-white/5 rounded-3xl shrink-0">
                      <div className="text-center">
                        <span className="text-3xl font-extrabold text-indigo-400">{analysis.score}</span>
                        <p className="text-[8px] text-slate-400 uppercase tracking-wider font-bold mt-0.5">Score</p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Bullet categories */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Strengths */}
                    <div className="glass-card p-6 rounded-2xl space-y-4">
                      <h4 className="font-bold text-xs text-emerald-400 tracking-tight flex items-center gap-2 uppercase">
                        <CheckCircle2 className="h-4.5 w-4.5" />
                        Key Strengths
                      </h4>
                      <ul className="space-y-2.5 text-xs text-slate-300">
                        {analysis.keyStrengths?.map((s, idx) => (
                          <li key={idx} className="flex gap-2 items-start leading-relaxed">
                            <span className="text-emerald-500 mt-1 shrink-0">&#8226;</span>
                            <span>{s}</span>
                          </li>
                        )) || <li className="italic text-slate-500">None logged</li>}
                      </ul>
                    </div>

                    {/* Improvements */}
                    <div className="glass-card p-6 rounded-2xl space-y-4">
                      <h4 className="font-bold text-xs text-yellow-400 tracking-tight flex items-center gap-2 uppercase">
                        <AlertTriangle className="h-4.5 w-4.5" />
                        Required Actions
                      </h4>
                      <ul className="space-y-2.5 text-xs text-slate-300">
                        {analysis.improvements?.map((imp, idx) => (
                          <li key={idx} className="flex gap-2 items-start leading-relaxed">
                            <span className="text-yellow-500 mt-1 shrink-0">&#8226;</span>
                            <span>{imp}</span>
                          </li>
                        )) || <li className="italic text-slate-500">None logged</li>}
                      </ul>
                    </div>
                  </div>

                  {/* Missing Skills and Raw Summary */}
                  <div className="glass-card p-6 rounded-2xl space-y-5">
                    {/* Missing Skills tags */}
                    {analysis.missingSkills && analysis.missingSkills.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="font-bold text-xs text-indigo-400 tracking-tight uppercase flex items-center gap-2">
                          <ListTodo className="h-4.5 w-4.5" />
                          Recommended Placement Skills to Add
                        </h4>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {analysis.missingSkills.map((sk, idx) => (
                            <span key={idx} className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-bold px-3 py-1 rounded-xl uppercase">
                              {sk}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Summary feedback markdown */}
                    <div className="space-y-2 pt-2 border-t border-white/5">
                      <h4 className="font-bold text-xs text-slate-300 uppercase">AI Review Summary</h4>
                      <div className="text-xs text-slate-400 leading-relaxed whitespace-pre-wrap bg-slate-950/20 p-4 rounded-xl border border-white/5">
                        {analysis.rawFeedback}
                      </div>
                    </div>
                  </div>

                </div>
              ) : (
                <div className="h-full border border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center p-12 text-slate-500 min-h-[400px]">
                  <FileDown className="h-12 w-12 text-slate-700 mb-4" />
                  <p className="text-sm font-semibold text-slate-400">No Assessment Loaded</p>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs text-center">
                    Select a resume from the review history or upload a document to get an automated grading report.
                  </p>
                </div>
              )}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default ResumeAnalyzer;
