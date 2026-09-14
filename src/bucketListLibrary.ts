export interface BucketListEntry {
  name: string;
  category: string;
}

export const BUCKET_LIST_LIBRARY: BucketListEntry[] = [
  // Travel
  { name: 'Visit Japan', category: 'Travel' },
  { name: 'See the Northern Lights', category: 'Travel' },
  { name: 'Road trip across a country', category: 'Travel' },
  { name: 'Visit all 7 continents', category: 'Travel' },
  { name: 'Stay in an overwater bungalow', category: 'Travel' },
  { name: 'Backpack through Southeast Asia', category: 'Travel' },
  { name: 'Visit the Amazon rainforest', category: 'Travel' },
  { name: 'See the Pyramids of Giza', category: 'Travel' },
  { name: 'Walk the Camino de Santiago', category: 'Travel' },
  { name: 'Visit Easter Island', category: 'Travel' },
  { name: 'Live abroad for a year', category: 'Travel' },
  { name: 'Sleep under the stars in the desert', category: 'Travel' },
  { name: 'Take a transcontinental train ride', category: 'Travel' },
  { name: 'Visit every national park in my country', category: 'Travel' },

  // Physical
  { name: 'Run a marathon', category: 'Physical' },
  { name: 'Run a half-marathon', category: 'Physical' },
  { name: 'Do a triathlon', category: 'Physical' },
  { name: 'Climb a mountain', category: 'Physical' },
  { name: 'Complete a Spartan Race', category: 'Physical' },
  { name: 'Learn to surf', category: 'Physical' },
  { name: 'Learn to scuba dive', category: 'Physical' },
  { name: 'Go skydiving', category: 'Physical' },
  { name: 'Go bungee jumping', category: 'Physical' },
  { name: 'Do 100 consecutive push-ups', category: 'Physical' },
  { name: 'Hold a 5-minute plank', category: 'Physical' },
  { name: 'Do a muscle-up', category: 'Physical' },
  { name: 'Achieve a 2x bodyweight deadlift', category: 'Physical' },
  { name: 'Run a 5K in under 20 minutes', category: 'Physical' },
  { name: 'Complete a 30-day yoga challenge', category: 'Physical' },
  { name: 'Swim 1km continuously', category: 'Physical' },

  // Skill
  { name: 'Learn a musical instrument', category: 'Skill' },
  { name: 'Learn to speak a new language', category: 'Skill' },
  { name: 'Learn to cook 10 signature dishes', category: 'Skill' },
  { name: 'Learn photography', category: 'Skill' },
  { name: 'Learn to code', category: 'Skill' },
  { name: 'Learn to dance (salsa, tango)', category: 'Skill' },
  { name: 'Learn to paint / draw', category: 'Skill' },
  { name: 'Learn to play chess well', category: 'Skill' },
  { name: 'Get a professional certification', category: 'Skill' },
  { name: 'Master the art of sourdough', category: 'Skill' },
  { name: 'Learn to bartend / mix cocktails', category: 'Skill' },

  // Life Experience
  { name: 'Write a book', category: 'Life Experience' },
  { name: 'Start a business', category: 'Life Experience' },
  { name: 'Speak at a conference', category: 'Life Experience' },
  { name: 'Perform on stage', category: 'Life Experience' },
  { name: 'Volunteer abroad', category: 'Life Experience' },
  { name: 'Mentor someone', category: 'Life Experience' },
  { name: 'Plant a tree', category: 'Life Experience' },
  { name: 'Attend a silent retreat', category: 'Life Experience' },
  { name: 'Read 100 books in a year', category: 'Life Experience' },
  { name: 'Complete a digital detox week', category: 'Life Experience' },
  { name: 'Keep a daily journal for a full year', category: 'Life Experience' },
  { name: 'Go a month without social media', category: 'Life Experience' },
  { name: 'Buy a home', category: 'Life Experience' },
  { name: 'Achieve financial independence', category: 'Life Experience' },

  // Creative
  { name: 'Record a song', category: 'Creative' },
  { name: 'Create a short film', category: 'Creative' },
  { name: 'Build a piece of furniture', category: 'Creative' },
  { name: 'Design and print a custom T-shirt', category: 'Creative' },
  { name: 'Start a podcast', category: 'Creative' },
  { name: 'Publish a blog with 50+ posts', category: 'Creative' },
  { name: 'Create a photo book', category: 'Creative' },
  { name: 'Grow a vegetable garden', category: 'Creative' },
  { name: 'Make a time capsule', category: 'Creative' },
];

export function searchBucketList(query: string): BucketListEntry[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return BUCKET_LIST_LIBRARY.filter(
    b => b.name.toLowerCase().includes(q) || b.category.toLowerCase().includes(q)
  ).slice(0, 8);
}

export function searchBucketListByCategory(category: string): BucketListEntry[] {
  if (!category.trim()) return [];
  const c = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
  return BUCKET_LIST_LIBRARY.filter(b => b.category === c);
}
