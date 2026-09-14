export interface HabitEntry {
  name: string;
  category: string;
}

export const HABIT_LIBRARY: HabitEntry[] = [
  // Health & Fitness
  { name: 'Drink 8 glasses of water', category: 'Health' },
  { name: 'No phone before 9am', category: 'Health' },
  { name: 'Morning stretch', category: 'Health' },
  { name: 'Go for a walk', category: 'Health' },
  { name: 'Work out', category: 'Health' },
  { name: 'Take vitamins', category: 'Health' },
  { name: 'Get 7+ hours of sleep', category: 'Health' },
  { name: 'No caffeine after 3pm', category: 'Health' },
  { name: 'Limit sugar intake', category: 'Health' },
  { name: 'Eat a vegetable with every meal', category: 'Health' },
  { name: 'Cook at home', category: 'Health' },
  { name: 'No alcohol today', category: 'Health' },
  { name: 'Track calories', category: 'Health' },
  { name: 'Intermittent fast', category: 'Health' },
  { name: 'Stand up every hour', category: 'Health' },

  // Mindfulness
  { name: 'Meditate', category: 'Mindfulness' },
  { name: 'Deep breathing', category: 'Mindfulness' },
  { name: 'Journal', category: 'Mindfulness' },
  { name: 'Practice gratitude', category: 'Mindfulness' },
  { name: 'Do nothing for 5 min', category: 'Mindfulness' },
  { name: 'Box breathing', category: 'Mindfulness' },
  { name: 'Body scan', category: 'Mindfulness' },
  { name: 'Unplug from screens', category: 'Mindfulness' },

  // Productivity
  { name: 'Deep work session', category: 'Productivity' },
  { name: 'Plan tomorrow', category: 'Productivity' },
  { name: 'Review OKRs', category: 'Productivity' },
  { name: 'Complete MIT (Most Important Task)', category: 'Productivity' },
  { name: 'Clear inbox to zero', category: 'Productivity' },
  { name: 'No social media during work', category: 'Productivity' },
  { name: 'Read for 30 min', category: 'Productivity' },
  { name: 'Pomodoro 4+ sessions', category: 'Productivity' },
  { name: 'Update tracker log', category: 'Productivity' },
  { name: 'Weekly review', category: 'Productivity' },
  { name: 'Declutter workspace', category: 'Productivity' },
  { name: 'Time block calendar', category: 'Productivity' },

  // Social
  { name: 'Call a friend', category: 'Social' },
  { name: 'Message a family member', category: 'Social' },
  { name: 'Make plans with someone', category: 'Social' },
  { name: 'Compliment someone', category: 'Social' },
  { name: 'Attend a social event', category: 'Social' },
  { name: 'Reply to messages', category: 'Social' },
  { name: 'Ask someone how they are', category: 'Social' },
  { name: 'Join a group call', category: 'Social' },

  // Finance
  { name: 'Track expenses', category: 'Finance' },
  { name: 'Review budget', category: 'Finance' },
  { name: 'No unnecessary spending', category: 'Finance' },
  { name: 'Check investments', category: 'Finance' },
  { name: 'Update savings goal', category: 'Finance' },
  { name: 'Review subscriptions', category: 'Finance' },
  { name: 'Pay bills', category: 'Finance' },
  { name: 'Check credit score', category: 'Finance' },

  // Learning
  { name: 'Read a book', category: 'Learning' },
  { name: 'Study a language', category: 'Learning' },
  { name: 'Watch a documentary', category: 'Learning' },
  { name: 'Listen to a podcast', category: 'Learning' },
  { name: 'Take an online course', category: 'Learning' },
  { name: 'Write down one thing learned', category: 'Learning' },
  { name: 'Practice a skill', category: 'Learning' },
  { name: 'Read an article', category: 'Learning' },

  // Environment
  { name: 'Make your bed', category: 'Environment' },
  { name: 'Tidy up for 10 min', category: 'Environment' },
  { name: 'Do laundry', category: 'Environment' },
  { name: 'Wash dishes immediately', category: 'Environment' },
  { name: 'Take out trash', category: 'Environment' },
  { name: 'Water plants', category: 'Environment' },
];

export function searchHabits(query: string): HabitEntry[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return HABIT_LIBRARY.filter(
    h => h.name.toLowerCase().includes(q) || h.category.toLowerCase().includes(q)
  ).slice(0, 8);
}

export function searchHabitsByCategory(category: string): HabitEntry[] {
  if (!category.trim()) return [];
  const c = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
  return HABIT_LIBRARY.filter(h => h.category === c);
}
