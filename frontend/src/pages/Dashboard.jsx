import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { 
  Award, 
  BookOpen, 
  Code, 
  FileText, 
  TrendingUp, 
  Clock, 
  ArrowUpRight,
  MessageSquare,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user, apiUrl } = useAuth();
  
  const [stats, setStats] = useState({
    aptitudeCount: 0,
    avgAptitude: 0,
    codingCount: 0,
    avgCoding: 0,
    latestResumeScore: 0,
    readinessScore: 0,
    interviewReviewed: 0,
    interviewTopics: 0
  });

  const [scoreHistory, setScoreHistory] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayStats, setDisplayStats] = useState({ aptitudeCount: 0, codingCount: 0, avgAptitude: 0, avgCoding: 0, readinessScore: 0, latestResumeScore: 0 });

  // Profile completion calculation
  const profileCompletion = React.useMemo(() => {
    if (!user) return 0;
    const fields = [
      user.name, user.mobile, user.dob, user.gender, user.city, user.state,
      user.linkedinUrl, user.githubUrl, user.collegeName,
      user.academicDetails?.course, user.academicDetails?.branch,
      user.academicDetails?.cgpa, user.academicDetails?.graduationYear,
      user.placementGoals?.targetRole, user.placementGoals?.dreamCompany,
      user.resumePath
    ];
    const skillBonus = (user.skills?.length > 0) ? 1 : 0;
    const filled = fields.filter(f => f && String(f).trim() !== '').length + skillBonus;
    return Math.round((filled / (fields.length + 1)) * 100);
  }, [user]);

  // Animate counters on stats update
  useEffect(() => {
    const animateValue = (key, target, duration = 800) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;
      const timer = setInterval(() => {
        current = Math.min(current + increment, target);
        setDisplayStats(prev => ({ ...prev, [key]: Math.round(current) }));
        if (current >= target) clearInterval(timer);
      }, 16);
    };
    if (!loading) {
      animateValue('aptitudeCount', stats.aptitudeCount);
      animateValue('codingCount', stats.codingCount);
      animateValue('avgAptitude', stats.avgAptitude);
      animateValue('avgCoding', stats.avgCoding);
      animateValue('readinessScore', stats.readinessScore);
      animateValue('latestResumeScore', stats.latestResumeScore);
    }
  }, [loading, stats]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        // Fetch Aptitude history
        const aptRes = await fetch(`${apiUrl}/aptitude/history`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const aptData = await aptRes.json();

        // Fetch Coding history
        const codeRes = await fetch(`${apiUrl}/coding/history`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const codeData = await codeRes.json();

        // Fetch Resume history
        const resumeRes = await fetch(`${apiUrl}/resume/history`, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const resumeData = await resumeRes.json();

        // Calculate Stats
        const aptHistory = aptData.success ? aptData.history : [];
        const codingHistory = codeData.success ? codeData.history : [];
        const resumeHistory = resumeData.success ? resumeData.history : [];

        const aptCount = aptHistory.length;
        const codeCount = codingHistory.length;

        const avgApt = aptCount > 0 
          ? Math.round(aptHistory.reduce((sum, r) => sum + r.score, 0) / aptCount)
          : 0;

        const avgCode = codeCount > 0
          ? Math.round(codingHistory.reduce((sum, r) => sum + r.score, 0) / codeCount)
          : 0;

        const resumeScore = resumeHistory.length > 0 ? resumeHistory[0].score : 0;

        // Read interview progress from localStorage
        let interviewReviewed = 0;
        let interviewTopics = 0;
        try {
          const storedHr = JSON.parse(localStorage.getItem('interview_hr_reviewed') || '[]');
          const storedTopics = JSON.parse(localStorage.getItem('interview_topics_explored') || '[]');
          interviewReviewed = Array.isArray(storedHr) ? storedHr.length : 0;
          interviewTopics = Array.isArray(storedTopics) ? storedTopics.length : 0;
        } catch (e) {
          // localStorage may be empty or corrupted
        }

        // Placement Readiness Score Calculation
        // Formula: 35% Aptitude, 35% Coding, 15% Interview, 15% Resume
        let readiness = 0;
        let dividers = 0;
        if (avgApt > 0) { readiness += avgApt * 0.35; dividers += 0.35; }
        if (avgCode > 0) { readiness += avgCode * 0.35; dividers += 0.35; }
        if (interviewReviewed > 0) {
          const interviewScore = Math.min(100, Math.round(((interviewReviewed / 5) * 50) + ((interviewTopics / 4) * 50)));
          readiness += interviewScore * 0.15; dividers += 0.15;
        }
        if (resumeScore > 0) { readiness += resumeScore * 0.15; dividers += 0.15; }
        
        const finalReadiness = dividers > 0 ? Math.round(readiness / dividers) : 0;

        setStats({
          aptitudeCount: aptCount,
          avgAptitude: avgApt,
          codingCount: codeCount,
          avgCoding: avgCode,
          latestResumeScore: resumeScore,
          readinessScore: finalReadiness,
          interviewReviewed,
          interviewTopics
        });

        // Construct chart history
        const mergedHistory = [];
        
        // Add aptitude points
        aptHistory.forEach(item => {
          mergedHistory.push({
            date: new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            timestamp: new Date(item.date).getTime(),
            score: item.score,
            type: 'Aptitude'
          });
        });

        // Add coding points
        codingHistory.forEach(item => {
          mergedHistory.push({
            date: new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            timestamp: new Date(item.date).getTime(),
            score: item.score,
            type: 'Coding'
          });
        });

        // Sort by timestamp
        mergedHistory.sort((a, b) => a.timestamp - b.timestamp);
        setScoreHistory(mergedHistory.slice(-8)); // Limit to last 8 attempts

        // Activity list
        const activities = [];
        aptHistory.slice(0, 3).forEach(a => {
          activities.push({
            title: `Completed ${a.category} Assessment`,
            desc: `Scored ${a.score}% (${a.correctAnswers}/${a.totalQuestions} correct)`,
            date: new Date(a.date),
            icon: BookOpen,
            color: 'text-indigo-400'
          });
        });

        codingHistory.slice(0, 3).forEach(c => {
          activities.push({
            title: `Submitted Solution for ${c.category}`,
            desc: `Passed ${c.score}% of functional test cases`,
            date: new Date(c.date),
            icon: Code,
            color: 'text-purple-400'
          });
        });

        resumeHistory.slice(0, 1).forEach(r => {
          activities.push({
            title: 'Uploaded Resume for AI Check',
            desc: `Calculated Resume Rating: ${r.score}/100`,
            date: new Date(r.analyzedAt),
            icon: FileText,
            color: 'text-cyan-400'
          });
        });

        // Add interview activity from localStorage
        try {
          const reviewedHr = JSON.parse(localStorage.getItem('interview_hr_reviewed') || '[]');
          const exploredTopics = JSON.parse(localStorage.getItem('interview_topics_explored') || '[]');
          if (Array.isArray(reviewedHr) && reviewedHr.length > 0) {
            activities.push({
              title: `Reviewed ${reviewedHr.length} HR Question${reviewedHr.length > 1 ? 's' : ''}`,
              desc: 'Practiced behavioral interview responses',
              date: new Date(localStorage.getItem('interview_last_activity') || Date.now()),
              icon: MessageSquare,
              color: 'text-pink-400'
            });
          }
          if (Array.isArray(exploredTopics) && exploredTopics.length > 0) {
            activities.push({
              title: `Explored ${exploredTopics.length} Technical Topic${exploredTopics.length > 1 ? 's' : ''}`,
              desc: 'Studied core CS interview concepts',
              date: new Date(localStorage.getItem('interview_last_activity') || Date.now()),
              icon: MessageSquare,
              color: 'text-pink-400'
            });
          }
        } catch (e) {
          // Ignore localStorage errors
        }

        activities.sort((a, b) => b.date - a.date);
        setRecentActivities(activities.slice(0, 4));

      } catch (err) {
        console.error('Error fetching dashboard statistics:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [apiUrl]);

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex">
      <Sidebar />
      
      <div className="flex-1 pl-64 pt-16">
        <Navbar title="Student Dashboard" />
        
        <main className="p-8 space-y-8 max-w-7xl mx-auto">
          {/* Welcome banner */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-[#070A13] border border-white/5 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>
            
            <div className="text-left">
              <h2 className="text-2xl font-bold text-white tracking-tight">Welcome back, {user?.name?.split(' ')[0]}! 👋</h2>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">
                Track your placement readiness across aptitude, coding, resume, and interviews — all in one place.
              </p>
              {user?.academicDetails?.course && (
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <span className="text-[10px] font-bold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-2.5 py-1 rounded-lg uppercase">
                    {user.academicDetails.course}{user.academicDetails.branch ? ` — ${user.academicDetails.branch}` : ''}
                  </span>
                  {user.collegeName && (
                    <span className="text-[10px] font-bold bg-slate-800/60 text-slate-400 border border-white/5 px-2.5 py-1 rounded-lg">
                      {user.collegeName}
                    </span>
                  )}
                </div>
              )}
            </div>
            
            {/* Circular Readiness Gauge */}
            <div className="flex items-center gap-4 bg-slate-950/40 border border-white/5 p-4 rounded-2xl shrink-0">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg className="absolute w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-slate-800"
                    strokeWidth="3"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-indigo-500 transition-all duration-1000 ease-out"
                    strokeWidth="3"
                    strokeDasharray={`${displayStats.readinessScore}, 100`}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <span className="text-sm font-bold text-white">{displayStats.readinessScore}%</span>
              </div>
              <div className="text-left">
                <h4 className="text-xs font-semibold text-slate-200">Readiness Score</h4>
                <p className="text-[10px] text-slate-400 mt-0.5">Overall Job Suitability</p>
              </div>
            </div>
          </div>

          {/* Analytics grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {/* Profile Completion Card */}
            <Link
              to="/profile"
              className="glass-card glass-card-hover p-5 rounded-2xl text-left relative overflow-hidden flex flex-col justify-between min-h-[140px] transition-all hover:border-violet-500/20"
            >
              <div className="flex justify-between items-start">
                <div className="bg-violet-500/10 border border-violet-500/20 p-2.5 rounded-xl text-violet-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-500 hover:text-violet-400 transition-colors" />
              </div>
              <div className="mt-3">
                <p className="text-xs font-bold text-white mb-1">Profile</p>
                <div className="w-full bg-slate-900 rounded-full h-1.5 mb-1.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${
                      profileCompletion >= 80 ? 'bg-emerald-500' : profileCompletion >= 50 ? 'bg-yellow-500' : 'bg-violet-500'
                    }`}
                    style={{ width: `${profileCompletion}%` }}
                  />
                </div>
                <p className={`text-lg font-bold ${
                  profileCompletion >= 80 ? 'text-emerald-400' : profileCompletion >= 50 ? 'text-yellow-400' : 'text-violet-400'
                }`}>{profileCompletion}%</p>
                <p className="text-[10px] text-slate-400">Complete</p>
              </div>
            </Link>

            {/* Placement Prep Card */}
            <Link
              to="/placement"
              className="glass-card glass-card-hover p-5 rounded-2xl text-left relative overflow-hidden flex flex-col justify-between min-h-[140px] transition-all hover:border-amber-500/20"
            >
              <div className="flex justify-between items-start">
                <div className="bg-amber-500/10 border border-amber-500/20 p-2.5 rounded-xl text-amber-400">
                  <Target className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-500 hover:text-amber-400 transition-colors" />
              </div>
              <div className="mt-3">
                <p className="text-xs font-bold text-white mb-0.5">Placement Prep</p>
                <p className="text-2xl font-bold text-white">16 <span className="text-xs font-normal text-slate-400">courses</span></p>
                <p className="text-[10px] text-slate-400 mt-1">Course-wise roadmaps</p>
              </div>
            </Link>

            {/* Aptitude stats */}
            <Link
              to="/aptitude"
              className="glass-card glass-card-hover p-5 rounded-2xl text-left relative overflow-hidden flex flex-col justify-between min-h-[140px] transition-all hover:border-indigo-500/20"
            >
              <div className="flex justify-between items-start">
                <div className="bg-indigo-500/10 border border-indigo-500/20 p-2.5 rounded-xl text-indigo-400">
                  <BookOpen className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-500 hover:text-indigo-400 transition-colors" />
              </div>
              <div className="mt-3">
                <p className="text-xs font-bold text-white mb-0.5">Aptitude</p>
                <p className="text-2xl font-bold text-white">{displayStats.aptitudeCount} <span className="text-xs font-normal text-slate-400">tests</span></p>
                <p className="text-[10px] text-slate-400 mt-1">Avg: {displayStats.avgAptitude}%</p>
              </div>
            </Link>

            {/* Coding stats */}
            <Link
              to="/coding"
              className="glass-card glass-card-hover p-5 rounded-2xl text-left relative overflow-hidden flex flex-col justify-between min-h-[140px] transition-all hover:border-purple-500/20"
            >
              <div className="flex justify-between items-start">
                <div className="bg-purple-500/10 border border-purple-500/20 p-2.5 rounded-xl text-purple-400">
                  <Code className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-500 hover:text-purple-400 transition-colors" />
              </div>
              <div className="mt-3">
                <p className="text-xs font-bold text-white mb-0.5">Coding</p>
                <p className="text-2xl font-bold text-white">{displayStats.codingCount} <span className="text-xs font-normal text-slate-400">solved</span></p>
                <p className="text-[10px] text-slate-400 mt-1">Avg: {displayStats.avgCoding}%</p>
              </div>
            </Link>

            {/* Resume rating */}
            <Link
              to="/resume"
              className="glass-card glass-card-hover p-5 rounded-2xl text-left relative overflow-hidden flex flex-col justify-between min-h-[140px] transition-all hover:border-cyan-500/20"
            >
              <div className="flex justify-between items-start">
                <div className="bg-cyan-500/10 border border-cyan-500/20 p-2.5 rounded-xl text-cyan-400">
                  <FileText className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-500 hover:text-cyan-400 transition-colors" />
              </div>
              <div className="mt-3">
                <p className="text-xs font-bold text-white mb-0.5">Resume</p>
                <p className="text-2xl font-bold text-white">
                  {displayStats.latestResumeScore > 0 ? `${displayStats.latestResumeScore}` : '—'} <span className="text-xs font-normal text-slate-400">/100</span>
                </p>
                <p className="text-[10px] text-slate-400 mt-1">
                  {stats.latestResumeScore > 0 ? 'AI analysis done' : 'Not analyzed yet'}
                </p>
              </div>
            </Link>

            {/* Quick action card - Refine Resume */}
            <Link 
              to="/resume"
              className="glass-card glass-card-hover p-5 rounded-2xl text-left relative overflow-hidden flex flex-col justify-between min-h-[140px] border-indigo-500/15"
            >
              <div className="flex justify-between items-start">
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded-xl text-emerald-400">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-slate-500 group-hover:text-indigo-400 transition-colors" />
              </div>
              <div className="mt-3">
                <p className="text-xs font-bold text-white">Refine Resume</p>
                <p className="text-[10px] text-slate-400 mt-1">AI feedback to boost your score</p>
              </div>
            </Link>

            {/* Interview Prep stats */}
            <Link
              to="/interview"
              className="glass-card glass-card-hover p-5 rounded-2xl text-left relative overflow-hidden flex flex-col justify-between min-h-[140px] transition-all hover:border-pink-500/20"
            >
              <div className="flex justify-between items-start">
                <div className="bg-pink-500/10 border border-pink-500/20 p-2.5 rounded-xl text-pink-400">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-500 hover:text-pink-400 transition-colors" />
              </div>
              <div className="mt-3">
                <p className="text-xs font-bold text-white mb-0.5">Interview</p>
                <p className="text-2xl font-bold text-white">
                  {stats.interviewReviewed + stats.interviewTopics > 0
                    ? `${stats.interviewReviewed + stats.interviewTopics}`
                    : '0'} <span className="text-xs font-normal text-slate-400">items</span>
                </p>
                <p className="text-[10px] text-slate-400 mt-1">
                  {stats.interviewReviewed > 0 || stats.interviewTopics > 0
                    ? `${stats.interviewReviewed} HR · ${stats.interviewTopics} topics`
                    : 'Start preparing'}
                </p>
              </div>
            </Link>
          </div>

          {/* Graph & Activity Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Performance chart */}
            <div className="glass-card p-6 rounded-3xl lg:col-span-2 text-left space-y-6">
              <h3 className="text-sm font-bold text-slate-200 tracking-tight flex items-center gap-2">
                <Clock className="h-4.5 w-4.5 text-indigo-400" />
                Preparation Performance Analytics
              </h3>
              
              <div className="h-[260px] w-full">
                {scoreHistory.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={scoreHistory} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                      <defs>
                        <linearGradient id="scoreColor" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6366F1" stopOpacity={0.25}/>
                          <stop offset="95%" stopColor="#6366F1" stopOpacity={0.0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.03)" />
                      <XAxis dataKey="date" stroke="#64748B" fontSize={10} tickLine={false} />
                      <YAxis domain={[0, 100]} stroke="#64748B" fontSize={10} tickLine={false} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#0F172A', 
                          borderColor: 'rgba(255,255,255,0.08)',
                          borderRadius: '12px',
                          color: '#F8FAFC',
                          fontSize: '11px'
                        }} 
                      />
                      <Area type="monotone" dataKey="score" stroke="#6366F1" strokeWidth={2} fillOpacity={1} fill="url(#scoreColor)" name="Score" />
                    </AreaChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-500 text-xs">
                    <TrendingUp className="h-8 w-8 text-slate-600 mb-2" />
                    Take a test or practice coding to see score history.
                  </div>
                )}
              </div>
            </div>

            {/* Recent activity list */}
            <div className="glass-card p-6 rounded-3xl text-left space-y-6 flex flex-col">
              <h3 className="text-sm font-bold text-slate-200 tracking-tight flex items-center gap-2">
                <Award className="h-4.5 w-4.5 text-indigo-400" />
                Recent Prep Timeline
              </h3>

              <div className="flex-1 space-y-5 overflow-y-auto">
                {recentActivities.length > 0 ? (
                  recentActivities.map((act, idx) => {
                    const ActIcon = act.icon;
                    return (
                      <div key={idx} className="flex gap-3">
                        <div className={`mt-0.5 shrink-0 bg-slate-900 border border-white/5 p-2 rounded-lg ${act.color}`}>
                          <ActIcon className="h-4 w-4" />
                        </div>
                        <div className="text-left flex-1 min-w-0">
                          <p className="text-xs font-semibold text-slate-200 truncate">{act.title}</p>
                          <p className="text-[10px] text-slate-400 mt-0.5 truncate">{act.desc}</p>
                          <p className="text-[9px] text-slate-500 mt-1 font-semibold uppercase">
                            {new Date(act.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-slate-500 text-xs pt-12">
                    No recent activity found.
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
