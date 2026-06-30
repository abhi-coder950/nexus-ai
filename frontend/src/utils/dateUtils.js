import { format, formatDistanceToNow, isToday, isTomorrow, isYesterday, isPast, isFuture, differenceInDays } from 'date-fns';

export const formatDate = (date, fmt = 'dd MMM yyyy') => {
  if (!date) return '—';
  try { return format(new Date(date), fmt); } catch { return '—'; }
};

export const formatDateTime = (date) => formatDate(date, 'dd MMM yyyy, hh:mm a');

export const relativeTime = (date) => {
  if (!date) return '';
  try { return formatDistanceToNow(new Date(date), { addSuffix: true }); } catch { return ''; }
};

export const isDateToday = (date) => { try { return isToday(new Date(date)); } catch { return false; } };
export const isDateTomorrow = (date) => { try { return isTomorrow(new Date(date)); } catch { return false; } };
export const isDateYesterday = (date) => { try { return isYesterday(new Date(date)); } catch { return false; } };
export const isDatePast = (date) => { try { return isPast(new Date(date)); } catch { return false; } };
export const isDateFuture = (date) => { try { return isFuture(new Date(date)); } catch { return false; } };

export const daysUntil = (date) => {
  if (!date) return null;
  try { return differenceInDays(new Date(date), new Date()); } catch { return null; }
};

export const smartDateLabel = (date) => {
  if (!date) return '—';
  if (isDateToday(date)) return 'Today';
  if (isDateTomorrow(date)) return 'Tomorrow';
  if (isDateYesterday(date)) return 'Yesterday';
  const days = daysUntil(date);
  if (days !== null && days > 0 && days <= 7) return `In ${days} days`;
  if (days !== null && days < 0) return `${Math.abs(days)} days ago`;
  return formatDate(date);
};

export const getCurrentMonthYear = () => {
  const now = new Date();
  return { month: now.getMonth() + 1, year: now.getFullYear() };
};

export const getMonthName = (month) => {
  return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][month - 1];
};

export const getDaysInMonth = (month, year) => new Date(year, month, 0).getDate();

export const generateCalendarDays = (month, year) => {
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = getDaysInMonth(month, year);
  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);
  return days;
};

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
