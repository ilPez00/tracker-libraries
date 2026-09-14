export interface OutdoorLocationEntry {
  name: string;
  type: string;
}

export const OUTDOOR_LOCATION_LIBRARY: OutdoorLocationEntry[] = [
  // Parks & Gardens
  { name: 'City Park', type: 'Parks & Gardens' },
  { name: 'Botanical Garden', type: 'Parks & Gardens' },
  { name: 'Nature Reserve', type: 'Parks & Gardens' },
  { name: 'National Park', type: 'Parks & Gardens' },
  { name: 'Community Garden', type: 'Parks & Gardens' },
  { name: 'Japanese Garden', type: 'Parks & Gardens' },
  { name: 'Rooftop Garden', type: 'Parks & Gardens' },
  { name: 'Arboretum', type: 'Parks & Gardens' },

  // Hiking & Trails
  { name: 'Mountain Trail', type: 'Hiking & Trails' },
  { name: 'Coastal Path', type: 'Hiking & Trails' },
  { name: 'Forest Trail', type: 'Hiking & Trails' },
  { name: 'River Walk', type: 'Hiking & Trails' },
  { name: 'Canyon Hike', type: 'Hiking & Trails' },
  { name: 'Hilltop Lookout', type: 'Hiking & Trails' },
  { name: 'Boardwalk Trail', type: 'Hiking & Trails' },
  { name: 'Nature Loop', type: 'Hiking & Trails' },

  // Water & Beach
  { name: 'Beach', type: 'Water & Beach' },
  { name: 'Lake', type: 'Water & Beach' },
  { name: 'Riverbank', type: 'Water & Beach' },
  { name: 'Fishing Spot', type: 'Water & Beach' },
  { name: 'Harbour / Marina', type: 'Water & Beach' },
  { name: 'Waterfall', type: 'Water & Beach' },
  { name: 'Swimming Spot', type: 'Water & Beach' },
  { name: 'Kayak Launch', type: 'Water & Beach' },

  // Urban Outdoor
  { name: 'Roof Terrace', type: 'Urban Outdoor' },
  { name: 'Town Square', type: 'Urban Outdoor' },
  { name: 'Street Market', type: 'Urban Outdoor' },
  { name: 'Outdoor Café', type: 'Urban Outdoor' },
  { name: 'Observatory Deck', type: 'Urban Outdoor' },
  { name: 'Public Art Installation', type: 'Urban Outdoor' },
  { name: 'Botanical Greenhouse', type: 'Urban Outdoor' },
  { name: 'Beer Garden', type: 'Urban Outdoor' },

  // Sports & Rec
  { name: 'Sports Field', type: 'Sports & Recreation' },
  { name: 'Basketball Court', type: 'Sports & Recreation' },
  { name: 'Tennis Court', type: 'Sports & Recreation' },
  { name: 'Running Track', type: 'Sports & Recreation' },
  { name: 'Skate Park', type: 'Sports & Recreation' },
  { name: 'Climbing Gym', type: 'Sports & Recreation' },
  { name: 'Bike Trail', type: 'Sports & Recreation' },
  { name: 'Golf Course', type: 'Sports & Recreation' },

  // Nature & Wildlife
  { name: 'Wildlife Sanctuary', type: 'Nature & Wildlife' },
  { name: 'Bird Watching Spot', type: 'Nature & Wildlife' },
  { name: 'Stargazing Spot', type: 'Nature & Wildlife' },
  { name: 'Meadow / Field', type: 'Nature & Wildlife' },
  { name: 'Cave System', type: 'Nature & Wildlife' },
  { name: 'Volcanic Area', type: 'Nature & Wildlife' },
  { name: 'Hot Springs', type: 'Nature & Wildlife' },
  { name: 'Desert Landscape', type: 'Nature & Wildlife' },
];

export function searchOutdoorLocations(query: string): OutdoorLocationEntry[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return OUTDOOR_LOCATION_LIBRARY.filter(
    l => l.name.toLowerCase().includes(q) || l.type.toLowerCase().includes(q)
  ).slice(0, 8);
}

export function searchLocationsByType(type: string): OutdoorLocationEntry[] {
  if (!type.trim()) return [];
  const t = type.charAt(0).toUpperCase() + type.slice(1).toLowerCase();
  return OUTDOOR_LOCATION_LIBRARY.filter(l => l.type === t);
}
