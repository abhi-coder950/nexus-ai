/**
 * Nexus AI — Smart Rule-Based Recommendation Engine
 * Zero paid AI. 100% data-driven intelligence.
 */

// ─── Expense Analysis ─────────────────────────────────────────────────────────
export function analyzeExpenses(currentMonthSummary, prevMonthSummary, budget) {
  const insights = [];

  if (!currentMonthSummary || currentMonthSummary.length === 0) {
    return [{ type: 'info', icon: '💡', title: 'Start tracking expenses', message: 'Add your first expense to get personalized spending insights.' }];
  }

  const currentTotal = currentMonthSummary.reduce((s, c) => s + c.total, 0);
  const prevTotal = prevMonthSummary?.reduce((s, c) => s + c.total, 0) || 0;

  // Month-over-month comparison
  if (prevTotal > 0) {
    const change = ((currentTotal - prevTotal) / prevTotal) * 100;
    if (change > 20) {
      insights.push({ type: 'warning', icon: '📈', title: 'Spending increased', message: `Your spending is up ${change.toFixed(0)}% vs last month (₹${currentTotal.toLocaleString('en-IN')} vs ₹${prevTotal.toLocaleString('en-IN')}).` });
    } else if (change < -10) {
      insights.push({ type: 'success', icon: '🎉', title: 'Great savings!', message: `You spent ${Math.abs(change).toFixed(0)}% less than last month. Keep it up!` });
    }
  }

  // Top spending category
  const topCategory = currentMonthSummary[0];
  if (topCategory) {
    const pct = Math.round((topCategory.total / currentTotal) * 100);
    if (pct > 40) {
      insights.push({ type: 'warning', icon: '⚠️', title: `High ${topCategory._id} spending`, message: `${topCategory._id} accounts for ${pct}% of monthly spending (₹${topCategory.total.toLocaleString('en-IN')}).` });
    }
  }

  // Budget adherence
  if (budget && budget.income > 0) {
    const savingsRate = ((budget.income - currentTotal) / budget.income) * 100;
    if (savingsRate < 10) {
      insights.push({ type: 'danger', icon: '🚨', title: 'Low savings rate', message: `You're only saving ${Math.max(0, savingsRate).toFixed(0)}% of income. Aim for at least 20%.` });
    } else if (savingsRate > 30) {
      insights.push({ type: 'success', icon: '💰', title: 'Excellent savings rate!', message: `You're saving ${savingsRate.toFixed(0)}% of income this month. Outstanding!` });
    }
  }

  return insights;
}

// ─── Habit Analysis ──────────────────────────────────────────────────────────
export function analyzeHabits(habits) {
  const insights = [];
  if (!habits || habits.length === 0) return [{ type: 'info', icon: '🌱', title: 'Build your first habit', message: 'Start with one small habit and build from there.' }];

  const today = new Date().toISOString().split('T')[0];
  const completedToday = habits.filter(h => h.completions?.some(c => c.date === today)).length;
  const completionRate = Math.round((completedToday / habits.length) * 100);

  if (completionRate === 100) {
    insights.push({ type: 'success', icon: '🔥', title: 'Perfect day!', message: `All ${habits.length} habits completed today. You\'re on fire!` });
  } else if (completionRate < 50) {
    insights.push({ type: 'warning', icon: '⏰', title: 'Habits pending', message: `${habits.length - completedToday} habits still incomplete today. You've got time!` });
  }

  // Streak alerts
  const longStreaks = habits.filter(h => h.streak >= 7);
  if (longStreaks.length > 0) {
    insights.push({ type: 'success', icon: '⭐', title: 'Streak milestone!', message: `${longStreaks[0].name} is at a ${longStreaks[0].streak}-day streak. Don't break it!` });
  }

  const brokenStreak = habits.filter(h => h.streak === 0 && h.completions?.length > 0);
  if (brokenStreak.length > 0) {
    insights.push({ type: 'warning', icon: '💔', title: 'Streak broken', message: `${brokenStreak[0].name} streak was broken. Restart today to rebuild momentum.` });
  }

  return insights;
}

// ─── Goal Analysis ────────────────────────────────────────────────────────────
export function analyzeGoals(goals) {
  const insights = [];
  if (!goals || goals.length === 0) return [{ type: 'info', icon: '🎯', title: 'Set your first goal', message: 'Define what you want to achieve and track your progress.' }];

  const activeGoals = goals.filter(g => g.status === 'active');
  const nearComplete = activeGoals.filter(g => g.progress >= 80 && g.progress < 100);
  const stalled = activeGoals.filter(g => g.progress < 20 && g.createdAt && new Date() - new Date(g.createdAt) > 7 * 24 * 60 * 60 * 1000);

  if (nearComplete.length > 0) {
    insights.push({ type: 'success', icon: '🏁', title: 'Almost there!', message: `${nearComplete[0].title} is ${nearComplete[0].progress}% complete. Push to finish!` });
  }

  if (stalled.length > 0) {
    insights.push({ type: 'warning', icon: '📌', title: 'Goal needs attention', message: `"${stalled[0].title}" hasn't progressed much. Review and add milestones.` });
  }

  // Overdue goals
  const overdue = activeGoals.filter(g => g.targetDate && new Date(g.targetDate) < new Date());
  if (overdue.length > 0) {
    insights.push({ type: 'danger', icon: '⏳', title: `${overdue.length} overdue goal${overdue.length > 1 ? 's' : ''}`, message: `"${overdue[0].title}" is past its target date. Update or reschedule.` });
  }

  return insights;
}

// ─── Bill Analysis ───────────────────────────────────────────────────────────
export function analyzeBills(bills) {
  const insights = [];
  if (!bills || bills.length === 0) return [];

  const today = new Date();
  const in3Days = new Date(); in3Days.setDate(today.getDate() + 3);
  const in7Days = new Date(); in7Days.setDate(today.getDate() + 7);

  const urgent = bills.filter(b => !b.isPaid && new Date(b.dueDate) <= in3Days);
  const upcoming = bills.filter(b => !b.isPaid && new Date(b.dueDate) > in3Days && new Date(b.dueDate) <= in7Days);
  const overdue = bills.filter(b => !b.isPaid && new Date(b.dueDate) < today);

  if (overdue.length > 0) {
    const total = overdue.reduce((s, b) => s + b.amount, 0);
    insights.push({ type: 'danger', icon: '🚨', title: `${overdue.length} overdue bill${overdue.length > 1 ? 's' : ''}`, message: `₹${total.toLocaleString('en-IN')} in overdue payments. Pay immediately to avoid penalties.` });
  }

  if (urgent.length > 0) {
    insights.push({ type: 'warning', icon: '⚡', title: 'Bills due very soon', message: `${urgent.length} bill${urgent.length > 1 ? 's' : ''} due within 3 days. Don't miss payment!` });
  } else if (upcoming.length > 0) {
    insights.push({ type: 'info', icon: '📅', title: 'Upcoming bills', message: `${upcoming.length} bill${upcoming.length > 1 ? 's' : ''} due this week. Prepare payment.` });
  }

  return insights;
}

// ─── Task Analysis ───────────────────────────────────────────────────────────
export function analyzeTasks(taskStats) {
  const insights = [];
  if (!taskStats) return [];

  const { total, done, overdue, pending } = taskStats;
  if (total === 0) return [{ type: 'info', icon: '📝', title: 'Add your first task', message: 'Break your goals into actionable tasks.' }];

  const completionRate = Math.round((done / total) * 100);

  if (completionRate >= 80) {
    insights.push({ type: 'success', icon: '✅', title: 'Highly productive!', message: `${completionRate}% of tasks completed. Excellent work ethic!` });
  }

  if (overdue > 0) {
    insights.push({ type: 'danger', icon: '⏰', title: `${overdue} overdue task${overdue > 1 ? 's' : ''}`, message: `Reschedule or complete these to stay on track.` });
  }

  if (pending > 5 && completionRate < 30) {
    insights.push({ type: 'warning', icon: '📋', title: 'Task backlog building', message: `${pending} tasks pending with low completion rate. Consider prioritizing.` });
  }

  return insights;
}

// ─── Savings Analysis ────────────────────────────────────────────────────────
export function analyzeSavings(savingsGoals) {
  const insights = [];
  if (!savingsGoals || savingsGoals.length === 0) return [{ type: 'info', icon: '🎯', title: 'Create a savings goal', message: 'Define what you\'re saving for and track your progress.' }];

  const totalTarget = savingsGoals.reduce((s, g) => s + g.targetAmount, 0);
  const totalSaved = savingsGoals.reduce((s, g) => s + g.currentAmount, 0);
  const overallProgress = totalTarget > 0 ? Math.round((totalSaved / totalTarget) * 100) : 0;

  const nearGoals = savingsGoals.filter(g => !g.isCompleted && (g.currentAmount / g.targetAmount) >= 0.8);
  if (nearGoals.length > 0) {
    const remaining = nearGoals[0].targetAmount - nearGoals[0].currentAmount;
    insights.push({ type: 'success', icon: '💰', title: 'Almost at savings goal!', message: `Only ₹${remaining.toLocaleString('en-IN')} more needed for "${nearGoals[0].name}".` });
  }

  // Goals with upcoming deadlines
  const urgentGoals = savingsGoals.filter(g => {
    if (!g.targetDate || g.isCompleted) return false;
    const daysLeft = Math.ceil((new Date(g.targetDate) - new Date()) / (1000 * 60 * 60 * 24));
    return daysLeft <= 30 && daysLeft > 0 && (g.currentAmount / g.targetAmount) < 0.5;
  });
  if (urgentGoals.length > 0) {
    insights.push({ type: 'warning', icon: '📅', title: 'Savings goal deadline near', message: `"${urgentGoals[0].name}" deadline in 30 days but only halfway there.` });
  }

  return insights;
}

// ─── Master Recommendation Engine ────────────────────────────────────────────
export function generateRecommendations({ expenses, habits, goals, bills, tasks, savings, prevExpenses, budget }) {
  const all = [
    ...analyzeExpenses(expenses, prevExpenses, budget),
    ...analyzeHabits(habits),
    ...analyzeGoals(goals),
    ...analyzeBills(bills),
    ...analyzeTasks(tasks),
    ...analyzeSavings(savings),
  ];

  // Sort: danger > warning > success > info
  const priority = { danger: 0, warning: 1, success: 2, info: 3 };
  return all.sort((a, b) => priority[a.type] - priority[b.type]).slice(0, 8);
}

// ─── Resume Readiness Score ───────────────────────────────────────────────────
export function calcResumeReadiness(user) {
  if (!user) return 0;
  let score = 0;
  if (user.name) score += 5;
  if (user.email) score += 5;
  if (user.mobile) score += 5;
  if (user.linkedinUrl) score += 10;
  if (user.githubUrl) score += 10;
  if (user.academicDetails?.course) score += 10;
  if (user.academicDetails?.cgpa) score += 10;
  if (user.skills?.length >= 5) score += 15;
  else if (user.skills?.length > 0) score += 8;
  if (user.placementGoals?.targetRole) score += 10;
  if (user.placementGoals?.dreamCompany) score += 5;
  if (user.resumePath) score += 15;
  return Math.min(score, 100);
}

// ─── Productivity Score ───────────────────────────────────────────────────────
export function calcProductivityScore({ taskStats, habits }) {
  let score = 0;
  let weight = 0;

  if (taskStats && taskStats.total > 0) {
    const taskRate = (taskStats.done / taskStats.total) * 100;
    score += taskRate * 0.5;
    weight += 0.5;
  }

  if (habits && habits.length > 0) {
    const today = new Date().toISOString().split('T')[0];
    const completedToday = habits.filter(h => h.completions?.some(c => c.date === today)).length;
    const habitRate = (completedToday / habits.length) * 100;
    score += habitRate * 0.5;
    weight += 0.5;
  }

  return weight > 0 ? Math.round(score / weight) : 0;
}
