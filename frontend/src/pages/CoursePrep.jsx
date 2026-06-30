import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import courseRoadmaps from '../data/courseRoadmaps';
import {
  ArrowLeft,
  BookOpen,
  Clock,
  ChevronRight,
  CheckCircle2,
  Circle,
  Code,
  Target,
  Brain,
  MessageSquare,
  BarChart3
} from 'lucide-react';

const categoryColors = {
  Engineering: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  Computer: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  Commerce: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  Management: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  Science: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  Arts: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  ITI: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  Other: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
};

const difficultyColors = {
  easy: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  'easy-medium': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  medium: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  'medium-hard': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  hard: 'bg-red-500/20 text-red-300 border-red-500/30',
};

const courseQuickActions = {
  btech: [
    { label: 'Coding Practice', path: '/coding', icon: Code, color: 'from-indigo-500 to-indigo-700' },
    { label: 'Aptitude Arena', path: '/aptitude', icon: Brain, color: 'from-purple-500 to-purple-700' },
    { label: 'Interview Prep', path: '/interview', icon: MessageSquare, color: 'from-pink-500 to-pink-700' },
    { label: 'Resume Analyzer', path: '/resume', icon: BarChart3, color: 'from-emerald-500 to-emerald-700' },
  ],
  be: [
    { label: 'Coding Practice', path: '/coding', icon: Code, color: 'from-indigo-500 to-indigo-700' },
    { label: 'Aptitude Arena', path: '/aptitude', icon: Brain, color: 'from-purple-500 to-purple-700' },
    { label: 'Interview Prep', path: '/interview', icon: MessageSquare, color: 'from-pink-500 to-pink-700' },
    { label: 'Resume Analyzer', path: '/resume', icon: BarChart3, color: 'from-emerald-500 to-emerald-700' },
  ],
  bca: [
    { label: 'Coding Practice', path: '/coding', icon: Code, color: 'from-indigo-500 to-indigo-700' },
    { label: 'Aptitude Arena', path: '/aptitude', icon: Brain, color: 'from-purple-500 to-purple-700' },
    { label: 'Interview Prep', path: '/interview', icon: MessageSquare, color: 'from-pink-500 to-pink-700' },
    { label: 'Resume Analyzer', path: '/resume', icon: BarChart3, color: 'from-emerald-500 to-emerald-700' },
  ],
  mca: [
    { label: 'Coding Practice', path: '/coding', icon: Code, color: 'from-indigo-500 to-indigo-700' },
    { label: 'Aptitude Arena', path: '/aptitude', icon: Brain, color: 'from-purple-500 to-purple-700' },
    { label: 'Interview Prep', path: '/interview', icon: MessageSquare, color: 'from-pink-500 to-pink-700' },
    { label: 'Resume Analyzer', path: '/resume', icon: BarChart3, color: 'from-emerald-500 to-emerald-700' },
  ],
  diploma_engineering: [
    { label: 'Aptitude Arena', path: '/aptitude', icon: Brain, color: 'from-purple-500 to-purple-700' },
    { label: 'Interview Prep', path: '/interview', icon: MessageSquare, color: 'from-pink-500 to-pink-700' },
    { label: 'Resume Analyzer', path: '/resume', icon: BarChart3, color: 'from-emerald-500 to-emerald-700' },
    { label: 'Trade Questions', path: '/aptitude/quiz/quantitative', icon: Target, color: 'from-amber-500 to-amber-700' },
  ],
  polytechnic: [
    { label: 'Aptitude Arena', path: '/aptitude', icon: Brain, color: 'from-purple-500 to-purple-700' },
    { label: 'Interview Prep', path: '/interview', icon: MessageSquare, color: 'from-pink-500 to-pink-700' },
    { label: 'Resume Analyzer', path: '/resume', icon: BarChart3, color: 'from-emerald-500 to-emerald-700' },
    { label: 'Trade Questions', path: '/aptitude/quiz/quantitative', icon: Target, color: 'from-amber-500 to-amber-700' },
  ],
  bcom: [
    { label: 'Aptitude Arena', path: '/aptitude', icon: Brain, color: 'from-purple-500 to-purple-700' },
    { label: 'Interview Prep', path: '/interview', icon: MessageSquare, color: 'from-pink-500 to-pink-700' },
    { label: 'Resume Analyzer', path: '/resume', icon: BarChart3, color: 'from-emerald-500 to-emerald-700' },
    { label: 'Reasoning Practice', path: '/aptitude/quiz/reasoning', icon: Target, color: 'from-amber-500 to-amber-700' },
  ],
  mcom: [
    { label: 'Aptitude Arena', path: '/aptitude', icon: Brain, color: 'from-purple-500 to-purple-700' },
    { label: 'Interview Prep', path: '/interview', icon: MessageSquare, color: 'from-pink-500 to-pink-700' },
    { label: 'Resume Analyzer', path: '/resume', icon: BarChart3, color: 'from-emerald-500 to-emerald-700' },
    { label: 'Reasoning Practice', path: '/aptitude/quiz/reasoning', icon: Target, color: 'from-amber-500 to-amber-700' },
  ],
  bba: [
    { label: 'Aptitude Arena', path: '/aptitude', icon: Brain, color: 'from-purple-500 to-purple-700' },
    { label: 'Interview Prep', path: '/interview', icon: MessageSquare, color: 'from-pink-500 to-pink-700' },
    { label: 'Resume Analyzer', path: '/resume', icon: BarChart3, color: 'from-emerald-500 to-emerald-700' },
    { label: 'Verbal Ability', path: '/aptitude/quiz/verbal', icon: Target, color: 'from-amber-500 to-amber-700' },
  ],
  mba: [
    { label: 'Aptitude Arena', path: '/aptitude', icon: Brain, color: 'from-purple-500 to-purple-700' },
    { label: 'Interview Prep', path: '/interview', icon: MessageSquare, color: 'from-pink-500 to-pink-700' },
    { label: 'Resume Analyzer', path: '/resume', icon: BarChart3, color: 'from-emerald-500 to-emerald-700' },
    { label: 'Verbal Ability', path: '/aptitude/quiz/verbal', icon: Target, color: 'from-amber-500 to-amber-700' },
  ],
  bsc: [
    { label: 'Aptitude Arena', path: '/aptitude', icon: Brain, color: 'from-purple-500 to-purple-700' },
    { label: 'Interview Prep', path: '/interview', icon: MessageSquare, color: 'from-pink-500 to-pink-700' },
    { label: 'Resume Analyzer', path: '/resume', icon: BarChart3, color: 'from-emerald-500 to-emerald-700' },
    { label: 'Subject MCQs', path: '/aptitude/quiz/quantitative', icon: Target, color: 'from-amber-500 to-amber-700' },
  ],
  msc: [
    { label: 'Aptitude Arena', path: '/aptitude', icon: Brain, color: 'from-purple-500 to-purple-700' },
    { label: 'Interview Prep', path: '/interview', icon: MessageSquare, color: 'from-pink-500 to-pink-700' },
    { label: 'Resume Analyzer', path: '/resume', icon: BarChart3, color: 'from-emerald-500 to-emerald-700' },
    { label: 'Subject MCQs', path: '/aptitude/quiz/quantitative', icon: Target, color: 'from-amber-500 to-amber-700' },
  ],
  ba: [
    { label: 'Aptitude Arena', path: '/aptitude', icon: Brain, color: 'from-purple-500 to-purple-700' },
    { label: 'Interview Prep', path: '/interview', icon: MessageSquare, color: 'from-pink-500 to-pink-700' },
    { label: 'Resume Analyzer', path: '/resume', icon: BarChart3, color: 'from-emerald-500 to-emerald-700' },
    { label: 'Verbal Ability', path: '/aptitude/quiz/verbal', icon: Target, color: 'from-amber-500 to-amber-700' },
  ],
  ma: [
    { label: 'Aptitude Arena', path: '/aptitude', icon: Brain, color: 'from-purple-500 to-purple-700' },
    { label: 'Interview Prep', path: '/interview', icon: MessageSquare, color: 'from-pink-500 to-pink-700' },
    { label: 'Resume Analyzer', path: '/resume', icon: BarChart3, color: 'from-emerald-500 to-emerald-700' },
    { label: 'Verbal Ability', path: '/aptitude/quiz/verbal', icon: Target, color: 'from-amber-500 to-amber-700' },
  ],
  iti: [
    { label: 'Aptitude Arena', path: '/aptitude', icon: Brain, color: 'from-purple-500 to-purple-700' },
    { label: 'Interview Prep', path: '/interview', icon: MessageSquare, color: 'from-pink-500 to-pink-700' },
    { label: 'Resume Analyzer', path: '/resume', icon: BarChart3, color: 'from-emerald-500 to-emerald-700' },
    { label: 'Trade Questions', path: '/aptitude/quiz/quantitative', icon: Target, color: 'from-amber-500 to-amber-700' },
  ],
  'other-professional': [
    { label: 'Aptitude Arena', path: '/aptitude', icon: Brain, color: 'from-purple-500 to-purple-700' },
    { label: 'Interview Prep', path: '/interview', icon: MessageSquare, color: 'from-pink-500 to-pink-700' },
    { label: 'Resume Analyzer', path: '/resume', icon: BarChart3, color: 'from-emerald-500 to-emerald-700' },
    { label: 'Reasoning Practice', path: '/aptitude/quiz/reasoning', icon: Target, color: 'from-amber-500 to-amber-700' },
  ],
};

export default function CoursePrep() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [completedTopics, setCompletedTopics] = useState([]);

  const course = useMemo(
    () => courseRoadmaps.find((c) => c.id === courseId),
    [courseId]
  );

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(`placement_progress_${courseId}`) || '[]');
      setCompletedTopics(Array.isArray(stored) ? stored : []);
    } catch {
      setCompletedTopics([]);
    }
  }, [courseId]);

  const toggleTopic = (topicId) => {
    setCompletedTopics((prev) => {
      const updated = prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId];
      localStorage.setItem(`placement_progress_${courseId}`, JSON.stringify(updated));
      localStorage.setItem('placement_last_activity', new Date().toISOString());
      return updated;
    });
  };

  const progress = useMemo(() => {
    if (!course?.topics?.length) return 0;
    return Math.round((completedTopics.length / course.topics.length) * 100);
  }, [completedTopics, course]);

  const totalHours = useMemo(() => {
    if (!course?.topics) return 0;
    return course.topics.reduce((sum, t) => sum + (t.estimatedHours || 0), 0);
  }, [course]);

  const quickActions = courseQuickActions[courseId] || courseQuickActions[course?.category] || courseQuickActions['other-professional'];

  if (!course) {
    return (
      <div className="min-h-screen bg-[#070A13] text-slate-100 flex">
        <Sidebar />
        <div className="flex-1 pl-64 pt-16">
          <Navbar title="Course Not Found" />
          <main className="p-8 max-w-5xl mx-auto text-center py-24">
            <div className="glass-card p-12 rounded-3xl border border-white/5 max-w-md mx-auto">
              <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-6">
                <BookOpen className="h-8 w-8 text-red-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">Course Not Found</h2>
              <p className="text-slate-400 text-sm mb-8">
                The course you're looking for doesn't exist or has been removed.
              </p>
              <button
                onClick={() => navigate('/placement')}
                className="px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-500 transition-all duration-300 inline-flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Placement
              </button>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex">
      <Sidebar />
      <div className="flex-1 pl-64 pt-16">
        <Navbar title={course.name || 'Course Prep'} />
        <main className="p-8 max-w-5xl mx-auto space-y-8">

          <Link
            to="/placement"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Placement
          </Link>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-950/30 via-slate-900/60 to-[#070A13] border border-white/5 p-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[course.category] || categoryColors.Other}`}>
                  {course.category}
                </span>
                <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                  <BookOpen className="w-4 h-4" />
                  <span>{course.topics?.length || 0} topics</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{totalHours} hrs</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold text-white mb-3">{course.name}</h1>
              <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">{course.description}</p>
            </div>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-white/5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Target className="h-4 w-4 text-indigo-400" />
                Course Progress
              </h3>
              <span className="text-sm font-semibold text-indigo-300">
                {completedTopics.length}/{course.topics?.length || 0} completed
              </span>
            </div>
            <div className="w-full h-3 bg-slate-800/60 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-xs text-slate-500 mt-2">{progress}% complete</p>
          </div>

          <section className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-indigo-400" />
              Course Topics
            </h3>

            <div className="space-y-3">
              {(course.topics || []).map((topic) => {
                const isCompleted = completedTopics.includes(topic.id);
                const topicHours = topic.estimatedHours || 0;

                return (
                  <div
                    key={topic.id}
                    className={`glass-card rounded-2xl border transition-all ${
                      isCompleted
                        ? 'border-emerald-500/20 ring-1 ring-emerald-500/10'
                        : 'border-white/5'
                    }`}
                  >
                    <div className="p-5">
                      <div className="flex items-start gap-4">
                        <button
                          onClick={() => toggleTopic(topic.id)}
                          className="mt-0.5 shrink-0"
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                          ) : (
                            <Circle className="h-5 w-5 text-slate-600 hover:text-indigo-400 transition-colors" />
                          )}
                        </button>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h4 className={`font-semibold text-sm ${isCompleted ? 'text-emerald-300 line-through opacity-80' : 'text-white'}`}>
                                {topic.name}
                              </h4>
                              <p className="text-xs text-slate-400 mt-1 line-clamp-2">{topic.description}</p>
                            </div>
                            <div className="flex items-center gap-2 ml-4">
                              <div className="flex items-center gap-2 flex-wrap">
                                {(topic.difficulty || '').split('-').map((d) => (
                                  <span
                                    key={d}
                                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider border ${
                                      difficultyColors[d] || difficultyColors.medium
                                    }`}
                                  >
                                    {d}
                                  </span>
                                ))}
                                <span className="flex items-center gap-1 text-xs text-slate-500">
                                  <Clock className="h-3 w-3" />
                                  {topicHours}h
                                </span>
                              </div>
                              <button
                                onClick={() => navigate(`/placement/course/${courseId}/topic/${topic.id}`)}
                                className="shrink-0 px-4 py-2 rounded-xl bg-indigo-600/20 text-indigo-300 font-medium text-xs hover:bg-indigo-600 hover:text-white transition-all duration-300 flex items-center gap-1.5 border border-indigo-500/20 hover:border-indigo-500/50"
                              >
                                Practice
                                <ChevronRight className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-indigo-400" />
              Quick Actions
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action) => {
                const ActionIcon = action.icon;
                return (
                  <Link
                    key={action.path}
                    to={action.path}
                    className="glass-card p-5 rounded-2xl border border-white/5 hover:border-indigo-500/30 hover:scale-[1.02] transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center shadow-lg mb-3`}>
                      <ActionIcon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      {action.label}
                    </h4>
                    <div className="flex items-center gap-1 text-xs text-slate-500 mt-1 group-hover:text-indigo-400 transition-colors">
                      Go to section
                      <ChevronRight className="h-3 w-3" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}
