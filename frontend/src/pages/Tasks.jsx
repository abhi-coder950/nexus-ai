import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';
import EmptyState from '../components/EmptyState';
import { SkeletonList } from '../components/LoadingSkeleton';
import { motion, AnimatePresence } from 'framer-motion';
import { tasksApi } from '../api/index';
import {
  CheckSquare, Plus, Trash2, Edit3, X, Save, Calendar, Flag,
  AlarmClock, Filter, Search, LayoutKanban, List, ChevronDown,
  Circle, CheckCircle2, Loader2, Tag
} from 'lucide-react';

const PRIORITIES = [
  { value: 'urgent', label: 'Urgent', color: 'text-red-400 bg-red-500/10 border-red-500/20' },
  { value: 'high', label: 'High', color: 'text-orange-400 bg-orange-500/10 border-orange-500/20' },
  { value: 'medium', label: 'Medium', color: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20' },
  { value: 'low', label: 'Low', color: 'text-slate-400 bg-slate-500/10 border-slate-500/20' },
];

const STATUSES = ['todo', 'in_progress', 'done'];
const STATUS_LABELS = { todo: 'To Do', in_progress: 'In Progress', done: 'Done' };
const STATUS_COLORS = {
  todo: 'border-slate-500/30 bg-slate-500/5',
  in_progress: 'border-indigo-500/30 bg-indigo-500/5',
  done: 'border-emerald-500/30 bg-emerald-500/5'
};
const STATUS_HEADER = {
  todo: 'text-slate-400',
  in_progress: 'text-indigo-400',
  done: 'text-emerald-400'
};

const getPriorityStyle = (p) => PRIORITIES.find(x => x.value === p)?.color || '';

const TaskCard = ({ task, onUpdate, onDelete, onEdit }) => {
  const [completing, setCompleting] = useState(false);

  const handleToggle = async () => {
    setCompleting(true);
    try {
      const newStatus = task.status === 'done' ? 'todo' : 'done';
      await onUpdate(task._id, { status: newStatus });
    } finally { setCompleting(false); }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className={`glass-card p-4 rounded-xl border ${task.status === 'done' ? 'opacity-60' : ''} hover:border-white/15 transition-all group`}
    >
      <div className="flex items-start gap-3">
        <button onClick={handleToggle} disabled={completing} className="mt-0.5 shrink-0">
          {completing ? (
            <Loader2 className="h-4.5 w-4.5 text-indigo-400 animate-spin" />
          ) : task.status === 'done' ? (
            <CheckCircle2 className="h-4.5 w-4.5 text-emerald-400" />
          ) : (
            <Circle className="h-4.5 w-4.5 text-slate-600 hover:text-indigo-400 transition-colors" />
          )}
        </button>
        <div className="flex-1 min-w-0">
          <p className={`text-sm font-medium ${task.status === 'done' ? 'line-through text-slate-500' : 'text-white'}`}>
            {task.title}
          </p>
          {task.description && <p className="text-xs text-slate-500 mt-0.5 truncate">{task.description}</p>}
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border uppercase ${getPriorityStyle(task.priority)}`}>
              {task.priority}
            </span>
            {task.dueDate && (
              <span className="text-[10px] text-slate-500 flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {new Date(task.dueDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}
              </span>
            )}
            {task.tags?.map(tag => (
              <span key={tag} className="text-[10px] bg-violet-500/10 text-violet-400 border border-violet-500/20 px-2 py-0.5 rounded-md">#{tag}</span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={() => onEdit(task)} className="p-1.5 rounded-lg hover:bg-indigo-500/10 text-slate-500 hover:text-indigo-400 transition-colors">
            <Edit3 className="h-3.5 w-3.5" />
          </button>
          <button onClick={() => onDelete(task._id)} className="p-1.5 rounded-lg hover:bg-red-500/10 text-slate-500 hover:text-red-400 transition-colors">
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const TaskModal = ({ task, onClose, onSave }) => {
  const [form, setForm] = useState({
    title: task?.title || '',
    description: task?.description || '',
    priority: task?.priority || 'medium',
    status: task?.status || 'todo',
    dueDate: task?.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : '',
    tags: task?.tags?.join(', ') || ''
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    setSaving(true);
    try {
      await onSave({
        ...form,
        tags: form.tags ? form.tags.split(',').map(t => t.trim()).filter(Boolean) : [],
        dueDate: form.dueDate || null
      });
      onClose();
    } finally { setSaving(false); }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 10 }}
        className="glass-card border border-white/10 rounded-2xl p-6 w-full max-w-md shadow-2xl"
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-white text-base">{task ? 'Edit Task' : 'New Task'}</h3>
          <button onClick={onClose} className="p-1.5 rounded-lg hover:bg-white/5 text-slate-400"><X className="h-4 w-4" /></button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Title *</label>
            <input value={form.title} onChange={e => setForm(p => ({ ...p, title: e.target.value }))}
              placeholder="What needs to be done?" autoFocus required
              className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50" />
          </div>
          <div>
            <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Description</label>
            <textarea value={form.description} onChange={e => setForm(p => ({ ...p, description: e.target.value }))}
              placeholder="Add details..." rows={2}
              className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50 resize-none" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Priority</label>
              <select value={form.priority} onChange={e => setForm(p => ({ ...p, priority: e.target.value }))}
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 appearance-none">
                {PRIORITIES.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
              </select>
            </div>
            <div>
              <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Status</label>
              <select value={form.status} onChange={e => setForm(p => ({ ...p, status: e.target.value }))}
                className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:outline-none focus:border-indigo-500/50 appearance-none">
                {STATUSES.map(s => <option key={s} value={s}>{STATUS_LABELS[s]}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Due Date</label>
            <input type="date" value={form.dueDate} onChange={e => setForm(p => ({ ...p, dueDate: e.target.value }))}
              className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-indigo-500/50 [color-scheme:dark]" />
          </div>
          <div>
            <label className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1.5 block">Tags (comma separated)</label>
            <input value={form.tags} onChange={e => setForm(p => ({ ...p, tags: e.target.value }))}
              placeholder="work, urgent, meeting"
              className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50" />
          </div>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 py-2.5 rounded-xl text-sm font-medium text-slate-400 bg-slate-800 hover:bg-slate-700 transition-colors">Cancel</button>
            <button type="submit" disabled={saving} className="flex-1 btn-gradient py-2.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2">
              {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
              {task ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState('kanban'); // 'kanban' | 'list'
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [search, setSearch] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const data = await tasksApi.getAll();
      setTasks(data.tasks || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchTasks(); }, []);

  const filtered = tasks.filter(t => {
    const matchSearch = !search || t.title.toLowerCase().includes(search.toLowerCase());
    const matchPriority = !priorityFilter || t.priority === priorityFilter;
    return matchSearch && matchPriority;
  });

  const handleCreate = async (data) => {
    const result = await tasksApi.create(data);
    setTasks(prev => [result.task, ...prev]);
  };

  const handleUpdate = async (id, data) => {
    const result = await tasksApi.update(id, data);
    setTasks(prev => prev.map(t => t._id === id ? result.task : t));
  };

  const handleDelete = async (id) => {
    await tasksApi.delete(id);
    setTasks(prev => prev.filter(t => t._id !== id));
  };

  const handleEdit = (task) => { setEditTask(task); setShowModal(true); };
  const handleModalClose = () => { setShowModal(false); setEditTask(null); };
  const handleModalSave = async (data) => {
    if (editTask) { await handleUpdate(editTask._id, data); }
    else { await handleCreate(data); }
  };

  const stats = {
    total: tasks.length,
    done: tasks.filter(t => t.status === 'done').length,
    inProgress: tasks.filter(t => t.status === 'in_progress').length,
    overdue: tasks.filter(t => t.status !== 'done' && t.dueDate && new Date(t.dueDate) < new Date()).length,
  };

  return (
    <div className="min-h-screen bg-[#070A13] text-slate-100 flex">
      <Sidebar />
      <div className="flex-1 lg:pl-64 pt-16">
        <Navbar title="Task Manager" />
        <main className="p-6 max-w-7xl mx-auto">
          <PageTransition>
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">Tasks</h1>
                <p className="text-xs text-slate-400 mt-1">{stats.done}/{stats.total} completed · {stats.overdue > 0 && <span className="text-red-400">{stats.overdue} overdue</span>}</p>
              </div>
              <button onClick={() => setShowModal(true)} className="btn-gradient px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 shrink-0">
                <Plus className="h-4 w-4" /> New Task
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              {[
                { label: 'Total', value: stats.total, color: 'text-white', bg: 'bg-slate-500/10', border: 'border-slate-500/20' },
                { label: 'In Progress', value: stats.inProgress, color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20' },
                { label: 'Completed', value: stats.done, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
                { label: 'Overdue', value: stats.overdue, color: 'text-red-400', bg: 'bg-red-500/10', border: 'border-red-500/20' },
              ].map((s, i) => (
                <div key={i} className={`glass-card p-4 rounded-xl border ${s.border}`}>
                  <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
                  <p className="text-[10px] text-slate-500 uppercase font-bold mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Filters + View Toggle */}
            <div className="flex flex-col sm:flex-row gap-3 mb-5">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search tasks..."
                  className="w-full bg-slate-950/50 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500/50" />
              </div>
              <select value={priorityFilter} onChange={e => setPriorityFilter(e.target.value)}
                className="bg-slate-950/50 border border-white/10 rounded-xl py-2.5 px-4 text-sm text-slate-300 focus:outline-none appearance-none min-w-32">
                <option value="">All Priorities</option>
                {PRIORITIES.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
              </select>
              <div className="flex rounded-xl border border-white/10 overflow-hidden">
                {[['kanban', LayoutKanban], ['list', List]].map(([mode, Icon]) => (
                  <button key={mode} onClick={() => setViewMode(mode)}
                    className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium transition-colors ${viewMode === mode ? 'bg-indigo-600/20 text-indigo-300' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'}`}>
                    <Icon className="h-3.5 w-3.5" />
                    {mode === 'kanban' ? 'Kanban' : 'List'}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            {loading ? (
              <SkeletonList rows={5} />
            ) : filtered.length === 0 && tasks.length === 0 ? (
              <EmptyState icon={CheckSquare} title="No tasks yet" description="Create your first task to get started tracking your work and goals." actionLabel="Add Task" onAction={() => setShowModal(true)} />
            ) : viewMode === 'kanban' ? (
              /* Kanban Board */
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {STATUSES.map(status => {
                  const colTasks = filtered.filter(t => t.status === status);
                  return (
                    <div key={status} className={`rounded-2xl border ${STATUS_COLORS[status]} p-4`}>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className={`text-xs font-bold uppercase tracking-wider ${STATUS_HEADER[status]}`}>{STATUS_LABELS[status]}</h3>
                        <span className="text-xs text-slate-500 font-bold bg-slate-800 px-2 py-0.5 rounded-full">{colTasks.length}</span>
                      </div>
                      <div className="space-y-2 min-h-[100px]">
                        <AnimatePresence>
                          {colTasks.map(task => (
                            <TaskCard key={task._id} task={task} onUpdate={handleUpdate} onDelete={handleDelete} onEdit={handleEdit} />
                          ))}
                        </AnimatePresence>
                        {colTasks.length === 0 && (
                          <p className="text-xs text-slate-600 text-center py-6">No tasks here</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* List View */
              <div className="space-y-2">
                <AnimatePresence>
                  {filtered.map(task => (
                    <TaskCard key={task._id} task={task} onUpdate={handleUpdate} onDelete={handleDelete} onEdit={handleEdit} />
                  ))}
                </AnimatePresence>
              </div>
            )}
          </PageTransition>
        </main>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <TaskModal task={editTask} onClose={handleModalClose} onSave={handleModalSave} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tasks;
