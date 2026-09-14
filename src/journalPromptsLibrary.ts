export interface JournalPrompt {
  name: string;
  category: string;
}

export const JOURNAL_PROMPTS: JournalPrompt[] = [
  // Daily Reflection
  { name: 'What went well today?', category: 'Daily Reflection' },
  { name: "What didn't go well today?", category: 'Daily Reflection' },
  { name: 'What did I learn today?', category: 'Daily Reflection' },
  { name: 'What am I proud of today?', category: 'Daily Reflection' },
  { name: 'What drained my energy today?', category: 'Daily Reflection' },
  { name: 'What gave me energy today?', category: 'Daily Reflection' },
  { name: 'What would make today a 10/10?', category: 'Daily Reflection' },
  { name: 'How did I grow today?', category: 'Daily Reflection' },
  { name: 'One thing I would do differently today', category: 'Daily Reflection' },
  { name: 'What did I procrastinate on?', category: 'Daily Reflection' },

  // Gratitude
  { name: 'Three things I am grateful for', category: 'Gratitude' },
  { name: 'Who made my day better?', category: 'Gratitude' },
  { name: 'A small joy I experienced today', category: 'Gratitude' },
  { name: 'Something I take for granted', category: 'Gratitude' },
  { name: 'A person I appreciate and why', category: 'Gratitude' },
  { name: 'Something beautiful I saw today', category: 'Gratitude' },
  { name: 'A privilege I have that others might not', category: 'Gratitude' },
  { name: 'What is my body allowing me to do?', category: 'Gratitude' },
  { name: 'A meal I enjoyed recently', category: 'Gratitude' },

  // Emotions & Mood
  { name: 'How am I feeling right now?', category: 'Emotions & Mood' },
  { name: 'What emotion dominated my day?', category: 'Emotions & Mood' },
  { name: 'What triggered a strong emotion today?', category: 'Emotions & Mood' },
  { name: 'What am I worried about?', category: 'Emotions & Mood' },
  { name: 'What am I excited about?', category: 'Emotions & Mood' },
  { name: 'What is weighing on my mind?', category: 'Emotions & Mood' },
  { name: 'When did I feel most alive today?', category: 'Emotions & Mood' },
  { name: 'When did I feel most uncomfortable?', category: 'Emotions & Mood' },
  { name: 'What is my inner critic saying?', category: 'Emotions & Mood' },
  { name: 'Is there something I need to forgive myself for?', category: 'Emotions & Mood' },

  // Goals & Ambition
  { name: 'What is one step toward my biggest goal?', category: 'Goals & Ambition' },
  { name: 'What does success look like in 5 years?', category: 'Goals & Ambition' },
  { name: 'What am I avoiding that I need to face?', category: 'Goals & Ambition' },
  { name: 'What is holding me back?', category: 'Goals & Ambition' },
  { name: "If I weren't afraid, what would I do?", category: 'Goals & Ambition' },
  { name: 'What skill do I want to develop next?', category: 'Goals & Ambition' },
  { name: 'What does my ideal day look like?', category: 'Goals & Ambition' },
  { name: 'What habits are serving me? Which are not?', category: 'Goals & Ambition' },
  { name: 'What have I been putting off?', category: 'Goals & Ambition' },
  { name: 'What would future me thank me for doing today?', category: 'Goals & Ambition' },

  // Relationships
  { name: 'Who did I connect with today?', category: 'Relationships' },
  { name: 'How did I show up for someone today?', category: 'Relationships' },
  { name: 'Is there someone I need to reach out to?', category: 'Relationships' },
  { name: "A conversation that mattered today", category: 'Relationships' },
  { name: 'How can I be a better friend/partner?', category: 'Relationships' },
  { name: 'Someone I am grateful to have in my life', category: 'Relationships' },
  { name: 'Did I listen more than I spoke today?', category: 'Relationships' },
  { name: "What's something unsaid I need to express?", category: 'Relationships' },
  { name: 'How do others describe me?', category: 'Relationships' },

  // Creativity & Ideas
  { name: 'An idea I had today', category: 'Creativity & Ideas' },
  { name: 'Something that inspired me', category: 'Creativity & Ideas' },
  { name: 'If I could create anything, what would it be?', category: 'Creativity & Ideas' },
  { name: 'What did I read, watch, or listen to?', category: 'Creativity & Ideas' },
  { name: 'A question I am sitting with', category: 'Creativity & Ideas' },
  { name: 'Something I want to learn more about', category: 'Creativity & Ideas' },
  { name: 'A perspective I changed today', category: 'Creativity & Ideas' },
  { name: 'What would I do if I had unlimited time?', category: 'Creativity & Ideas' },

  // Health & Body
  { name: 'How does my body feel today?', category: 'Health & Body' },
  { name: 'Did I move my body today?', category: 'Health & Body' },
  { name: 'How was my sleep last night?', category: 'Health & Body' },
  { name: 'What did I eat today? How did it make me feel?', category: 'Health & Body' },
  { name: 'What is one thing I can do for my health tomorrow?', category: 'Health & Body' },
  { name: 'Am I hydrated? Rested? Stressed?', category: 'Health & Body' },
  { name: 'What does my body need right now?', category: 'Health & Body' },
  { name: 'How is my posture right now?', category: 'Health & Body' },
  { name: 'A small health win today', category: 'Health & Body' },

  // Deep & Philosophical
  { name: 'What am I avoiding thinking about?', category: 'Deep & Philosophical' },
  { name: 'What do I truly value?', category: 'Deep & Philosophical' },
  { name: 'Am I living by my own values or someone else\'s?', category: 'Deep & Philosophical' },
  { name: 'What would I regret not doing?', category: 'Deep & Philosophical' },
  { name: 'What is one belief I hold that might be wrong?', category: 'Deep & Philosophical' },
  { name: 'If I died tomorrow, what would remain unsaid?', category: 'Deep & Philosophical' },
  { name: 'What is my relationship with uncertainty?', category: 'Deep & Philosophical' },
  { name: 'What kind of person am I becoming?', category: 'Deep & Philosophical' },
  { name: 'What is enough?', category: 'Deep & Philosophical' },
  { name: 'What am I searching for?', category: 'Deep & Philosophical' },
];

export function searchJournalPrompts(query: string): JournalPrompt[] {
  const q = query.toLowerCase();
  return JOURNAL_PROMPTS.filter(
    p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
  ).slice(0, 8);
}

export function getPromptCategories(): string[] {
  return [...new Set(JOURNAL_PROMPTS.map(p => p.category))];
}

export function getPromptsByCategory(category: string): JournalPrompt[] {
  return JOURNAL_PROMPTS.filter(p => p.category === category);
}
