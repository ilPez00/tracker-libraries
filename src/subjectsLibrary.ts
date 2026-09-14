export interface SubjectEntry { name: string; category: string }

export const SUBJECT_LIBRARY: SubjectEntry[] = [
  // STEM
  { name: 'Mathematics',        category: 'STEM' }, { name: 'Calculus',         category: 'STEM' },
  { name: 'Statistics',         category: 'STEM' }, { name: 'Linear Algebra',   category: 'STEM' },
  { name: 'Physics',            category: 'STEM' }, { name: 'Chemistry',        category: 'STEM' },
  { name: 'Biology',            category: 'STEM' }, { name: 'Computer Science', category: 'STEM' },
  { name: 'Data Science',       category: 'STEM' }, { name: 'Machine Learning', category: 'STEM' },
  { name: 'Deep Learning',      category: 'STEM' }, { name: 'Algorithms',       category: 'STEM' },
  // Programming
  { name: 'Python',             category: 'Programming' }, { name: 'JavaScript',  category: 'Programming' },
  { name: 'TypeScript',         category: 'Programming' }, { name: 'Rust',         category: 'Programming' },
  { name: 'Go',                 category: 'Programming' }, { name: 'Swift',        category: 'Programming' },
  { name: 'SQL',                category: 'Programming' }, { name: 'React',        category: 'Programming' },
  { name: 'Java',               category: 'Programming' }, { name: 'C++',          category: 'Programming' },
  { name: 'C#',                 category: 'Programming' }, { name: 'Kotlin',       category: 'Programming' },
  { name: 'Node.js',            category: 'Programming' }, { name: 'Angular',      category: 'Programming' },
  { name: 'Vue',                category: 'Programming' }, { name: 'GraphQL',      category: 'Programming' },
  { name: 'Docker / K8s',       category: 'Programming' }, { name: 'AWS / Cloud',  category: 'Programming' },
  // Business
  { name: 'Economics',          category: 'Business' }, { name: 'Marketing',      category: 'Business' },
  { name: 'Finance',            category: 'Business' }, { name: 'Accounting',     category: 'Business' },
  { name: 'Product Management', category: 'Business' }, { name: 'Strategy',       category: 'Business' },
  { name: 'Entrepreneurship',   category: 'Business' }, { name: 'Leadership',     category: 'Business' },
  { name: 'Negotiation',        category: 'Business' }, { name: 'Sales',          category: 'Business' },
  { name: 'Agile / Scrum',      category: 'Business' }, { name: 'Public Speaking',category: 'Business' },
  { name: 'Supply Chain',       category: 'Business' }, { name: 'Human Resources',category: 'Business' },
  // Languages
  { name: 'English',            category: 'Languages' }, { name: 'Spanish',        category: 'Languages' },
  { name: 'French',             category: 'Languages' }, { name: 'German',         category: 'Languages' },
  { name: 'Italian',            category: 'Languages' }, { name: 'Mandarin',       category: 'Languages' },
  { name: 'Japanese',           category: 'Languages' }, { name: 'Portuguese',     category: 'Languages' },
  { name: 'Arabic',             category: 'Languages' }, { name: 'Russian',        category: 'Languages' },
  { name: 'Korean',             category: 'Languages' }, { name: 'Latin',          category: 'Languages' },
  { name: 'Ancient Greek',      category: 'Languages' }, { name: 'Sign Language',  category: 'Languages' },
  // Humanities
  { name: 'Philosophy',         category: 'Humanities' }, { name: 'History',       category: 'Humanities' },
  { name: 'Psychology',         category: 'Humanities' }, { name: 'Sociology',     category: 'Humanities' },
  { name: 'Literature',         category: 'Humanities' }, { name: 'Writing',       category: 'Humanities' },
  { name: 'Linguistics',        category: 'Humanities' }, { name: 'Anthropology',  category: 'Humanities' },
  { name: 'Political Science',  category: 'Humanities' }, { name: 'Art History',   category: 'Humanities' },
  { name: 'Ethics',             category: 'Humanities' }, { name: 'Classics',      category: 'Humanities' },
  // STEM extras
  { name: 'Organic Chemistry',  category: 'STEM' }, { name: 'Genetics',          category: 'STEM' },
  { name: 'Neuroscience',       category: 'STEM' }, { name: 'Astronomy',         category: 'STEM' },
  { name: 'Robotics',           category: 'STEM' }, { name: 'Cybersecurity',     category: 'STEM' },
  { name: 'Cryptography',       category: 'STEM' }, { name: 'Computer Networks', category: 'STEM' },
  { name: 'Databases',          category: 'STEM' }, { name: 'Quantum Computing', category: 'STEM' },
  { name: 'Embedded Systems',   category: 'STEM' }, { name: 'Game Theory',       category: 'STEM' },
  // Health
  { name: 'Nutrition',          category: 'Health' }, { name: 'Anatomy',        category: 'Health' },
  { name: 'Physiology',         category: 'Health' }, { name: 'Sports Science', category: 'Health' },
  { name: 'First Aid',          category: 'Health' }, { name: 'Public Health',  category: 'Health' },
  { name: 'Sleep Science',      category: 'Health' }, { name: 'Pharmacology',   category: 'Health' },
  // Creative
  { name: 'Graphic Design',     category: 'Creative' }, { name: 'UI/UX Design',   category: 'Creative' },
  { name: 'Photography',        category: 'Creative' }, { name: 'Video Editing',  category: 'Creative' },
  { name: 'Music Theory',       category: 'Creative' }, { name: 'Drawing',        category: 'Creative' },
  { name: 'Creative Writing',   category: 'Creative' }, { name: 'Screenwriting',  category: 'Creative' },
  { name: 'Animation',          category: 'Creative' }, { name: '3D Modeling',    category: 'Creative' },
  { name: 'Sound Design',       category: 'Creative' }, { name: 'Filmmaking',     category: 'Creative' },
  // Home & Life
  { name: 'Cooking',            category: 'Home & Life' }, { name: 'Baking',       category: 'Home & Life' },
  { name: 'Personal Finance',   category: 'Home & Life' }, { name: 'Gardening',    category: 'Home & Life' },
  { name: 'Woodworking',        category: 'Home & Life' }, { name: 'Sewing',       category: 'Home & Life' },
  { name: 'Car Maintenance',    category: 'Home & Life' }, { name: 'Parenting',    category: 'Home & Life' },
];

export function searchSubjects(query: string): SubjectEntry[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return SUBJECT_LIBRARY.filter(s => s.name.toLowerCase().includes(q) || s.category.toLowerCase().includes(q)).slice(0, 8);
}
