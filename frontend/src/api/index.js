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
