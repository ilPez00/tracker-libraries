/**
 * cardioActivitiesLibrary — cardio exercise database with MET values (calorie
 * burn) and cadence-based step-equivalent estimates (steps per minute) so users
 * can relate any cardio session to the step tracker.
 */

export interface CardioActivityEntry {
  name: string;
  type: string;
  met?: number;
  /** Approximate cadence in steps/min for step-equivalent estimates. */
  stepsPerMinute?: number;
}

const a = (name: string, type: string, met?: number, stepsPerMinute?: number): CardioActivityEntry =>
  ({ name, type, met, stepsPerMinute });

export const CARDIO_ACTIVITY_LIBRARY: CardioActivityEntry[] = [
  // Steady State
  a('Running', 'Steady State', 9.8, 170),
  a('Running (6 km/h)', 'Steady State', 6.0, 150),
  a('Running (8 km/h)', 'Steady State', 8.3, 160),
  a('Running (10 km/h)', 'Steady State', 9.8, 170),
  a('Running (12 km/h)', 'Steady State', 11.5, 180),
  a('Running (15 km/h)', 'Steady State', 14.5, 190),
  a('Jogging', 'Steady State', 7.0, 150),
  a('Walking (brisk)', 'Steady State', 3.8, 110),
  a('Walking (moderate)', 'Steady State', 3.5, 100),
  a('Power Walking', 'Steady State', 4.5, 120),
  a('Nordic Walking', 'Steady State', 5.0, 115),
  a('Incline Walking', 'Steady State', 5.5, 105),
  a('Hiking (flat)', 'Steady State', 5.3, 110),
  a('Hiking (uphill)', 'Steady State', 7.5, 120),
  a('Stair Climbing', 'Steady State', 9.0, 140),
  a('Cycling (leisure)', 'Steady State', 4.0, 180),
  a('Cycling (moderate)', 'Steady State', 7.5, 190),
  a('Cycling (vigorous)', 'Steady State', 10.0, 200),
  a('Cycling (sprint)', 'Steady State', 14.0, 220),
  a('Recumbent Bike', 'Steady State', 5.5, 150),
  a('Stationary Bike (moderate)', 'Steady State', 7.0, 180),
  a('Spinning Class', 'Steady State', 9.5, 200),
  a('Swimming (leisure)', 'Steady State', 6.0, 100),
  a('Swimming (moderate)', 'Steady State', 8.0, 110),
  a('Swimming (laps/fast)', 'Steady State', 9.8, 120),
  a('Swimming (butterfly)', 'Steady State', 11.0, 130),
  a('Water Aerobics', 'Steady State', 5.5, 90),
  a('Rowing Machine (moderate)', 'Steady State', 7.0, 120),
  a('Rowing Machine (vigorous)', 'Steady State', 8.5, 130),
  a('Elliptical Trainer', 'Steady State', 6.5, 150),
  a('Stair Climber (steady)', 'Steady State', 9.0, 145),
  a('Jump Rope (moderate)', 'Steady State', 11.0, 160),
  a('Jump Rope (fast)', 'Steady State', 12.3, 180),
  a('Hand Cycle', 'Steady State', 5.0, 80),
  a('Skateboarding', 'Steady State', 5.5, 120),
  a('Inline Skating', 'Steady State', 7.5, 140),
  a('Roller Skating', 'Steady State', 7.0, 140),
  a('Skipping', 'Steady State', 12.0, 170),
  a('Pogo Stick', 'Steady State', 7.0, 160),

  // HIIT & Intervals
  a('HIIT (general)', 'HIIT & Intervals', 12.0, 180),
  a('Sprint Intervals', 'HIIT & Intervals', 15.0, 210),
  a('Tabata', 'HIIT & Intervals', 13.5, 190),
  a('Fartlek Run', 'HIIT & Intervals', 10.5, 175),
  a('Circuit Training (cardio)', 'HIIT & Intervals', 9.0, 160),
  a('Shuttle Runs', 'HIIT & Intervals', 11.5, 200),
  a('Burpees (cardio set)', 'HIIT & Intervals', 14.0, 90),
  a('Jumping Jacks', 'HIIT & Intervals', 8.0, 150),
  a('Mountain Climbers', 'HIIT & Intervals', 11.0, 180),
  a('High Knees', 'HIIT & Intervals', 10.0, 190),
  a('Kettlebell Cardio', 'HIIT & Intervals', 10.0, 60),
  a('Battle Ropes (cardio)', 'HIIT & Intervals', 10.5, 40),
  a('Boxercise (cardio)', 'HIIT & Intervals', 8.5, 140),
  a('Rowing Intervals', 'HIIT & Intervals', 11.0, 150),
  a('Stair Sprints', 'HIIT & Intervals', 13.0, 170),
  a('Sled Push (cardio)', 'HIIT & Intervals', 10.5, 100),

  // Classes & Sports
  a('Zumba', 'Classes & Sports', 7.0, 150),
  a('Dance Cardio', 'Classes & Sports', 7.5, 150),
  a('Step Aerobics', 'Classes & Sports', 8.5, 160),
  a('Aerobics (low impact)', 'Classes & Sports', 5.0, 130),
  a('Aerobics (high impact)', 'Classes & Sports', 7.3, 160),
  a('Kickboxing', 'Classes & Sports', 10.5, 130),
  a('Boxing (bag work)', 'Classes & Sports', 8.5, 120),
  a('Boxing (sparring)', 'Classes & Sports', 11.0, 150),
  a('CrossFit MetCon', 'Classes & Sports', 11.0, 120),
  a('Basketball (game)', 'Classes & Sports', 8.0, 150),
  a('Football/Soccer (game)', 'Classes & Sports', 10.0, 180),
  a('Tennis (singles)', 'Classes & Sports', 8.0, 160),
  a('Tennis (doubles)', 'Classes & Sports', 6.0, 140),
  a('Badminton', 'Classes & Sports', 7.0, 130),
  a('Squash', 'Classes & Sports', 12.0, 170),
  a('Racquetball', 'Classes & Sports', 9.0, 160),
  a('Volleyball (game)', 'Classes & Sports', 6.0, 140),
  a('Beach Volleyball', 'Classes & Sports', 8.0, 150),
  a('Handball', 'Classes & Sports', 12.0, 170),
  a('Hockey (field)', 'Classes & Sports', 8.0, 160),
  a('Ice Hockey (game)', 'Classes & Sports', 8.5, 160),
  a('Rugby (game)', 'Classes & Sports', 9.5, 170),
  a('American Football (game)', 'Classes & Sports', 8.0, 150),
  a('Table Tennis', 'Classes & Sports', 4.0, 100),
  a('Golf (walking)', 'Classes & Sports', 5.0, 110),
  a('Kayaking (moderate)', 'Classes & Sports', 5.0, 60),
  a('Surfing', 'Classes & Sports', 6.0, 60),
  a('Ice Skating', 'Classes & Sports', 7.0, 150),
  a('Mountain Biking', 'Classes & Sports', 10.0, 190),
  a('Snowboarding', 'Classes & Sports', 6.5, 120),
  a('Cross-Country Skiing', 'Classes & Sports', 10.0, 130),
  a('Downhill Skiing', 'Classes & Sports', 7.0, 130),
  a('Trail Running', 'Classes & Sports', 10.5, 170),
  a('Orienteering', 'Classes & Sports', 9.0, 150),
  a('Frisbee/Ultimate', 'Classes & Sports', 8.0, 160),
  a('Cricket (playing)', 'Classes & Sports', 6.0, 150),
  a('Rowing (outdoor)', 'Classes & Sports', 8.0, 120),

  // Recovery
  a('Walking (leisurely)', 'Recovery', 2.5, 90),
  a('Tai Chi', 'Recovery', 3.0, 60),
  a('Yoga (vinyasa flow)', 'Recovery', 3.0, 40),
  a('Yoga (power)', 'Recovery', 4.0, 50),
  a('Pilates (mat)', 'Recovery', 3.0, 50),
  a('Pilates (reformer)', 'Recovery', 3.5, 40),
  a('Stretching Routine', 'Recovery', 2.5, 30),
  a('Light Cycling', 'Recovery', 4.0, 170),
  a('Foam Rolling', 'Recovery', 2.0, 20),
  a('Mobility Work', 'Recovery', 2.5, 40),
  a('Bodyweight Recovery Flow', 'Recovery', 3.5, 80),
  a('Dance (slow)', 'Recovery', 3.0, 90),
  a('Lawn Mowing', 'Recovery', 4.5, 120),
  a('Gardening (active)', 'Recovery', 4.0, 100),
  a('House Cleaning', 'Recovery', 3.3, 100),
];

export function searchCardioActivities(query: string): CardioActivityEntry[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return CARDIO_ACTIVITY_LIBRARY.filter(
    a => a.name.toLowerCase().includes(q) || a.type.toLowerCase().includes(q)
  ).slice(0, 8);
}

export function searchCardioByType(type: string): CardioActivityEntry[] {
  if (!type.trim()) return [];
  const t = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  return CARDIO_ACTIVITY_LIBRARY.filter(a => a.type === t);
}

export function findCardioActivity(name: string): CardioActivityEntry | undefined {
  const q = name.trim().toLowerCase();
  return CARDIO_ACTIVITY_LIBRARY.find(a => a.name.toLowerCase() === q);
}

/** Estimate step-equivalent for a cardio session via cadence (steps/min). */
export function estimateSteps(activity: CardioActivityEntry | undefined, minutes: number): number | null {
  if (!activity?.stepsPerMinute || !Number.isFinite(minutes) || minutes <= 0) return null;
  return Math.round(activity.stepsPerMinute * minutes);
}

/** Estimate calories burned for a cardio session (MET × 3.5 × kg / 200 × min). */
export function estimateCaloriesBurned(activity: CardioActivityEntry | undefined, minutes: number, bodyKg: number): number | null {
  if (!activity?.met || !Number.isFinite(minutes) || minutes <= 0) return null;
  const kg = Number.isFinite(bodyKg) && bodyKg > 0 ? bodyKg : 70;
  return Math.round(activity.met * 3.5 * kg / 200 * minutes);
}