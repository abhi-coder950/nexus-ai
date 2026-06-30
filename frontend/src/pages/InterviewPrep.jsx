import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useAuth } from '../context/AuthContext';
import {
  MessageSquare,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Code,
  Database,
  Monitor,
  CheckCircle
} from 'lucide-react';

const hrQuestions = [
  {
    question: "Tell me about yourself.",
    suggestion: "Keep it under 2 minutes. Structure: current role → relevant experience → skills → why this role. Focus on achievements, not a life story."
  },
  {
    question: "Why do you want to work here?",
    suggestion: "Research the company's products, mission, and recent news. Connect your skills to their needs. Mention specific projects or values that resonate with you."
  },
  {
    question: "Where do you see yourself in 5 years?",
    suggestion: "Show ambition aligned with the company's growth path. Mention wanting to take on leadership or specialist roles within their tech stack."
  },
  {
    question: "What is your greatest strength?",
    suggestion: "Pick a strength relevant to the role (e.g., problem-solving, adaptability). Back it with a concrete example from a project or internship."
  },
  {
    question: "Tell me about a time you failed.",
    suggestion: "Choose a real failure. Explain what went wrong, what you learned, and how you improved. Show self-awareness and growth mindset."
  }
];

const technicalTopics = [
  {
    title: "Object-Oriented Programming (OOPs)",
    icon: Code,
    color: "text-indigo-400",
    bgColor: "bg-indigo-500/10",
    borderColor: "border-indigo-500/20",
    concepts: [
      { name: "Encapsulation", detail: "Bundling data and methods within a class, restricting direct access to internals." },
      { name: "Inheritance", detail: "Creating new classes from existing ones to promote code reuse (IS-A relationship)." },
      { name: "Polymorphism", detail: "Same interface, different implementations — method overloading and overriding." },
      { name: "Abstraction", detail: "Hiding complexity via abstract classes and interfaces, exposing only essential features." }
    ]
  },
  {
    title: "Database Management (DBMS)",
    icon: Database,
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
    concepts: [
      { name: "Normalization", detail: "Organizing tables to reduce redundancy (1NF, 2NF, 3NF, BCNF)." },
      { name: "ACID Properties", detail: "Atomicity, Consistency, Isolation, Durability — guarantees for reliable transactions." },
      { name: "SQL Joins", detail: "INNER, LEFT, RIGHT, FULL OUTER — combining rows from two or more tables." },
      { name: "Indexing", detail: "Data structures (B-Tree, Hash) that speed up row lookups at the cost of write performance." }
    ]
  },
  {
    title: "Operating Systems",
    icon: Monitor,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    concepts: [
      { name: "Process vs Thread", detail: "Process: isolated memory space. Thread: lightweight unit within a process sharing memory." },
      { name: "Deadlock", detail: "Four conditions: Mutual exclusion, Hold & Wait, No preemption, Circular wait." },
      { name: "Scheduling Algorithms", detail: "FCFS, SJF, Round Robin, Priority — strategies for CPU time allocation." },
      { name: "Virtual Memory", detail: "Technique using disk as extension of RAM, enabling processes larger than physical memory." }
    ]
  },
  {
    title: "General HR & Behavioral",
    icon: Briefcase,
    color: "text-pink-400",
    bgColor: "bg-pink-500/10",
    borderColor: "border-pink-500/20",
    concepts: [
      { name: "STAR Method", detail: "Situation → Task → Action → Result: structured way to answer behavioral questions." },
      { name: "Conflict Resolution", detail: "Listen actively, stay calm, find common ground, propose solutions collaboratively." },
      { name: "Teamwork Story", detail: "Describe your role, how you collaborated, handled disagreements, and achieved the goal." },
      { name: "Leadership Example", detail: "Show initiative, delegation, accountability, and the positive outcome you drove." }
    ]
  }
];

const InterviewPrep = () => {
  const { user } = useAuth();
  const [expandedHr, setExpandedHr] = useState(null);
  const [expandedTopic, setExpandedTopic] = useState(null);
  const [expandedConcept, setExpandedConcept] = useState(null);
  const [reviewedHr, setReviewedHr] = useState([]);
  const [exploredTopics, setExploredTopics] = useState([]);

  // Load tracked progress from localStorage on mount
  useEffect(() => {
    try {
      const storedHr = JSON.parse(localStorage.getItem('interview_hr_reviewed') || '[]');
      const storedTopics = JSON.parse(localStorage.getItem('interview_topics_explored') || '[]');
      setReviewedHr(Array.isArray(storedHr) ? storedHr : []);
      setExploredTopics(Array.isArray(storedTopics) ? storedTopics : []);
    } catch (e) {
      setReviewedHr([]);
      setExploredTopics([]);
    }
  }, []);

  // Track HR question review
  const handleHrToggle = (idx) => {
    const isOpening = expandedHr !== idx;
    setExpandedHr(isOpening ? idx : null);

    if (isOpening && !reviewedHr.includes(idx)) {
      const updated = [...reviewedHr, idx];
      setReviewedHr(updated);
      localStorage.setItem('interview_hr_reviewed', JSON.stringify(updated));
      localStorage.setItem('interview_last_activity', new Date().toISOString());
    }
  };

  // Track technical topic exploration
  const handleTopicToggle = (tIdx) => {
    const isOpening = expandedTopic !== tIdx;
    setExpandedTopic(isOpening ? tIdx : null);
    setExpandedConcept(null);

    if (isOpening && !exploredTopics.includes(tIdx)) {
      const updated = [...exploredTopics, tIdx];
      setExploredTopics(updated);
      localStorage.setItem('interview_topics_explored', JSON.stringify(updated));
      localStorage.setItem('interview_last_activity', new Date().toISOString());
    }
  };

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex">
      <Sidebar />
      <div className="flex-1 pl-64 pt-16">
        <Navbar title="Interview Preparation" />

        <main className="p-8 max-w-5xl mx-auto text-left space-y-10">

          {/* Welcome Banner */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-950/30 via-slate-900/60 to-[#070A13] border border-white/5 p-8">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-[80px] pointer-events-none"></div>
            <h2 className="text-xl font-bold text-white tracking-tight">Interview Preparation Hub</h2>
            <p className="text-xs text-slate-400 mt-1.5 max-w-xl">
              Review behavioral HR questions and core technical subject topics commonly asked during campus placement interviews.
            </p>
          </div>

          {/* HR Behavioral Questions */}
          <section className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-pink-400" />
              HR Behavioral Questions
            </h3>

            <div className="space-y-3">
              {hrQuestions.map((item, idx) => (
                <div key={idx} className="glass-card p-5 rounded-2xl border border-white/5">
                  <button
                    onClick={() => handleHrToggle(idx)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold shrink-0 ${
                        reviewedHr.includes(idx)
                          ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400'
                          : 'bg-pink-500/10 border border-pink-500/20 text-pink-400'
                      }`}>
                        {reviewedHr.includes(idx) ? <CheckCircle className="h-3.5 w-3.5" /> : idx + 1}
                      </span>
                      <span className="text-sm font-medium text-slate-200">{item.question}</span>
                    </div>
                    {expandedHr === idx ? (
                      <ChevronUp className="h-4 w-4 text-slate-500 shrink-0" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-slate-500 shrink-0" />
                    )}
                  </button>

                  {expandedHr === idx && (
                    <div className="mt-4 pt-4 border-t border-white/5 text-xs text-slate-400 leading-relaxed bg-slate-950/20 p-3.5 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                        <span className="font-bold text-emerald-300 text-[10px] uppercase tracking-wider">Suggestion</span>
                      </div>
                      <p className="leading-relaxed">{item.suggestion}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Technical Topics */}
          <section className="space-y-4">
            <h3 className="text-sm font-bold text-white tracking-tight flex items-center gap-2">
              <Code className="h-4 w-4 text-indigo-400" />
              Core Technical Subjects
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalTopics.map((topic, tIdx) => {
                const TopicIcon = topic.icon;
                const isTopicOpen = expandedTopic === tIdx;

                return (
                  <div key={tIdx} className={`glass-card p-6 rounded-2xl border ${topic.borderColor} transition-all ${
                    exploredTopics.includes(tIdx) ? 'ring-1 ring-emerald-500/20' : ''
                  }`}>
                    <button
                      onClick={() => handleTopicToggle(tIdx)}
                      className="w-full flex items-center justify-between text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`${topic.bgColor} border ${topic.borderColor} w-10 h-10 rounded-xl flex items-center justify-center ${topic.color}`}>
                          <TopicIcon className="h-5 w-5" />
                        </div>
                        <h4 className="font-semibold text-sm text-white">{topic.title}</h4>
                      </div>
                      {isTopicOpen ? (
                        <ChevronUp className="h-4 w-4 text-slate-500" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-slate-500" />
                      )}
                    </button>

                    {isTopicOpen && (
                      <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                        {topic.concepts.map((concept, cIdx) => {
                          const isConceptOpen = expandedConcept === `${tIdx}-${cIdx}`;
                          return (
                            <div key={cIdx} className="bg-slate-950/30 border border-white/5 rounded-xl overflow-hidden">
                              <button
                                onClick={() => setExpandedConcept(isConceptOpen ? null : `${tIdx}-${cIdx}`)}
                                className="w-full px-4 py-3 flex items-center justify-between text-left"
                              >
                                <span className="text-xs font-semibold text-slate-300">{concept.name}</span>
                                {isConceptOpen ? (
                                  <ChevronUp className="h-3.5 w-3.5 text-slate-500" />
                                ) : (
                                  <ChevronDown className="h-3.5 w-3.5 text-slate-500" />
                                )}
                              </button>
                              {isConceptOpen && (
                                <div className="px-4 pb-3 text-xs text-slate-400 leading-relaxed border-t border-white/5 pt-2.5">
                                  {concept.detail}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default InterviewPrep;
