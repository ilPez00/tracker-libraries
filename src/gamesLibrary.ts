export interface GameEntry {
  name: string;
  genre: string;
  platform?: string;
}

export const GAME_LIBRARY: GameEntry[] = [
  // RPGs
  { name: 'Elden Ring', genre: 'RPG', platform: 'Multi' },
  { name: 'Dark Souls III', genre: 'RPG', platform: 'Multi' },
  { name: 'Dark Souls', genre: 'RPG', platform: 'Multi' },
  { name: 'Sekiro: Shadows Die Twice', genre: 'RPG', platform: 'Multi' },
  { name: 'Bloodborne', genre: 'RPG', platform: 'PlayStation' },
  { name: 'Demon\'s Souls', genre: 'RPG', platform: 'PlayStation' },
  { name: 'Baldur\'s Gate 3', genre: 'RPG', platform: 'Multi' },
  { name: 'The Witcher 3', genre: 'RPG', platform: 'Multi' },
  { name: 'Cyberpunk 2077', genre: 'RPG', platform: 'Multi' },
  { name: 'Skyrim', genre: 'RPG', platform: 'Multi' },
  { name: 'Fallout 4', genre: 'RPG', platform: 'Multi' },
  { name: 'Final Fantasy VII Remake', genre: 'RPG', platform: 'Multi' },
  { name: 'Persona 5 Royal', genre: 'RPG', platform: 'Multi' },
  { name: 'Disco Elysium', genre: 'RPG', platform: 'Multi' },
  { name: 'Kingdom Come: Deliverance', genre: 'RPG', platform: 'Multi' },
  { name: 'Octopath Traveler', genre: 'RPG', platform: 'Multi' },
  { name: 'Chrono Trigger', genre: 'RPG', platform: 'Multi' },
  { name: 'Zelda: Tears of the Kingdom', genre: 'RPG', platform: 'Nintendo Switch' },
  { name: 'Zelda: Breath of the Wild', genre: 'RPG', platform: 'Nintendo Switch' },

  // Action / Adventure
  { name: 'God of War (2018)', genre: 'Action', platform: 'Multi' },
  { name: 'God of War Ragnarök', genre: 'Action', platform: 'PlayStation' },
  { name: 'Spider-Man (2018)', genre: 'Action', platform: 'Multi' },
  { name: 'Spider-Man 2', genre: 'Action', platform: 'PlayStation' },
  { name: 'Horizon Zero Dawn', genre: 'Action', platform: 'Multi' },
  { name: 'Horizon Forbidden West', genre: 'Action', platform: 'Multi' },
  { name: 'Ghost of Tsushima', genre: 'Action', platform: 'Multi' },
  { name: 'Red Dead Redemption 2', genre: 'Action', platform: 'Multi' },
  { name: 'Grand Theft Auto V', genre: 'Action', platform: 'Multi' },
  { name: 'The Last of Us Part I', genre: 'Action', platform: 'Multi' },
  { name: 'The Last of Us Part II', genre: 'Action', platform: 'PlayStation' },
  { name: 'Uncharted 4', genre: 'Action', platform: 'Multi' },
  { name: 'Assassin\'s Creed Valhalla', genre: 'Action', platform: 'Multi' },
  { name: 'Assassin\'s Creed Odyssey', genre: 'Action', platform: 'Multi' },
  { name: 'Metal Gear Solid V', genre: 'Action', platform: 'Multi' },
  { name: 'Resident Evil 4 Remake', genre: 'Action', platform: 'Multi' },
  { name: 'Resident Evil Village', genre: 'Action', platform: 'Multi' },
  { name: 'Star Wars Jedi: Survivor', genre: 'Action', platform: 'Multi' },

  // Shooters
  { name: 'Valorant', genre: 'Shooter', platform: 'PC' },
  { name: 'Counter-Strike 2', genre: 'Shooter', platform: 'PC' },
  { name: 'Call of Duty: Modern Warfare', genre: 'Shooter', platform: 'Multi' },
  { name: 'Call of Duty: Warzone', genre: 'Shooter', platform: 'Multi' },
  { name: 'Overwatch 2', genre: 'Shooter', platform: 'Multi' },
  { name: 'Apex Legends', genre: 'Shooter', platform: 'Multi' },
  { name: 'Fortnite', genre: 'Shooter', platform: 'Multi' },
  { name: 'Rainbow Six Siege', genre: 'Shooter', platform: 'Multi' },
  { name: 'Destiny 2', genre: 'Shooter', platform: 'Multi' },
  { name: 'DOOM Eternal', genre: 'Shooter', platform: 'Multi' },
  { name: 'Halo Infinite', genre: 'Shooter', platform: 'Multi' },
  { name: 'Battlefield 2042', genre: 'Shooter', platform: 'Multi' },
  { name: 'Team Fortress 2', genre: 'Shooter', platform: 'PC' },
  { name: 'Escape from Tarkov', genre: 'Shooter', platform: 'PC' },

  // MOBA / Strategy
  { name: 'League of Legends', genre: 'MOBA', platform: 'PC' },
  { name: 'Dota 2', genre: 'MOBA', platform: 'PC' },
  { name: 'Smite', genre: 'MOBA', platform: 'Multi' },
  { name: 'Civilization VI', genre: 'Strategy', platform: 'Multi' },
  { name: 'Age of Empires IV', genre: 'Strategy', platform: 'PC' },
  { name: 'StarCraft II', genre: 'Strategy', platform: 'PC' },
  { name: 'Total War: Warhammer III', genre: 'Strategy', platform: 'PC' },
  { name: 'Crusader Kings III', genre: 'Strategy', platform: 'PC' },
  { name: 'Cities: Skylines', genre: 'Strategy', platform: 'Multi' },
  { name: 'Factorio', genre: 'Strategy', platform: 'Multi' },
  { name: 'Satisfactory', genre: 'Strategy', platform: 'PC' },

  // Fighting
  { name: 'Street Fighter 6', genre: 'Fighting', platform: 'Multi' },
  { name: 'Tekken 8', genre: 'Fighting', platform: 'Multi' },
  { name: 'Mortal Kombat 1', genre: 'Fighting', platform: 'Multi' },
  { name: 'Super Smash Bros. Ultimate', genre: 'Fighting', platform: 'Nintendo Switch' },
  { name: 'Guilty Gear Strive', genre: 'Fighting', platform: 'Multi' },

  // Sports / Racing
  { name: 'EA FC 25 (FIFA)', genre: 'Sports', platform: 'Multi' },
  { name: 'NBA 2K25', genre: 'Sports', platform: 'Multi' },
  { name: 'Gran Turismo 7', genre: 'Racing', platform: 'PlayStation' },
  { name: 'Forza Horizon 5', genre: 'Racing', platform: 'Multi' },
  { name: 'Rocket League', genre: 'Sports', platform: 'Multi' },
  { name: 'Tony Hawk\'s Pro Skater 1+2', genre: 'Sports', platform: 'Multi' },

  // Indie
  { name: 'Hades', genre: 'Indie', platform: 'Multi' },
  { name: 'Hollow Knight', genre: 'Indie', platform: 'Multi' },
  { name: 'Celeste', genre: 'Indie', platform: 'Multi' },
  { name: 'Stardew Valley', genre: 'Indie', platform: 'Multi' },
  { name: 'Dead Cells', genre: 'Indie', platform: 'Multi' },
  { name: 'Slay the Spire', genre: 'Indie', platform: 'Multi' },
  { name: 'Stray', genre: 'Indie', platform: 'Multi' },
  { name: 'Cuphead', genre: 'Indie', platform: 'Multi' },
  { name: 'Inside', genre: 'Indie', platform: 'Multi' },
  { name: 'Firewatch', genre: 'Indie', platform: 'Multi' },
  { name: 'Return of the Obra Dinn', genre: 'Indie', platform: 'Multi' },
  { name: 'Outer Wilds', genre: 'Indie', platform: 'Multi' },
  { name: 'Baldur\'s Gate 3', genre: 'Indie', platform: 'Multi' },

  // MMO
  { name: 'World of Warcraft', genre: 'MMO', platform: 'PC' },
  { name: 'Final Fantasy XIV', genre: 'MMO', platform: 'Multi' },
  { name: 'Old School RuneScape', genre: 'MMO', platform: 'Multi' },
  { name: 'Guild Wars 2', genre: 'MMO', platform: 'PC' },
  { name: 'Lost Ark', genre: 'MMO', platform: 'PC' },
  { name: 'New World', genre: 'MMO', platform: 'PC' },
  { name: 'Albion Online', genre: 'MMO', platform: 'Multi' },

  // Survival / Crafting
  { name: 'Minecraft', genre: 'Survival', platform: 'Multi' },
  { name: 'Terraria', genre: 'Survival', platform: 'Multi' },
  { name: 'Valheim', genre: 'Survival', platform: 'Multi' },
  { name: 'Rust', genre: 'Survival', platform: 'PC' },
  { name: 'Ark: Survival Evolved', genre: 'Survival', platform: 'Multi' },
  { name: 'The Forest', genre: 'Survival', platform: 'Multi' },
  { name: 'Subnautica', genre: 'Survival', platform: 'Multi' },
  { name: 'Palworld', genre: 'Survival', platform: 'Multi' },

  // Horror
  { name: 'Amnesia: The Bunker', genre: 'Horror', platform: 'Multi' },
  { name: 'Outlast', genre: 'Horror', platform: 'Multi' },
  { name: 'Outlast II', genre: 'Horror', platform: 'Multi' },
  { name: 'Alien: Isolation', genre: 'Horror', platform: 'Multi' },
  { name: 'Silent Hill 2 Remake', genre: 'Horror', platform: 'Multi' },
  { name: 'Dead Space Remake', genre: 'Horror', platform: 'Multi' },
];

export function searchGames(query: string): GameEntry[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return GAME_LIBRARY.filter(
    g => g.name.toLowerCase().includes(q) || g.genre.toLowerCase().includes(q)
  ).slice(0, 8);
}

export function searchGamesByGenre(genre: string): GameEntry[] {
  if (!genre.trim()) return [];
  const g = genre.charAt(0).toUpperCase() + genre.slice(1).toLowerCase();
  return GAME_LIBRARY.filter(game => game.genre === g);
}
