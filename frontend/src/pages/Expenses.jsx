import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';
import EmptyState from '../components/EmptyState';
import { SkeletonList } from '../components/LoadingSkeleton';
import { motion, AnimatePresence } from 'framer-motion';
import { expensesApi } from '../api/index';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Wallet, Plus, Trash2, Edit3, X, Save, Loader2, IndianRupee, TrendingDown, TrendingUp, Calendar } from 'lucide-react';

const CATEGORIES = ['food', 'transport', 'shopping', 'entertainment', 'health', 'education', 'bills', 'housing', 'travel', 'other'];
const CAT_COLORS = { food: '#F43F5E', transport: '#3B82F6', shopping: '#8B5CF6', entertainment: '#F59E0B', health: '#10B981', education: '#6366F1', bills: '#EC4899', housing: '#14B8A6', travel: '#0EA5E9', other: '#94A3B8' };
const CAT_ICONS = { food: '🍽️', transport: '🚗', shopping: '🛍️', entertainment: '🎬', health: '💊', education: '📚', bills: '📄', housing: '🏠', travel: '✈️', other: '💡' };
const PAYMENT_METHODS = ['cash', 'card', 'upi', 'netbanking', 'wallet', 'other'];

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-slate-900 border border-white/10 rounded-xl p-3 text-xs">
      <p className="font-bold text-white">{payload[0].name}</p>
      <p className="text-indigo-400">₹{payload[0].value?.toLocaleString('en-IN')}</p>
    </div>
  );
};

const ExpenseModal = ({ expense, onClose, onSave }) => {
  const [form, setForm] = useState({ amount: expense?.amount || '', category: expense?.category || 'food', description: expense?.description || '', paymentMethod: expense?.paymentMethod || 'upi', date: expense?.date ? new Date(expense.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0] });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.amount || !form.description.trim()) return;
    setSaving(true);
    try { await onSave({ ...form, amount: parseFloat(form.amount) }); onClose(); } finally { setSaving(false); }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95 }}
        className="glass-card border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl"
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-white text-base">{expense ? 'Edit Expense' : 'Add Expense'}</h3>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/5 text-slate-400"><X className="h-4 w-4" /></button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Amount (₹)</label>
            <input type="number" min="0" step="0.01" value={form.amount} onChange={e => setForm(p => ({ ...p, amount: e.target.value }))}
              placeholder="0.00" autoFocus required
              className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-lg font-bold text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50" />
          </div>
          <input value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))}
            placeholder="Description (e.g. Swiggy order, Uber ride)..." required
            className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50" />
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Category</label>
              <select value={form.category} onChange={e => setForm(p => ({ ...p, category: e.target.value }))}
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 appearance-none">
                {CATEGORIES.map(c => <option key={c} value={c}>{CAT_ICONS[c]} {c}</option>)}
              </select>
            </div>
            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Payment</label>
              <select value={form.paymentMethod} onChange={e => setForm(p => ({ ...p, paymentMethod: e.target.value }))}
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 appearance-none">
                {PAYMENT_METHODS.map(m => <option key={m} value={m}>{m.toUpperCase()}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Date</label>
            <input type="date" value={form.date} onChange={e => setForm(p => ({ ...p, date: e.target.value }))}
              className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500/50 [color-scheme:dark]" />
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 py-2.5 rounded-xl text-sm font-medium text-slate-400 bg-slate-800 hover:bg-slate-700 transition-colors">Cancel</button>
            <button type="submit" disabled={saving} className="flex-1 btn-gradient py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2">
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              {expense ? 'Update' : 'Add Expense'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [summary, setSummary] = useState([]);
  const [trend, setTrend] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editExpense, setEditExpense] = useState(null);
  const now = new Date();
  const [month, setMonth] = useState(now.getMonth() + 1);
  const [year, setYear] = useState(now.getFullYear());

  const fetchAll = async () => {
    setLoading(true);
    try {
      const [expData, sumData, trendData] = await Promise.all([
        expensesApi.getAll({ month, year, limit: 100 }),
        expensesApi.monthlySummary({ month, year }),
        expensesApi.trend()
      ]);
      setExpenses(expData.expenses || []);
      setSummary(sumData.summary || []);
      setTrend((trendData.trend || []).map(t => ({ name: `${t._id.month}/${t._id.year}`, total: t.total })));
    } catch (err) { console.error(err); } finally { setLoading(false); }
  };

  useEffect(() => { fetchAll(); }, [month, year]);

  const handleCreate = async (data) => { const r = await expensesApi.create(data); setExpenses(p => [r.expense, ...p]); fetchAll(); };
  const handleUpdate = async (id, data) => { const r = await expensesApi.update(id, data); setExpenses(p => p.map(e => e._id === id ? r.expense : e)); fetchAll(); };
  const handleDelete = async (id) => { await expensesApi.delete(id); setExpenses(p => p.filter(e => e._id !== id)); fetchAll(); };
  const handleEdit = (exp) => { setEditExpense(exp); setShowModal(true); };
  const handleClose = () => { setShowModal(false); setEditExpense(null); };
  const handleSave = async (data) => { if (editExpense) await handleUpdate(editExpense._id, data); else await handleCreate(data); };

  const total = expenses.reduce((s, e) => s + e.amount, 0);
  const pieData = summary.map(s => ({ name: s._id, value: s.total, color: CAT_COLORS[s._id] || '#94A3B8' }));

  const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex">
      <Sidebar />
      <div className="flex-1 lg:pl-64 pt-16">
        <Navbar title="Expense Tracker" />
        <main className="p-6 max-w-7xl mx-auto">
          <PageTransition>
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold text-white">Expenses</h1>
                <p className="text-xs text-slate-400 mt-1">Tracking your spending habits</p>
              </div>
              <div className="flex items-center gap-3">
                <select value={month} onChange={e => setMonth(parseInt(e.target.value))}
                  className="bg-slate-950/50 border border-white/10 rounded-xl py-2 px-3 text-xs text-slate-300 focus:outline-none appearance-none">
                  {MONTHS.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}
                </select>
                <select value={year} onChange={e => setYear(parseInt(e.target.value))}
                  className="bg-slate-950/50 border border-white/10 rounded-xl py-2 px-3 text-xs text-slate-300 focus:outline-none appearance-none">
                  {[2024, 2025, 2026].map(y => <option key={y} value={y}>{y}</option>)}
                </select>
                <button onClick={() => setShowModal(true)} className="btn-gradient px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-2">
                  <Plus className="h-4 w-4" /> Add
                </button>
              </div>
            </div>

            {/* Total card */}
            <div className="glass-card border border-white/7 rounded-2xl p-5 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Total Spent — {MONTHS[month - 1]} {year}</p>
                  <p className="text-3xl font-black text-white mt-1">₹{total.toLocaleString('en-IN')}</p>
                </div>
                <div className="w-12 h-12 bg-rose-500/10 border border-rose-500/20 rounded-xl flex items-center justify-center">
                  <IndianRupee className="h-5 w-5 text-rose-400" />
                </div>
              </div>
            </div>

            {/* Charts */}
            {!loading && summary.length > 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
                {/* Pie chart */}
                <div className="glass-card border border-white/7 rounded-2xl p-5">
                  <h3 className="text-sm font-bold text-white mb-4">By Category</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie data={pieData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} paddingAngle={3} dataKey="value">
                        {pieData.map((entry, i) => <Cell key={i} fill={entry.color} strokeWidth={0} />)}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {summary.slice(0, 6).map(s => (
                      <div key={s._id} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full shrink-0" style={{ background: CAT_COLORS[s._id] || '#94A3B8' }} />
                        <span className="text-[10px] text-slate-400 capitalize">{s._id}</span>
                        <span className="text-[10px] font-bold text-slate-200 ml-auto">₹{s.total.toLocaleString('en-IN')}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Bar chart */}
                <div className="glass-card border border-white/7 rounded-2xl p-5">
                  <h3 className="text-sm font-bold text-white mb-4">6-Month Trend</h3>
                  <ResponsiveContainer width="100%" height={200}>
                    <BarChart data={trend}>
                      <XAxis dataKey="name" tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fill: '#64748b', fontSize: 10 }} axisLine={false} tickLine={false} />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar dataKey="total" fill="#6366F1" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {/* Transactions list */}
            <div className="glass-card border border-white/7 rounded-2xl p-5">
              <h3 className="text-sm font-bold text-white mb-4">Transactions</h3>
              {loading ? <SkeletonList rows={5} /> : expenses.length === 0 ? (
                <EmptyState icon={Wallet} title="No expenses" description="Start tracking your spending to get insights." actionLabel="Add Expense" onAction={() => setShowModal(true)} iconColor="text-cyan-400" bgColor="bg-cyan-500/10" borderColor="border-cyan-500/20" />
              ) : (
                <div className="space-y-2">
                  <AnimatePresence>
                    {expenses.map(exp => (
                      <motion.div key={exp._id} layout initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/3 transition-colors group"
                      >
                        <div className="w-9 h-9 rounded-xl flex items-center justify-center text-base shrink-0" style={{ background: `${CAT_COLORS[exp.category]}20` }}>
                          {CAT_ICONS[exp.category]}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">{exp.description}</p>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="text-[10px] text-slate-500 capitalize">{exp.category}</span>
                            <span className="text-[10px] text-slate-600">·</span>
                            <span className="text-[10px] text-slate-500">{exp.paymentMethod?.toUpperCase()}</span>
                            <span className="text-[10px] text-slate-600">·</span>
                            <span className="text-[10px] text-slate-500">{new Date(exp.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white">₹{exp.amount.toLocaleString('en-IN')}</span>
                          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <button onClick={() => handleEdit(exp)} className="p-1.5 rounded-lg hover:bg-white/5 text-slate-500 hover:text-indigo-400 transition-colors"><Edit3 className="h-3 w-3" /></button>
                            <button onClick={() => handleDelete(exp._id)} className="p-1.5 rounded-lg hover:bg-red-500/10 text-slate-500 hover:text-red-400 transition-colors"><Trash2 className="h-3 w-3" /></button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </PageTransition>
        </main>
      </div>
      <AnimatePresence>
        {showModal && <ExpenseModal expense={editExpense} onClose={handleClose} onSave={handleSave} />}
      </AnimatePresence>
    </div>
  );
};

export default Expenses;
