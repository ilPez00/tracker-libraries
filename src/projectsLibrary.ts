export interface ProjectEntry {
  name: string;
  domain: string;
}

export const PROJECT_LIBRARY: ProjectEntry[] = [
  // Visual Arts
  { name: 'Oil painting series', domain: 'Visual Arts' },
  { name: 'Watercolor collection', domain: 'Visual Arts' },
  { name: 'Pottery / Ceramics set', domain: 'Visual Arts' },
  { name: 'Sculpture project', domain: 'Visual Arts' },
  { name: 'Sketchbook challenge', domain: 'Visual Arts' },
  { name: 'Calligraphy portfolio', domain: 'Visual Arts' },
  { name: 'Digital art series', domain: 'Visual Arts' },
  { name: 'Photography portfolio', domain: 'Visual Arts' },
  { name: 'Zine / Comic book', domain: 'Visual Arts' },

  // Music
  { name: 'Write a song', domain: 'Music' },
  { name: 'Learn an instrument', domain: 'Music' },
  { name: 'Record a demo EP', domain: 'Music' },
  { name: 'Compose a piece', domain: 'Music' },
  { name: 'Produce a beat', domain: 'Music' },
  { name: 'Create a playlist series', domain: 'Music' },
  { name: 'Learn music theory', domain: 'Music' },
  { name: 'Practice sight-reading', domain: 'Music' },

  // Writing
  { name: 'Write a short story', domain: 'Writing' },
  { name: 'Start a novel', domain: 'Writing' },
  { name: 'Blog with weekly posts', domain: 'Writing' },
  { name: 'Poetry collection', domain: 'Writing' },
  { name: 'Write a screenplay', domain: 'Writing' },
  { name: 'Travel journal', domain: 'Writing' },
  { name: 'Technical writing portfolio', domain: 'Writing' },
  { name: 'Write a newsletter', domain: 'Writing' },

  // Tech
  { name: 'Build a web app', domain: 'Tech' },
  { name: 'Create a mobile app', domain: 'Tech' },
  { name: 'Design a personal website', domain: 'Tech' },
  { name: 'Build a game mod', domain: 'Tech' },
  { name: 'Create a browser extension', domain: 'Tech' },
  { name: 'Contribute to open source', domain: 'Tech' },
  { name: 'Build a CLI tool', domain: 'Tech' },
  { name: 'Set up a home server', domain: 'Tech' },
  { name: 'Automate something daily', domain: 'Tech' },
  { name: 'Build a chatbot', domain: 'Tech' },

  // DIY & Crafts
  { name: 'Build a piece of furniture', domain: 'DIY & Crafts' },
  { name: 'Knit a sweater', domain: 'DIY & Crafts' },
  { name: 'Woodworking project', domain: 'DIY & Crafts' },
  { name: 'Create a terrarium', domain: 'DIY & Crafts' },
  { name: 'Build a model kit', domain: 'DIY & Crafts' },
  { name: 'Sew a garment', domain: 'DIY & Crafts' },
  { name: 'Home renovation project', domain: 'DIY & Crafts' },
  { name: 'Garden landscaping', domain: 'DIY & Crafts' },

  // Learning
  { name: 'Complete an online course', domain: 'Learning' },
  { name: 'Read a non-fiction book', domain: 'Learning' },
  { name: 'Study for a certification', domain: 'Learning' },
  { name: 'Learn a new language', domain: 'Learning' },
  { name: 'Research a topic deeply', domain: 'Learning' },
  { name: 'Write a research paper', domain: 'Learning' },
  { name: 'Attend a workshop', domain: 'Learning' },
  { name: 'Start a study group', domain: 'Learning' },
];

export function searchProjects(query: string): ProjectEntry[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return PROJECT_LIBRARY.filter(
    p => p.name.toLowerCase().includes(q) || p.domain.toLowerCase().includes(q)
  ).slice(0, 8);
}

export function searchProjectsByDomain(domain: string): ProjectEntry[] {
  if (!domain.trim()) return [];
  const d = domain.charAt(0).toUpperCase() + domain.slice(1).toLowerCase();
  return PROJECT_LIBRARY.filter(p => p.domain === d);
}
