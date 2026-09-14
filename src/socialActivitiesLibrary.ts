export interface SocialActivityEntry {
  name: string;
  vibe: string;
}

export const SOCIAL_ACTIVITY_LIBRARY: SocialActivityEntry[] = [
  // Casual
  { name: 'Coffee / Tea', vibe: 'Casual' },
  { name: 'Walk in the park', vibe: 'Casual' },
  { name: 'Brunch', vibe: 'Casual' },
  { name: 'Lunch', vibe: 'Casual' },
  { name: 'Dinner', vibe: 'Casual' },
  { name: 'Drinks at a bar', vibe: 'Casual' },
  { name: 'Picnic', vibe: 'Casual' },
  { name: 'Board games', vibe: 'Casual' },
  { name: 'Video games', vibe: 'Casual' },
  { name: 'Movie night', vibe: 'Casual' },
  { name: 'Binge-watch a series', vibe: 'Casual' },
  { name: 'Study / work together', vibe: 'Casual' },
  { name: 'Cook together', vibe: 'Casual' },
  { name: 'Bake something', vibe: 'Casual' },
  { name: 'Visit a farmers market', vibe: 'Casual' },

  // Active
  { name: 'Hike', vibe: 'Active' },
  { name: 'Gym session', vibe: 'Active' },
  { name: 'Rock climbing', vibe: 'Active' },
  { name: 'Bike ride', vibe: 'Active' },
  { name: 'Run together', vibe: 'Active' },
  { name: 'Tennis / Padel', vibe: 'Active' },
  { name: 'Basketball', vibe: 'Active' },
  { name: 'Football / Soccer', vibe: 'Active' },
  { name: 'Swim', vibe: 'Active' },
  { name: 'Yoga class', vibe: 'Active' },
  { name: 'Dance class', vibe: 'Active' },
  { name: 'Bowling', vibe: 'Active' },
  { name: 'Mini golf', vibe: 'Active' },
  { name: 'Go-karting', vibe: 'Active' },

  // Cultural
  { name: 'Museum visit', vibe: 'Cultural' },
  { name: 'Art gallery', vibe: 'Cultural' },
  { name: 'Concert', vibe: 'Cultural' },
  { name: 'Live music', vibe: 'Cultural' },
  { name: 'Theater / Play', vibe: 'Cultural' },
  { name: 'Cinema', vibe: 'Cultural' },
  { name: 'Comedy show', vibe: 'Cultural' },
  { name: 'Bookstore / Library', vibe: 'Cultural' },
  { name: 'Cultural festival', vibe: 'Cultural' },
  { name: 'Karaoke', vibe: 'Cultural' },
  { name: 'Escape room', vibe: 'Cultural' },

  // Food & Drink
  { name: 'Wine tasting', vibe: 'Food & Drink' },
  { name: 'Cocktail night', vibe: 'Food & Drink' },
  { name: 'Food market', vibe: 'Food & Drink' },
  { name: 'Sushi night', vibe: 'Food & Drink' },
  { name: 'BBQ / Grill', vibe: 'Food & Drink' },
  { name: 'Fondue night', vibe: 'Food & Drink' },
  { name: 'Potluck dinner', vibe: 'Food & Drink' },
  { name: 'Brewery tour', vibe: 'Food & Drink' },

  // Adventure
  { name: 'Road trip', vibe: 'Adventure' },
  { name: 'Camping', vibe: 'Adventure' },
  { name: 'Day trip to a new city', vibe: 'Adventure' },
  { name: 'Beach day', vibe: 'Adventure' },
  { name: 'Kayaking / Canoeing', vibe: 'Adventure' },
  { name: 'Skiing / Snowboard', vibe: 'Adventure' },
  { name: 'Festival', vibe: 'Adventure' },
  { name: 'Amusement park', vibe: 'Adventure' },
  { name: 'Zoo / Aquarium', vibe: 'Adventure' },
  { name: 'Stargazing', vibe: 'Adventure' },
];

export function searchSocialActivities(query: string): SocialActivityEntry[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return SOCIAL_ACTIVITY_LIBRARY.filter(
    a => a.name.toLowerCase().includes(q) || a.vibe.toLowerCase().includes(q)
  ).slice(0, 8);
}

export function searchActivitiesByVibe(vibe: string): SocialActivityEntry[] {
  if (!vibe.trim()) return [];
  const v = vibe.charAt(0).toUpperCase() + vibe.slice(1).toLowerCase();
  return SOCIAL_ACTIVITY_LIBRARY.filter(a => a.vibe === v);
}
