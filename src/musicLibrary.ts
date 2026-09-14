export interface InstrumentEntry { name: string; family: string }

export const INSTRUMENT_LIBRARY: InstrumentEntry[] = [
  // Strings
  { name: 'Guitar (Acoustic)',  family: 'Strings' }, { name: 'Guitar (Electric)', family: 'Strings' },
  { name: 'Guitar (Classical)', family: 'Strings' }, { name: 'Bass Guitar',       family: 'Strings' },
  { name: 'Double Bass',        family: 'Strings' }, { name: 'Violin',            family: 'Strings' },
  { name: 'Viola',              family: 'Strings' }, { name: 'Cello',             family: 'Strings' },
  { name: 'Harp',               family: 'Strings' }, { name: 'Ukulele',           family: 'Strings' },
  { name: 'Mandolin',           family: 'Strings' }, { name: 'Banjo',             family: 'Strings' },
  // Keys
  { name: 'Piano',              family: 'Keys'    }, { name: 'Keyboard',          family: 'Keys'    },
  { name: 'Synthesizer',        family: 'Keys'    }, { name: 'Organ',             family: 'Keys'    },
  { name: 'Harpsichord',        family: 'Keys'    }, { name: 'Accordion',         family: 'Keys'    },
  // Percussion
  { name: 'Drums',              family: 'Percussion' }, { name: 'Percussion',     family: 'Percussion' },
  { name: 'Snare Drum',         family: 'Percussion' }, { name: 'Timpani',        family: 'Percussion' },
  { name: 'Marimba / Xylophone',family: 'Percussion' }, { name: 'Cajón',          family: 'Percussion' },
  { name: 'Handpan',            family: 'Percussion' }, { name: 'Djembe',         family: 'Percussion' },
  { name: 'Tabla',              family: 'Percussion' }, { name: 'Congas / Bongos',family: 'Percussion' },
  // Wind
  { name: 'Flute',              family: 'Wind'    }, { name: 'Recorder',           family: 'Wind'    },
  { name: 'Oboe',               family: 'Wind'    }, { name: 'Bassoon',            family: 'Wind'    },
  { name: 'Clarinet',           family: 'Wind'    }, { name: 'Saxophone',          family: 'Wind'    },
  { name: 'Harmonica',          family: 'Wind'    }, { name: 'Bagpipes',           family: 'Wind'    },
  // Brass
  { name: 'Trumpet',            family: 'Brass'   }, { name: 'Trombone',           family: 'Brass'   },
  { name: 'French Horn',        family: 'Brass'   }, { name: 'Tuba',               family: 'Brass'   },
  { name: 'Euphonium',          family: 'Brass'   }, { name: 'Cornet',             family: 'Brass'   },
  // Voice
  { name: 'Voice / Singing',    family: 'Voice'   }, { name: 'Choir Singing',      family: 'Voice'   },
  { name: 'Beatbox / Rap',      family: 'Voice'   }, { name: 'Throat Singing',     family: 'Voice'   },
  // Electronic & World
  { name: 'DJ / Turntablism',   family: 'Electronic' }, { name: 'Music Production (DAW)', family: 'Electronic' },
  { name: 'Modular Synthesis',  family: 'Electronic' }, { name: 'Sitar',           family: 'World'   },
  { name: 'Erhu',               family: 'World'   }, { name: 'Kalimba',            family: 'World'   },
  { name: 'Didgeridoo',         family: 'World'   }, { name: 'Ocarina',            family: 'World'   },
];

export function searchInstruments(query: string): InstrumentEntry[] {
  if (!query.trim()) return INSTRUMENT_LIBRARY.slice(0, 6);
  const q = query.toLowerCase();
  return INSTRUMENT_LIBRARY.filter(i => i.name.toLowerCase().includes(q) || i.family.toLowerCase().includes(q)).slice(0, 8);
}
