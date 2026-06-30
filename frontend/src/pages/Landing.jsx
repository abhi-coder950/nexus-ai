import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  ArrowRight,
  BookOpen,
  Code,
  FileText,
  MessageSquare,
  TrendingUp,
  ShieldCheck,
  Target,
  Zap,
  BarChart3,
  Clock,
  CheckCircle2,
  Brain,
  Users,
  Award,
  Briefcase,
  Star,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex flex-col overflow-hidden">

      {/* ============================================ */}
      {/* NAVBAR                                       */}
      {/* ============================================ */}
      <nav className="w-full py-5 px-8 max-w-7xl mx-auto flex items-center justify-between border-b border-white/5 relative z-10">
        <div className="flex items-center gap-3">
          <GraduationCap className="h-8 w-8 text-indigo-500" />
          <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300">
            PrepNex
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <a href="#features" className="text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors">
            How It Works
          </a>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors">
            Login
          </Link>
          <Link to="/register" className="btn-gradient px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 group">
            Get Started Free
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </nav>

      {/* ============================================ */}
      {/* HERO SECTION                                 */}
      {/* ============================================ */}
      <section className="relative max-w-7xl mx-auto px-8 pt-16 pb-24 flex flex-col lg:flex-row items-center justify-between gap-16 flex-1">

        {/* Background glow blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] bg-indigo-500/8 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-[25rem] h-[25rem] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        {/* Grid texture overlay */}
        <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40 -z-10" />

        {/* Floating particles (CSS-only decorative dots) */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[15%] left-[10%] w-1.5 h-1.5 bg-indigo-400/30 rounded-full animate-pulse-glow" />
          <div className="absolute top-[25%] right-[15%] w-1 h-1 bg-cyan-400/25 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
          <div className="absolute top-[60%] left-[20%] w-1 h-1 bg-violet-400/20 rounded-full animate-pulse-glow" style={{ animationDelay: '2s' }} />
          <div className="absolute top-[70%] right-[25%] w-1.5 h-1.5 bg-pink-400/20 rounded-full animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
          <div className="absolute top-[40%] left-[60%] w-1 h-1 bg-emerald-400/20 rounded-full animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        </div>

        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-indigo-400" />
            <span className="text-indigo-300 text-xs font-semibold">PrepNex — Practice. Prepare. Perform.</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Crack Your Campus{' '}
            <br className="hidden sm:block" />
            Placement with{' '}
            <span className="text-gradient">Smart Prep.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-slate-400 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            One platform to master aptitude, ace coding challenges, refine your resume with AI, and walk into interviews confident. Built for BCA, B.Tech & MCA students.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
            <Link
              to="/register"
              className="btn-gradient px-7 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              Start Preparing Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/login"
              className="bg-slate-900/60 hover:bg-slate-800/60 border border-white/10 px-7 py-3.5 rounded-xl text-sm font-semibold transition-colors w-full sm:w-auto text-center flex items-center justify-center gap-2"
            >
              Login to Dashboard
            </Link>
          </div>

          {/* Trust chips */}
          <div className="flex flex-wrap items-center gap-3 justify-center lg:justify-start">
            {[
              { icon: BookOpen, text: '30+ Aptitude Qs' },
              { icon: Code, text: 'Coding Sandbox' },
              { icon: FileText, text: 'AI Resume Review' },
              { icon: MessageSquare, text: 'Interview Prep' }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5 bg-slate-900/50 border border-white/5 px-3 py-1.5 rounded-lg text-[11px] text-slate-400 font-medium">
                <item.icon className="h-3.5 w-3.5 text-indigo-400" />
                {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Mock Platform Dashboard Card */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none animate-float relative z-10">
          <div className="glass-card p-6 rounded-3xl relative overflow-hidden shadow-2xl shadow-indigo-500/5">
            {/* Window chrome */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500/80 rounded-full" />
                <span className="w-3 h-3 bg-yellow-500/80 rounded-full" />
                <span className="w-3 h-3 bg-green-500/80 rounded-full" />
              </div>
              <span className="text-[10px] text-slate-500 tracking-wider font-bold uppercase">PrepNex Dashboard</span>
            </div>

            {/* Mock dashboard items */}
            <div className="space-y-3">
              {/* Row 1: Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-slate-950/40 p-3 rounded-xl border border-white/5 text-center">
                  <p className="text-lg font-bold text-indigo-400">85%</p>
                  <p className="text-[9px] text-slate-500 uppercase font-bold">Aptitude Score</p>
                </div>
                <div className="bg-slate-950/40 p-3 rounded-xl border border-white/5 text-center">
                  <p className="text-lg font-bold text-emerald-400">12/15</p>
                  <p className="text-[9px] text-slate-500 uppercase font-bold">Problems Solved</p>
                </div>
                <div className="bg-slate-950/40 p-3 rounded-xl border border-white/5 text-center">
                  <p className="text-lg font-bold text-cyan-400">92</p>
                  <p className="text-[9px] text-slate-500 uppercase font-bold">Resume Score</p>
                </div>
              </div>

              {/* Row 2: Module Cards */}
              <div className="bg-slate-950/40 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-indigo-400" />
                  <div className="text-left">
                    <p className="text-xs font-semibold">Quantitative Assessment</p>
                    <p className="text-[10px] text-slate-500">10 Questions &bull; 10 Minutes</p>
                  </div>
                </div>
                <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded">Ready</span>
              </div>

              <div className="bg-slate-950/40 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Code className="h-5 w-5 text-purple-400" />
                  <div className="text-left">
                    <p className="text-xs font-semibold">Interactive Coding Sandbox</p>
                    <p className="text-[10px] text-slate-500">C++, Java, Python, JavaScript</p>
                  </div>
                </div>
                <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold px-2 py-0.5 rounded">Active</span>
              </div>

              <div className="bg-slate-950/40 p-4 rounded-xl border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-cyan-400" />
                  <div className="text-left">
                    <p className="text-xs font-semibold">AI Resume Analyzer</p>
                    <p className="text-[10px] text-slate-500">Scores, suggestions &amp; missing skills</p>
                  </div>
                </div>
                <span className="bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold px-2 py-0.5 rounded">AI Powered</span>
              </div>

              {/* Row 3: Progress bar */}
              <div className="bg-slate-950/40 p-4 rounded-xl border border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-xs font-semibold">Placement Readiness</p>
                  <p className="text-xs font-bold text-indigo-400">72%</p>
                </div>
                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full rounded-full" style={{ width: '72%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* COMPLETE PREPARATION SUITE / FEATURES        */}
      {/* ============================================ */}
      <section id="features" className="bg-slate-950/40 border-y border-white/5 py-24 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-wider uppercase text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1.5 rounded-full">
              Complete Preparation Suite
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
              Everything You Need to{' '}
              <span className="text-gradient">Crack Placements</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
              From aptitude assessments to AI-powered resume review — one platform covers every stage of your campus placement journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Card 1: Aptitude */}
            <Link to="/aptitude" className="glass-card glass-card-hover p-6 rounded-2xl text-left block group">
              <div className="bg-indigo-500/10 border border-indigo-500/20 w-12 h-12 rounded-xl flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 transition-transform">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-white">Aptitude Practice</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Quantitative, logical reasoning, and verbal tests with timer controls, instant scoring, and detailed explanations.
              </p>
              <span className="text-indigo-400 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Start Practice <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>

            {/* Card 2: Coding */}
            <Link to="/coding" className="glass-card glass-card-hover p-6 rounded-2xl text-left block group">
              <div className="bg-purple-500/10 border border-purple-500/20 w-12 h-12 rounded-xl flex items-center justify-center text-purple-400 mb-5 group-hover:scale-110 transition-transform">
                <Code className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-white">Coding Practice</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Curated coding challenges by difficulty. Test your code against input cases using a built-in sandbox editor.
              </p>
              <span className="text-purple-400 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Solve Challenges <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>

            {/* Card 3: Resume */}
            <Link to="/resume" className="glass-card glass-card-hover p-6 rounded-2xl text-left block group">
              <div className="bg-cyan-500/10 border border-cyan-500/20 w-12 h-12 rounded-xl flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-white">AI Resume Review</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Upload your resume for real-time AI scoring. Get suggestions, identify missing skills, and read detailed feedback.
              </p>
              <span className="text-cyan-400 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Upload Resume <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>

            {/* Card 4: Interview */}
            <Link to="/interview" className="glass-card glass-card-hover p-6 rounded-2xl text-left block group">
              <div className="bg-pink-500/10 border border-pink-500/20 w-12 h-12 rounded-xl flex items-center justify-center text-pink-400 mb-5 group-hover:scale-110 transition-transform">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-white">Interview Prep</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Access curated HR behavioral cards and core technical questions covering OOPs, DBMS, and Operating Systems.
              </p>
              <span className="text-pink-400 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Prepare Now <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>

            {/* Card 5: Progress Tracking */}
            <Link to="/dashboard" className="glass-card glass-card-hover p-6 rounded-2xl text-left block group">
              <div className="bg-emerald-500/10 border border-emerald-500/20 w-12 h-12 rounded-xl flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-white">Progress Tracking</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Visualize your performance across all modules with analytics, score history, and a placement readiness gauge.
              </p>
              <span className="text-emerald-400 text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                View Dashboard <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>

          {/* Secondary feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="glass-card p-5 rounded-2xl flex items-center gap-4 border border-white/5">
              <div className="bg-emerald-500/10 w-10 h-10 rounded-xl flex items-center justify-center text-emerald-400 shrink-0">
                <Target className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Mock Tests</h4>
                <p className="text-[11px] text-slate-400">Timed assessments with auto-grading</p>
              </div>
            </div>
            <div className="glass-card p-5 rounded-2xl flex items-center gap-4 border border-white/5">
              <div className="bg-yellow-500/10 w-10 h-10 rounded-xl flex items-center justify-center text-yellow-400 shrink-0">
                <BarChart3 className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Progress Tracking</h4>
                <p className="text-[11px] text-slate-400">Visualize your performance over time</p>
              </div>
            </div>
            <div className="glass-card p-5 rounded-2xl flex items-center gap-4 border border-white/5">
              <div className="bg-orange-500/10 w-10 h-10 rounded-xl flex items-center justify-center text-orange-400 shrink-0">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">Company-wise Prep</h4>
                <p className="text-[11px] text-slate-400">Practice for specific companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* STATS / TRUST SECTION                        */}
      {/* ============================================ */}
      <section className="py-20 px-8 relative">
        <div className="absolute inset-0 grid-pattern pointer-events-none opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Built for <span className="text-gradient">Campus Placements</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-md mx-auto">
              Every feature is designed to help you prepare smarter and land your dream offer.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { value: '30+', label: 'Aptitude Questions', color: 'text-indigo-400' },
              { value: '3', label: 'Aptitude Categories', color: 'text-purple-400' },
              { value: '10', label: 'Min Per Test', color: 'text-cyan-400' },
              { value: 'AI', label: 'Resume Analysis', color: 'text-emerald-400' },
              { value: '15+', label: 'Interview Questions', color: 'text-pink-400' },
              { value: '24/7', label: 'Access Anytime', color: 'text-yellow-400' }
            ].map((stat, i) => (
              <div key={i} className="glass-card p-5 rounded-2xl text-center border border-white/5">
                <p className={`text-2xl font-extrabold ${stat.color}`}>{stat.value}</p>
                <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* HOW IT WORKS SECTION                         */}
      {/* ============================================ */}
      <section id="how-it-works" className="bg-slate-950/40 border-y border-white/5 py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-wider uppercase text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-full">
              Simple Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
              How <span className="text-gradient">PrepNex</span> Works
            </h2>
            <p className="text-slate-400 text-sm max-w-md mx-auto">
              Get started in minutes. Follow a structured path from preparation to placement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-cyan-500/30" />

            {[
              { step: '01', icon: Users, title: 'Create Account', desc: 'Sign up in seconds. Set up your profile with academic details and skills.', color: 'indigo' },
              { step: '02', icon: Target, title: 'Choose Module', desc: 'Pick from aptitude tests, coding challenges, resume review, or interview prep.', color: 'purple' },
              { step: '03', icon: Zap, title: 'Practice & Improve', desc: 'Take timed tests, solve coding problems, and learn from detailed explanations.', color: 'cyan' },
              { step: '04', icon: Award, title: 'Track & Get Hired', desc: 'Monitor your progress with visual dashboards and walk into placements confident.', color: 'emerald' }
            ].map((item, i) => (
              <div key={i} className="relative text-center group">
                {/* Step number bubble */}
                <div className={`w-24 h-24 mx-auto rounded-2xl bg-${item.color}-500/10 border border-${item.color}-500/20 flex items-center justify-center mb-5 relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`h-8 w-8 text-${item.color}-400`} />
                </div>
                <span className={`text-[10px] font-bold text-${item.color}-400 bg-${item.color}-500/10 border border-${item.color}-500/20 px-2.5 py-0.5 rounded-full`}>
                  Step {item.step}
                </span>
                <h3 className="font-semibold text-white mt-3 mb-2">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed max-w-[220px] mx-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHY CHOOSE SECTION                           */}
      {/* ============================================ */}
      <section className="py-24 px-8 relative">
        <div className="absolute inset-0 grid-pattern pointer-events-none opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
              Why PrepNex
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-4 mb-4">
              Why Students <span className="text-gradient">Choose PrepNex</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: 'One Platform for Everything',
                desc: 'Aptitude, coding, resume, and interview prep — all in a single unified workspace.',
                color: 'indigo'
              },
              {
                icon: Briefcase,
                title: 'Built for Campus Placements',
                desc: 'Designed specifically for BCA/B.Tech students preparing for campus recruitment drives.',
                color: 'purple'
              },
              {
                icon: BarChart3,
                title: 'Clean Student Dashboard',
                desc: 'Track scores, progress, and readiness with a visual, distraction-free dashboard.',
                color: 'cyan'
              },
              {
                icon: Brain,
                title: 'AI-Powered Resume Review',
                desc: 'Get instant AI analysis of your resume with strengths, improvements, and missing skills.',
                color: 'emerald'
              },
              {
                icon: Clock,
                title: 'Timed Practice Tests',
                desc: 'Simulate real placement test conditions with timed assessments and auto-grading.',
                color: 'yellow'
              },
              {
                icon: Star,
                title: 'Distraction-Free Preparation',
                desc: 'Clean, focused interface designed for serious preparation — no noise, just results.',
                color: 'pink'
              }
            ].map((item, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl border border-white/5 glass-card-hover">
                <div className={`bg-${item.color}-500/10 border border-${item.color}-500/20 w-11 h-11 rounded-xl flex items-center justify-center text-${item.color}-400 mb-4`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FINAL CTA SECTION                           */}
      {/* ============================================ */}
      <section className="py-20 px-8 bg-slate-950/40 border-y border-white/5 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to <span className="text-gradient">Crack Your Placement?</span>
          </h2>
          <p className="text-slate-400 text-sm mb-8 max-w-md mx-auto">
            Join PrepNex and start your campus placement preparation today. Practice. Prepare. Perform.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/register"
              className="btn-gradient px-8 py-3.5 rounded-xl text-sm font-semibold flex items-center gap-2 group"
            >
              Create Free Account
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/login"
              className="bg-slate-900/60 hover:bg-slate-800/60 border border-white/10 px-8 py-3.5 rounded-xl text-sm font-semibold transition-colors"
            >
              Login to Dashboard
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FOOTER                                       */}
      {/* ============================================ */}
      <footer className="w-full py-10 px-8 border-t border-white/5 bg-[#05070D]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand column */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap className="h-6 w-6 text-indigo-500" />
                <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-300">
                  PrepNex
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Your all-in-one campus placement preparation platform. Prepare smarter, perform better.
              </p>
            </div>

            {/* Platform links */}
            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">Platform</h4>
              <ul className="space-y-2">
                <li><Link to="/aptitude" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Aptitude Tests</Link></li>
                <li><Link to="/coding" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Coding Practice</Link></li>
                <li><Link to="/resume" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Resume Analyzer</Link></li>
                <li><Link to="/interview" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Interview Prep</Link></li>
              </ul>
            </div>

            {/* Account links */}
            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">Account</h4>
              <ul className="space-y-2">
                <li><Link to="/login" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Login</Link></li>
                <li><Link to="/register" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Register</Link></li>
                <li><Link to="/dashboard" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Dashboard</Link></li>
                <li><Link to="/profile" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Profile</Link></li>
              </ul>
            </div>

            {/* Info links */}
            <div>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">Info</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">How It Works</a></li>
                <li><a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms of Use</a></li>
                <li><a href="#" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>&copy; 2026 PrepNex. Built for Major BCA Capstone Project.</p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
