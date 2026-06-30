import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';
import EmptyState from '../components/EmptyState';
import { motion, AnimatePresence } from 'framer-motion';
import { budgetApi } from '../api/index';
import { Receipt, Plus, Save, Loader2, X, Pencil } from 'lucide-react';

const BUDGET_CATEGORIES = [
  { name: 'food', icon: '🍽️', color: '#F43F5E' },
  { name: 'transport', icon: '🚗', color: '#3B82F6' },
  { name: 'shopping', icon: '🛍️', color: '#8B5CF6' },
  { name: 'entertainment', icon: '🎬', color: '#F59E0B' },
  { name: 'health', icon: '💊', color: '#10B981' },
  { name: 'education', icon: '📚', color: '#6366F1' },
  { name: 'bills', icon: '📄', color: '#EC4899' },
  { name: 'housing', icon: '🏠', color: '#14B8A6' },
  { name: 'travel', icon: '✈️', color: '#0EA5E9' },
  { name: 'other', icon: '💡', color: '#94A3B8' },
];

const MONTHS_LABELS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const Budget = () => {
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth() + 1);
  const [year, setYear] = useState(now.getFullYear());
  const [budget, setBudget] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ income: '', savingsGoal: '', categories: BUDGET_CATEGORIES.map(c => ({ name: c.name, allocated: '', spent: 0 })) });

  const fetchBudget = async () => {
    setLoading(true);
    try {
      const data = await budgetApi.get({ month, year });
      if (data.budget) {
        setBudget(data.budget);
        setForm({ income: data.budget.income, savingsGoal: data.budget.savingsGoal, categories: BUDGET_CATEGORIES.map(c => { const ex = data.budget.categories?.find(x => x.name === c.name); return { name: c.name, allocated: ex?.allocated || '', spent: ex?.spent || 0 }; }) });
      } else {
        setBudget(null);
        setForm({ income: '', savingsGoal: '', categories: BUDGET_CATEGORIES.map(c => ({ name: c.name, allocated: '', spent: 0 })) });
      }
    } catch { } finally { setLoading(false); }
  };

  useEffect(() => { fetchBudget(); }, [month, year]);

  const handleSave = async () => {
    setSaving(true);
    try {
      const data = await budgetApi.save({ month, year, income: parseFloat(form.income) || 0, savingsGoal: parseFloat(form.savingsGoal) || 0, categories: form.categories.map(c => ({ ...c, allocated: parseFloat(c.allocated) || 0 })) });
      setBudget(data.budget);
      setEditing(false);
    } catch (err) { console.error(err); } finally { setSaving(false); }
  };

  const updateCatAllocated = (name, val) => setForm(p => ({ ...p, categories: p.categories.map(c => c.name === name ? { ...c, allocated: val } : c) }));

  const totalAllocated = form.categories.reduce((s, c) => s + (parseFloat(c.allocated) || 0), 0);
  const totalSpent = form.categories.reduce((s, c) => s + (c.spent || 0), 0);
  const income = parseFloat(form.income) || 0;
  const savingsGoal = parseFloat(form.savingsGoal) || 0;
  const available = income - totalAllocated;
  const healthScore = income > 0 ? Math.max(0, Math.min(100, Math.round(((income - totalSpent) / income) * 100))) : 0;

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex">
      <Sidebar />
      <div className="flex-1 lg:pl-64 pt-16">
        <Navbar title="Budget Planner" />
        <main className="p-6 max-w-5xl mx-auto">
          <PageTransition>
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold text-white">Budget Planner</h1>
                <p className="text-xs text-slate-400 mt-1">Plan and track your monthly budget</p>
              </div>
              <div className="flex items-center gap-3">
                <select value={month} onChange={e => setMonth(parseInt(e.target.value))}
                  className="bg-slate-950/50 border border-white/10 rounded-xl py-2 px-3 text-xs text-slate-300 focus:outline-none appearance-none">
                  {MONTHS_LABELS.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}
                </select>
                <select value={year} onChange={e => setYear(parseInt(e.target.value))}
                  className="bg-slate-950/50 border border-white/10 rounded-xl py-2 px-3 text-xs text-slate-300 focus:outline-none appearance-none">
                  {[2024, 2025, 2026].map(y => <option key={y} value={y}>{y}</option>)}
                </select>
                <button onClick={() => setEditing(true)} className="btn-gradient px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2">
                  <Pencil className="h-4 w-4" /> {budget ? 'Edit' : 'Set Budget'}
                </button>
              </div>
            </div>

            {loading ? (
              <div className="flex items-center justify-center h-48"><Loader2 className="h-6 w-6 text-indigo-400 animate-spin" /></div>
            ) : budget ? (
              <>
                {/* Summary Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                  {[
                    { label: 'Monthly Income', value: `₹${budget.income?.toLocaleString('en-IN')}`, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20' },
                    { label: 'Total Allocated', value: `₹${totalAllocated.toLocaleString('en-IN')}`, color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20' },
                    { label: 'Total Spent', value: `₹${totalSpent.toLocaleString('en-IN')}`, color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20' },
                    { label: 'Budget Health', value: `${healthScore}%`, color: healthScore > 60 ? 'text-emerald-400' : healthScore > 30 ? 'text-amber-400' : 'text-red-400', bg: 'bg-slate-800/50 border-slate-700/30' },
                  ].map((s, i) => (
                    <div key={i} className={`glass-card border rounded-xl p-4 ${s.bg}`}>
                      <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">{s.label}</p>
                      <p className={`text-xl font-black mt-1 ${s.color}`}>{s.value}</p>
                    </div>
                  ))}
                </div>

                {/* Category Breakdown */}
                <div className="glass-card border border-white/7 rounded-2xl p-5">
                  <h3 className="text-sm font-bold text-white mb-4">Category Breakdown</h3>
                  <div className="space-y-4">
                    {BUDGET_CATEGORIES.map(cat => {
                      const catData = budget.categories?.find(c => c.name === cat.name);
                      if (!catData || (!catData.allocated && !catData.spent)) return null;
                      const allocated = catData.allocated || 0;
                      const spent = catData.spent || 0;
                      const pct = allocated > 0 ? Math.min(100, Math.round((spent / allocated) * 100)) : 0;
                      const over = spent > allocated && allocated > 0;
                      return (
                        <div key={cat.name}>
                          <div className="flex items-center justify-between mb-1.5">
                            <div className="flex items-center gap-2">
                              <span className="text-base">{cat.icon}</span>
                              <span className="text-xs font-medium text-slate-300 capitalize">{cat.name}</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs">
                              <span className={over ? 'text-red-400 font-bold' : 'text-slate-400'}>₹{spent.toLocaleString('en-IN')}</span>
                              <span className="text-slate-600">/</span>
                              <span className="text-slate-400">₹{allocated.toLocaleString('en-IN')}</span>
                              {over && <span className="text-red-400 font-bold text-[10px] bg-red-500/10 px-1.5 py-0.5 rounded">OVER</span>}
                            </div>
                          </div>
                          <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden">
                            <motion.div className="h-full rounded-full transition-all duration-700"
                              style={{ width: `${pct}%`, background: over ? '#F43F5E' : cat.color }}
                              initial={{ width: 0 }} animate={{ width: `${pct}%` }} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              <EmptyState icon={Receipt} title="No budget set for this month" description="Set your income, savings goal, and allocate spending by category." actionLabel="Set Budget" onAction={() => setEditing(true)} />
            )}
          </PageTransition>
        </main>
      </div>

      {/* Edit Modal */}
      <AnimatePresence>
        {editing && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && setEditing(false)}
          >
            <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95 }}
              className="glass-card border border-white/10 rounded-2xl p-6 w-full max-w-lg shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-bold text-white">Budget Setup — {MONTHS_LABELS[month - 1]} {year}</h3>
                <button onClick={() => setEditing(false)} className="p-1.5 rounded-lg hover:bg-white/5 text-slate-400"><X className="h-4 w-4" /></button>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Monthly Income (₹)</label>
                    <input type="number" value={form.income} onChange={e => setForm(p => ({ ...p, income: e.target.value }))}
                      placeholder="0" className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500/50" />
                  </div>
                  <div>
                    <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Savings Goal (₹)</label>
                    <input type="number" value={form.savingsGoal} onChange={e => setForm(p => ({ ...p, savingsGoal: e.target.value }))}
                      placeholder="0" className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500/50" />
                  </div>
                </div>
                <div className="border-t border-white/5 pt-4">
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-3">Category Allocation (₹)</p>
                  <div className="space-y-2">
                    {BUDGET_CATEGORIES.map(cat => {
                      const catForm = form.categories.find(c => c.name === cat.name);
                      return (
                        <div key={cat.name} className="flex items-center gap-3">
                          <span className="text-base w-6">{cat.icon}</span>
                          <label className="text-xs text-slate-400 capitalize w-24 shrink-0">{cat.name}</label>
                          <input type="number" value={catForm?.allocated || ''} onChange={e => updateCatAllocated(cat.name, e.target.value)}
                            placeholder="0" className="flex-1 bg-slate-950/50 border border-white/10 rounded-xl py-2 px-3 text-sm text-white focus:outline-none focus:border-indigo-500/50" />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="flex items-center justify-between py-2 px-3 bg-slate-900/50 rounded-xl">
                  <span className="text-xs text-slate-400">Total Allocated</span>
                  <span className={`text-sm font-bold ${available < 0 ? 'text-red-400' : 'text-emerald-400'}`}>₹{totalAllocated.toLocaleString('en-IN')} {income > 0 && `(${available >= 0 ? '+' : ''}₹${available.toLocaleString('en-IN')} remaining)`}</span>
                </div>
                <button onClick={handleSave} disabled={saving} className="w-full btn-gradient py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2">
                  {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                  Save Budget
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Budget;
