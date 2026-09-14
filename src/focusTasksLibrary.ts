export interface FocusTaskEntry {
  name: string;
  category: string;
  suggestedMinutes?: number;
}

export const FOCUS_TASK_LIBRARY: FocusTaskEntry[] = [
  // Writing & Content
  { name: 'Write a chapter', category: 'Writing', suggestedMinutes: 60 },
  { name: 'Draft an article', category: 'Writing', suggestedMinutes: 45 },
  { name: 'Edit a draft', category: 'Writing', suggestedMinutes: 30 },
  { name: 'Write a report', category: 'Writing', suggestedMinutes: 90 },
  { name: 'Write email responses', category: 'Writing', suggestedMinutes: 25 },
  { name: 'Blog post draft', category: 'Writing', suggestedMinutes: 60 },
  { name: 'Scriptwriting', category: 'Writing', suggestedMinutes: 60 },
  { name: 'Journal entry', category: 'Writing', suggestedMinutes: 20 },
  { name: 'Documentation writing', category: 'Writing', suggestedMinutes: 45 },

  // Coding & Tech
  { name: 'Build a feature', category: 'Coding', suggestedMinutes: 60 },
  { name: 'Refactor a module', category: 'Coding', suggestedMinutes: 45 },
  { name: 'Fix bugs', category: 'Coding', suggestedMinutes: 30 },
  { name: 'Code review', category: 'Coding', suggestedMinutes: 25 },
  { name: 'Write unit tests', category: 'Coding', suggestedMinutes: 30 },
  { name: 'Set up CI/CD', category: 'Coding', suggestedMinutes: 45 },
  { name: 'Database optimization', category: 'Coding', suggestedMinutes: 60 },
  { name: 'API integration', category: 'Coding', suggestedMinutes: 60 },
  { name: 'Security audit', category: 'Coding', suggestedMinutes: 45 },

  // Creative & Design
  { name: 'UI/UX design', category: 'Creative', suggestedMinutes: 60 },
  { name: 'Storyboard a scene', category: 'Creative', suggestedMinutes: 45 },
  { name: 'Photo editing', category: 'Creative', suggestedMinutes: 30 },
  { name: 'Video editing', category: 'Creative', suggestedMinutes: 60 },
  { name: 'Illustration practice', category: 'Creative', suggestedMinutes: 45 },
  { name: 'Brainstorm ideas', category: 'Creative', suggestedMinutes: 25 },
  { name: 'Mood board creation', category: 'Creative', suggestedMinutes: 30 },

  // Learning & Research
  { name: 'Study a course module', category: 'Learning', suggestedMinutes: 45 },
  { name: 'Read a book chapter', category: 'Learning', suggestedMinutes: 30 },
  { name: 'Research a topic', category: 'Learning', suggestedMinutes: 60 },
  { name: 'Take notes on a paper', category: 'Learning', suggestedMinutes: 45 },
  { name: 'Practice a skill', category: 'Learning', suggestedMinutes: 30 },
  { name: 'Flashcard review', category: 'Learning', suggestedMinutes: 20 },
  { name: 'Watch a tutorial', category: 'Learning', suggestedMinutes: 30 },

  // Planning & Strategy
  { name: 'Plan the week ahead', category: 'Planning', suggestedMinutes: 30 },
  { name: 'Review OKRs', category: 'Planning', suggestedMinutes: 25 },
  { name: 'Set quarterly goals', category: 'Planning', suggestedMinutes: 60 },
  { name: 'Budget review', category: 'Planning', suggestedMinutes: 30 },
  { name: 'Project roadmap', category: 'Planning', suggestedMinutes: 45 },
  { name: 'Sprint planning', category: 'Planning', suggestedMinutes: 60 },
  { name: 'Retrospective', category: 'Planning', suggestedMinutes: 30 },

  // Admin & Organization
  { name: 'Inbox zero', category: 'Admin', suggestedMinutes: 25 },
  { name: 'Organize files', category: 'Admin', suggestedMinutes: 30 },
  { name: 'Update tracker log', category: 'Admin', suggestedMinutes: 15 },
  { name: 'Tidy workspace', category: 'Admin', suggestedMinutes: 20 },
  { name: 'Update calendar', category: 'Admin', suggestedMinutes: 15 },
];

export function searchFocusTasks(query: string): FocusTaskEntry[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return FOCUS_TASK_LIBRARY.filter(
    t => t.name.toLowerCase().includes(q) || t.category.toLowerCase().includes(q)
  ).slice(0, 8);
}

export function searchFocusTasksByCategory(category: string): FocusTaskEntry[] {
  if (!category.trim()) return [];
  const c = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
  return FOCUS_TASK_LIBRARY.filter(t => t.category === c);
}
