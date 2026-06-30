// Centralized API layer for Nexus AI
const API_BASE = '/api';

const getToken = () => localStorage.getItem('token');

const headers = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${getToken()}`
});

const handle = async (res) => {
  const data = await res.json();
  if (!res.ok || !data.success) throw new Error(data.message || 'Request failed');
  return data;
};

// ─── Tasks ───────────────────────────────────────────────────────────────────
export const tasksApi = {
  getAll: (params = {}) => fetch(`${API_BASE}/tasks?${new URLSearchParams(params)}`, { headers: headers() }).then(handle),
  create: (data) => fetch(`${API_BASE}/tasks`, { method: 'POST', headers: headers(), body: JSON.stringify(data) }).then(handle),
  update: (id, data) => fetch(`${API_BASE}/tasks/${id}`, { method: 'PUT', headers: headers(), body: JSON.stringify(data) }).then(handle),
  delete: (id) => fetch(`${API_BASE}/tasks/${id}`, { method: 'DELETE', headers: headers() }).then(handle),
  reorder: (updates) => fetch(`${API_BASE}/tasks/bulk/reorder`, { method: 'PUT', headers: headers(), body: JSON.stringify({ updates }) }).then(handle),
  stats: () => fetch(`${API_BASE}/tasks/stats/summary`, { headers: headers() }).then(handle),
};

// ─── Notes ───────────────────────────────────────────────────────────────────
export const notesApi = {
  getAll: (params = {}) => fetch(`${API_BASE}/notes?${new URLSearchParams(params)}`, { headers: headers() }).then(handle),
  create: (data) => fetch(`${API_BASE}/notes`, { method: 'POST', headers: headers(), body: JSON.stringify(data) }).then(handle),
  update: (id, data) => fetch(`${API_BASE}/notes/${id}`, { method: 'PUT', headers: headers(), body: JSON.stringify(data) }).then(handle),
  delete: (id) => fetch(`${API_BASE}/notes/${id}`, { method: 'DELETE', headers: headers() }).then(handle),
  getFolders: () => fetch(`${API_BASE}/notes/folders/list`, { headers: headers() }).then(handle),
};

// ─── Goals ───────────────────────────────────────────────────────────────────
export const goalsApi = {
  getAll: (params = {}) => fetch(`${API_BASE}/goals?${new URLSearchParams(params)}`, { headers: headers() }).then(handle),
  create: (data) => fetch(`${API_BASE}/goals`, { method: 'POST', headers: headers(), body: JSON.stringify(data) }).then(handle),
  update: (id, data) => fetch(`${API_BASE}/goals/${id}`, { method: 'PUT', headers: headers(), body: JSON.stringify(data) }).then(handle),
  delete: (id) => fetch(`${API_BASE}/goals/${id}`, { method: 'DELETE', headers: headers() }).then(handle),
  toggleMilestone: (goalId, milestoneId) => fetch(`${API_BASE}/goals/${goalId}/milestone/${milestoneId}`, { method: 'PATCH', headers: headers() }).then(handle),
};

// ─── Habits ──────────────────────────────────────────────────────────────────
export const habitsApi = {
  getAll: () => fetch(`${API_BASE}/habits`, { headers: headers() }).then(handle),
  create: (data) => fetch(`${API_BASE}/habits`, { method: 'POST', headers: headers(), body: JSON.stringify(data) }).then(handle),
  update: (id, data) => fetch(`${API_BASE}/habits/${id}`, { method: 'PUT', headers: headers(), body: JSON.stringify(data) }).then(handle),
  delete: (id) => fetch(`${API_BASE}/habits/${id}`, { method: 'DELETE', headers: headers() }).then(handle),
  toggleComplete: (id) => fetch(`${API_BASE}/habits/${id}/complete`, { method: 'PATCH', headers: headers() }).then(handle),
};

// ─── Expenses ────────────────────────────────────────────────────────────────
export const expensesApi = {
  getAll: (params = {}) => fetch(`${API_BASE}/expenses?${new URLSearchParams(params)}`, { headers: headers() }).then(handle),
  create: (data) => fetch(`${API_BASE}/expenses`, { method: 'POST', headers: headers(), body: JSON.stringify(data) }).then(handle),
  update: (id, data) => fetch(`${API_BASE}/expenses/${id}`, { method: 'PUT', headers: headers(), body: JSON.stringify(data) }).then(handle),
  delete: (id) => fetch(`${API_BASE}/expenses/${id}`, { method: 'DELETE', headers: headers() }).then(handle),
  monthlySummary: (params = {}) => fetch(`${API_BASE}/expenses/stats/monthly?${new URLSearchParams(params)}`, { headers: headers() }).then(handle),
  trend: () => fetch(`${API_BASE}/expenses/stats/trend`, { headers: headers() }).then(handle),
};

// ─── Budget ──────────────────────────────────────────────────────────────────
export const budgetApi = {
  get: (params = {}) => fetch(`${API_BASE}/budget?${new URLSearchParams(params)}`, { headers: headers() }).then(handle),
  save: (data) => fetch(`${API_BASE}/budget`, { method: 'POST', headers: headers(), body: JSON.stringify(data) }).then(handle),
  delete: (id) => fetch(`${API_BASE}/budget/${id}`, { method: 'DELETE', headers: headers() }).then(handle),
};

// ─── Bills ───────────────────────────────────────────────────────────────────
export const billsApi = {
  getAll: (params = {}) => fetch(`${API_BASE}/bills?${new URLSearchParams(params)}`, { headers: headers() }).then(handle),
  create: (data) => fetch(`${API_BASE}/bills`, { method: 'POST', headers: headers(), body: JSON.stringify(data) }).then(handle),
  update: (id, data) => fetch(`${API_BASE}/bills/${id}`, { method: 'PUT', headers: headers(), body: JSON.stringify(data) }).then(handle),
  delete: (id) => fetch(`${API_BASE}/bills/${id}`, { method: 'DELETE', headers: headers() }).then(handle),
  pay: (id) => fetch(`${API_BASE}/bills/${id}/pay`, { method: 'PATCH', headers: headers() }).then(handle),
};

// ─── Savings ─────────────────────────────────────────────────────────────────
export const savingsApi = {
  getAll: () => fetch(`${API_BASE}/savings`, { headers: headers() }).then(handle),
  create: (data) => fetch(`${API_BASE}/savings`, { method: 'POST', headers: headers(), body: JSON.stringify(data) }).then(handle),
  update: (id, data) => fetch(`${API_BASE}/savings/${id}`, { method: 'PUT', headers: headers(), body: JSON.stringify(data) }).then(handle),
  delete: (id) => fetch(`${API_BASE}/savings/${id}`, { method: 'DELETE', headers: headers() }).then(handle),
  contribute: (id, amount, note) => fetch(`${API_BASE}/savings/${id}/contribute`, { method: 'PATCH', headers: headers(), body: JSON.stringify({ amount, note }) }).then(handle),
};

// ─── Reminders ───────────────────────────────────────────────────────────────
export const remindersApi = {
  getAll: (type) => fetch(`${API_BASE}/reminders?type=${type}`, { headers: headers() }).then(handle),
  create: (data) => fetch(`${API_BASE}/reminders`, { method: 'POST', headers: headers(), body: JSON.stringify(data) }).then(handle),
  update: (id, data) => fetch(`${API_BASE}/reminders/${id}`, { method: 'PUT', headers: headers(), body: JSON.stringify(data) }).then(handle),
  delete: (id) => fetch(`${API_BASE}/reminders/${id}`, { method: 'DELETE', headers: headers() }).then(handle),
  addService: (id, data) => fetch(`${API_BASE}/reminders/${id}/service`, { method: 'POST', headers: headers(), body: JSON.stringify(data) }).then(handle),
};

// ─── Emergency Contacts ───────────────────────────────────────────────────────
export const emergencyApi = {
  getAll: () => fetch(`${API_BASE}/emergency`, { headers: headers() }).then(handle),
  create: (data) => fetch(`${API_BASE}/emergency`, { method: 'POST', headers: headers(), body: JSON.stringify(data) }).then(handle),
  update: (id, data) => fetch(`${API_BASE}/emergency/${id}`, { method: 'PUT', headers: headers(), body: JSON.stringify(data) }).then(handle),
  delete: (id) => fetch(`${API_BASE}/emergency/${id}`, { method: 'DELETE', headers: headers() }).then(handle),
};

// ─── Calendar ────────────────────────────────────────────────────────────────
export const calendarApi = {
  getAll: (params = {}) => fetch(`${API_BASE}/calendar?${new URLSearchParams(params)}`, { headers: headers() }).then(handle),
  create: (data) => fetch(`${API_BASE}/calendar`, { method: 'POST', headers: headers(), body: JSON.stringify(data) }).then(handle),
  update: (id, data) => fetch(`${API_BASE}/calendar/${id}`, { method: 'PUT', headers: headers(), body: JSON.stringify(data) }).then(handle),
  delete: (id) => fetch(`${API_BASE}/calendar/${id}`, { method: 'DELETE', headers: headers() }).then(handle),
  upcoming: () => fetch(`${API_BASE}/calendar/upcoming/week`, { headers: headers() }).then(handle),
};
