export interface LanguageEntry {
  name: string;
  family: string;
  speakers: string;
}

export const LANGUAGE_LIBRARY: LanguageEntry[] = [
  // Indo-European — Germanic
  { name: 'English', family: 'Germanic', speakers: '1.5B' },
  { name: 'German', family: 'Germanic', speakers: '130M' },
  { name: 'Dutch', family: 'Germanic', speakers: '30M' },
  { name: 'Swedish', family: 'Germanic', speakers: '13M' },
  { name: 'Danish', family: 'Germanic', speakers: '6M' },
  { name: 'Norwegian', family: 'Germanic', speakers: '5M' },
  { name: 'Icelandic', family: 'Germanic', speakers: '350K' },
  { name: 'Afrikaans', family: 'Germanic', speakers: '17M' },

  // Indo-European — Romance
  { name: 'Spanish', family: 'Romance', speakers: '600M' },
  { name: 'French', family: 'Romance', speakers: '320M' },
  { name: 'Portuguese', family: 'Romance', speakers: '260M' },
  { name: 'Italian', family: 'Romance', speakers: '68M' },
  { name: 'Romanian', family: 'Romance', speakers: '25M' },
  { name: 'Catalan', family: 'Romance', speakers: '10M' },
  { name: 'Latin', family: 'Romance', speakers: '—' },

  // Indo-European — Slavic
  { name: 'Russian', family: 'Slavic', speakers: '260M' },
  { name: 'Ukrainian', family: 'Slavic', speakers: '45M' },
  { name: 'Polish', family: 'Slavic', speakers: '45M' },
  { name: 'Czech', family: 'Slavic', speakers: '12M' },
  { name: 'Serbian', family: 'Slavic', speakers: '12M' },
  { name: 'Bulgarian', family: 'Slavic', speakers: '8M' },
  { name: 'Croatian', family: 'Slavic', speakers: '7M' },
  { name: 'Slovak', family: 'Slavic', speakers: '5M' },
  { name: 'Slovenian', family: 'Slavic', speakers: '2.5M' },

  // Indo-European — Indo-Aryan
  { name: 'Hindi', family: 'Indo-Aryan', speakers: '600M' },
  { name: 'Urdu', family: 'Indo-Aryan', speakers: '170M' },
  { name: 'Bengali', family: 'Indo-Aryan', speakers: '270M' },
  { name: 'Punjabi', family: 'Indo-Aryan', speakers: '130M' },
  { name: 'Marathi', family: 'Indo-Aryan', speakers: '83M' },
  { name: 'Gujarati', family: 'Indo-Aryan', speakers: '55M' },
  { name: 'Nepali', family: 'Indo-Aryan', speakers: '30M' },

  // Indo-European — Iranian
  { name: 'Persian (Farsi)', family: 'Iranian', speakers: '110M' },
  { name: 'Pashto', family: 'Iranian', speakers: '50M' },
  { name: 'Kurdish', family: 'Iranian', speakers: '30M' },

  // Sino-Tibetan
  { name: 'Mandarin Chinese', family: 'Sino-Tibetan', speakers: '1.1B' },
  { name: 'Cantonese', family: 'Sino-Tibetan', speakers: '85M' },
  { name: 'Wu (Shanghainese)', family: 'Sino-Tibetan', speakers: '80M' },
  { name: 'Hokkien', family: 'Sino-Tibetan', speakers: '50M' },
  { name: 'Hakka', family: 'Sino-Tibetan', speakers: '30M' },
  { name: 'Tibetan', family: 'Sino-Tibetan', speakers: '6M' },

  // Afro-Asiatic
  { name: 'Arabic', family: 'Afro-Asiatic', speakers: '420M' },
  { name: 'Hebrew', family: 'Afro-Asiatic', speakers: '9M' },
  { name: 'Amharic', family: 'Afro-Asiatic', speakers: '57M' },
  { name: 'Somali', family: 'Afro-Asiatic', speakers: '20M' },
  { name: 'Hausa', family: 'Afro-Asiatic', speakers: '60M' },

  // Dravidian
  { name: 'Tamil', family: 'Dravidian', speakers: '85M' },
  { name: 'Telugu', family: 'Dravidian', speakers: '95M' },
  { name: 'Kannada', family: 'Dravidian', speakers: '60M' },
  { name: 'Malayalam', family: 'Dravidian', speakers: '38M' },

  // Austronesian
  { name: 'Indonesian (Bahasa)', family: 'Austronesian', speakers: '270M' },
  { name: 'Malay', family: 'Austronesian', speakers: '30M' },
  { name: 'Tagalog (Filipino)', family: 'Austronesian', speakers: '80M' },
  { name: 'Vietnamese', family: 'Austronesian', speakers: '85M' },
  { name: 'Thai', family: 'Austronesian', speakers: '60M' },
  { name: 'Lao', family: 'Austronesian', speakers: '7M' },
  { name: 'Khmer', family: 'Austronesian', speakers: '16M' },
  { name: 'Burmese', family: 'Austronesian', speakers: '40M' },

  // Turkic
  { name: 'Turkish', family: 'Turkic', speakers: '90M' },
  { name: 'Azerbaijani', family: 'Turkic', speakers: '50M' },
  { name: 'Uzbek', family: 'Turkic', speakers: '35M' },
  { name: 'Kazakh', family: 'Turkic', speakers: '18M' },

  // Uralic
  { name: 'Finnish', family: 'Uralic', speakers: '5.5M' },
  { name: 'Estonian', family: 'Uralic', speakers: '1.3M' },
  { name: 'Hungarian', family: 'Uralic', speakers: '13M' },

  // East Asian (isolates)
  { name: 'Japanese', family: 'Japonic', speakers: '125M' },
  { name: 'Korean', family: 'Koreanic', speakers: '80M' },

  // Constructed / Sign
  { name: 'Esperanto', family: 'Constructed', speakers: '2M' },
  { name: 'American Sign Language (ASL)', family: 'Sign', speakers: '500K' },
  { name: 'British Sign Language (BSL)', family: 'Sign', speakers: '150K' },
];

export function searchLanguages(query: string): LanguageEntry[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return LANGUAGE_LIBRARY.filter(
    l => l.name.toLowerCase().includes(q) || l.family.toLowerCase().includes(q)
  ).slice(0, 8);
}

export function searchLanguagesByFamily(family: string): LanguageEntry[] {
  if (!family.trim()) return [];
  const f = family.charAt(0).toUpperCase() + family.slice(1).toLowerCase();
  return LANGUAGE_LIBRARY.filter(l => l.family === f);
}
