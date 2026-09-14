/**
 * foodLibrary — calorie + macro (P/C/F per 100g) database for precise meal tracking.
 * Values are approximate USDA/FDA-style averages for common foods.
 * Each entry exposes per-100g nutrition plus a typical serving so the log form can
 * prefill a realistic amount and auto-compute calories + macros for it.
 */

export interface FoodEntry {
  name: string;
  /** Energy per 100 g (kcal) */
  kcalPer100g: number;
  /** Protein per 100 g (g) */
  protein: number;
  /** Carbs per 100 g (g) */
  carbs: number;
  /** Fat per 100 g (g) */
  fat: number;
  category: string;
  /** Typical serving in grams (used to prefill the log amount) */
  servingG: number;
  /** Human label for the serving (e.g. "1 pc", "1 cup") */
  servingLabel: string;
}

const f = (
  name: string,
  kcalPer100g: number,
  protein: number,
  carbs: number,
  fat: number,
  category: string,
  servingG: number,
  servingLabel: string,
): FoodEntry => ({ name, kcalPer100g, protein, carbs, fat, category, servingG, servingLabel });

export const FOOD_LIBRARY: FoodEntry[] = [
  // ─────────────────────────── PROTEIN ───────────────────────────
  // Meat & Poultry
  f('Chicken Breast (cooked)', 165, 31, 0, 3.6, 'Protein', 150, '1 fillet'),
  f('Chicken Thigh (cooked)', 209, 26, 0, 11, 'Protein', 100, '1 thigh'),
  f('Chicken Wing (baked)', 203, 30, 0, 8, 'Protein', 90, '2 wings'),
  f('Turkey Breast (cooked)', 135, 30, 0, 1, 'Protein', 140, '1 breast'),
  f('Turkey Mince (lean)', 149, 26, 0, 4.5, 'Protein', 125, '1 patty'),
  f('Duck Breast (cooked)', 206, 25, 0, 11, 'Protein', 120, '1 breast'),
  f('Beef Mince (lean)', 215, 26, 0, 12, 'Protein', 120, '1 patty'),
  f('Beef Steak (lean, sirloin)', 206, 27, 0, 10, 'Protein', 150, '1 steak'),
  f('Ribeye Steak', 291, 24, 0, 21, 'Protein', 150, '1 steak'),
  f('Beef Chuck Roast', 254, 27, 0, 16, 'Protein', 120, '1 portion'),
  f('Pork Loin (cooked)', 242, 27, 0, 14, 'Protein', 120, '1 chop'),
  f('Pork Belly (cooked)', 518, 9, 0, 53, 'Protein', 90, '1 slice'),
  f('Ham (lean, sliced)', 145, 21, 1, 6, 'Protein', 50, '2 slices'),
  f('Bacon (cooked)', 541, 37, 1, 42, 'Protein', 20, '2 rashers'),
  f('Lamb Chop (lean)', 243, 25, 0, 15, 'Protein', 120, '1 chop'),
  f('Veal (cooked)', 229, 32, 0, 10, 'Protein', 120, '1 portion'),
  f('Ground Turkey (93/7)', 176, 24, 0, 8, 'Protein', 120, '1 patty'),
  // Seafood
  f('Salmon (cooked)', 208, 20, 0, 13, 'Seafood', 120, '1 fillet'),
  f('Salmon (smoked)', 117, 21, 0, 4, 'Seafood', 60, '2 slices'),
  f('Tuna (canned in water)', 116, 26, 0, 1, 'Seafood', 100, '1 can'),
  f('Tuna (fresh, cooked)', 144, 26, 0, 4, 'Seafood', 120, '1 steak'),
  f('Cod (cooked)', 82, 18, 0, 0.7, 'Seafood', 150, '1 fillet'),
  f('Haddock (cooked)', 90, 20, 0, 0.8, 'Seafood', 150, '1 fillet'),
  f('Halibut (cooked)', 111, 23, 0, 2.3, 'Seafood', 150, '1 fillet'),
  f('Tilapia (cooked)', 96, 20, 0, 1.7, 'Seafood', 150, '1 fillet'),
  f('Sea Bass (cooked)', 124, 24, 0, 3, 'Seafood', 140, '1 fillet'),
  f('Sardines (canned in oil)', 208, 25, 0, 11, 'Seafood', 75, '1 can'),
  f('Mackerel (cooked)', 262, 19, 0, 20, 'Seafood', 100, '1 fillet'),
  f('Anchovies (canned)', 210, 29, 0, 10, 'Seafood', 30, '1 tin'),
  f('Prawns / Shrimp (cooked)', 99, 24, 0.2, 0.3, 'Seafood', 100, '1 cup'),
  f('Scallops (cooked)', 111, 20, 5, 0.8, 'Seafood', 100, '6 scallops'),
  f('Mussels (cooked)', 86, 12, 4, 2.2, 'Seafood', 100, '1 cup'),
  f('Oysters (raw)', 81, 9.5, 5, 2.3, 'Seafood', 85, '6 oysters'),
  f('Squid (cooked)', 92, 16, 3, 1.4, 'Seafood', 100, '1 cup'),
  f('Crab (cooked)', 97, 19, 0, 1.5, 'Seafood', 100, '1 cup'),
  f('Lobster (cooked)', 89, 19, 0, 0.9, 'Seafood', 150, '1 tail'),
  f('Swordfish (cooked)', 121, 20, 0, 4, 'Seafood', 150, '1 steak'),
  // Eggs
  f('Eggs (whole)', 155, 13, 1.1, 11, 'Protein', 100, '2 eggs'),
  f('Egg Whites', 52, 11, 0.7, 0.2, 'Protein', 100, '3 whites'),
  f('Egg Yolk', 322, 16, 3.6, 27, 'Protein', 20, '1 yolk'),
  f('Boiled Egg', 155, 13, 1.1, 11, 'Protein', 50, '1 egg'),
  f('Scrambled Eggs (milk)', 149, 10, 2, 11, 'Protein', 100, '2 eggs'),
  f('Quail Eggs', 158, 13, 0.4, 11, 'Protein', 50, '5 eggs'),
  // Dairy (protein-rich)
  f('Greek Yogurt (0%)', 59, 10, 4, 0.3, 'Protein', 170, '1 tub'),
  f('Greek Yogurt (full-fat)', 97, 9, 4, 5, 'Dairy', 170, '1 tub'),
  f('Skyr (0%)', 61, 11, 4, 0.2, 'Dairy', 170, '1 tub'),
  f('Cottage Cheese', 98, 11, 3.4, 4.3, 'Protein', 150, '1/2 cup'),
  f('Whey Protein Powder', 370, 75, 10, 4, 'Protein', 30, '1 scoop'),
  f('Casein Protein', 380, 70, 8, 5, 'Protein', 30, '1 scoop'),
  f('Whey Protein Isolate', 400, 90, 2, 2, 'Protein', 30, '1 scoop'),
  f('Ricotta (part-skim)', 138, 11, 5, 8, 'Dairy', 100, '1/2 cup'),
  f('Parmesan (grated)', 431, 38, 4, 29, 'Dairy', 20, '2 tbsp'),
  // Plant protein
  f('Tofu', 76, 8, 1.9, 4.8, 'Protein', 120, '1/3 block'),
  f('Tempeh', 193, 19, 9, 11, 'Protein', 100, '1/2 block'),
  f('Seitan', 147, 25, 8, 1.9, 'Protein', 100, '1 cup'),
  f('Edamame (steamed)', 121, 12, 9, 5, 'Legumes', 100, '1 cup'),
  f('Textured Vegetable Protein (dry)', 341, 52, 33, 1.2, 'Protein', 30, '1/3 cup'),
  f('Protein Bar (typical)', 380, 30, 40, 10, 'Snacks', 60, '1 bar'),
  f('Plant Protein Powder', 380, 68, 15, 6, 'Protein', 30, '1 scoop'),
  // Legumes (protein + carbs)
  f('Lentils (cooked)', 116, 9, 20, 0.4, 'Legumes', 150, '3/4 cup'),
  f('Red Lentils (dry)', 358, 24, 63, 1.1, 'Legumes', 50, '1/4 cup'),
  f('Chickpeas (cooked)', 164, 9, 27, 2.6, 'Legumes', 150, '3/4 cup'),
  f('Kidney Beans (cooked)', 127, 9, 23, 0.5, 'Legumes', 150, '3/4 cup'),
  f('Black Beans (cooked)', 132, 9, 24, 0.5, 'Legumes', 150, '3/4 cup'),
  f('Pinto Beans (cooked)', 143, 9, 26, 0.7, 'Legumes', 150, '3/4 cup'),
  f('White Beans (cooked)', 139, 9, 25, 0.6, 'Legumes', 150, '3/4 cup'),
  f('Mung Beans (cooked)', 105, 7, 19, 0.4, 'Legumes', 150, '3/4 cup'),
  f('Peas (cooked)', 81, 5.4, 14, 0.4, 'Vegetables', 150, '1 cup'),
  f('Broad Beans (cooked)', 88, 7.6, 15, 0.6, 'Legumes', 150, '1 cup'),
  f('Black-Eyed Peas (cooked)', 116, 8, 21, 0.5, 'Legumes', 150, '3/4 cup'),
  f('Hummus', 166, 7.9, 14, 9.6, 'Condiments', 60, '1/4 cup'),
  f('Falafel', 333, 13, 31, 18, 'Legumes', 60, '3 pieces'),
  f('Peanut Butter', 588, 25, 20, 50, 'Fats', 16, '1 tbsp'),
  f('Almond Butter', 614, 21, 19, 56, 'Fats', 16, '1 tbsp'),
  f('Pumpkin Seeds', 559, 30, 11, 49, 'Nuts & Seeds', 30, '1/4 cup'),
  f('Chia Seeds', 486, 17, 42, 31, 'Nuts & Seeds', 15, '1 tbsp'),
  f('Flaxseed (ground)', 534, 18, 29, 42, 'Nuts & Seeds', 15, '1 tbsp'),
  f('Hemp Seeds', 553, 32, 9, 49, 'Nuts & Seeds', 30, '3 tbsp'),
  f('Soybeans (cooked)', 173, 16, 9, 9, 'Legumes', 100, '1/2 cup'),

  // ─────────────────────────── CARBS & GRAINS ───────────────────────────
  f('White Rice (cooked)', 130, 2.7, 28, 0.3, 'Grains', 150, '1/2 bowl'),
  f('Brown Rice (cooked)', 123, 2.7, 26, 1, 'Grains', 150, '1/2 bowl'),
  f('Basmati Rice (cooked)', 121, 3, 26, 0.4, 'Grains', 150, '1/2 bowl'),
  f('Jasmine Rice (cooked)', 129, 2.7, 28, 0.2, 'Grains', 150, '1/2 bowl'),
  f('Quinoa (cooked)', 120, 4.4, 21, 1.9, 'Grains', 150, '1/2 bowl'),
  f('Oats (dry)', 389, 17, 66, 7, 'Grains', 40, '1/2 cup'),
  f('Oatmeal (cooked)', 71, 2.5, 12, 1.5, 'Grains', 200, '1 bowl'),
  f('Couscous (cooked)', 112, 3.8, 23, 0.2, 'Grains', 150, '1/2 bowl'),
  f('Bulgur (cooked)', 83, 3.1, 19, 0.2, 'Grains', 150, '3/4 cup'),
  f('Barley (cooked)', 123, 2.3, 28, 0.4, 'Grains', 150, '3/4 cup'),
  f('Millet (cooked)', 119, 3.5, 24, 1, 'Grains', 150, '3/4 cup'),
  f('Buckwheat (cooked)', 92, 3.4, 20, 0.6, 'Grains', 150, '3/4 cup'),
  f('Pasta (cooked)', 157, 5.8, 31, 0.9, 'Grains', 200, '1 plate'),
  f('Whole Wheat Pasta (cooked)', 124, 5, 26, 0.5, 'Grains', 200, '1 plate'),
  f('Rice Noodles (cooked)', 109, 1.8, 24, 0.2, 'Grains', 150, '1 plate'),
  f('Soba Noodles (cooked)', 99, 5, 21, 0.1, 'Grains', 150, '1 plate'),
  f('Spaghetti (cooked)', 158, 5.8, 31, 0.9, 'Grains', 200, '1 plate'),
  f('White Bread', 265, 9, 49, 3.2, 'Grains', 30, '1 slice'),
  f('Whole Wheat Bread', 247, 13, 41, 3.4, 'Grains', 30, '1 slice'),
  f('Rye Bread', 259, 8.5, 48, 3.3, 'Grains', 30, '1 slice'),
  f('Sourdough Bread', 266, 9, 51, 3.2, 'Grains', 30, '1 slice'),
  f('Bagel', 250, 10, 48, 1.5, 'Grains', 100, '1 bagel'),
  f('Croissant', 406, 8, 45, 21, 'Fast Food', 60, '1 croissant'),
  f('Tortilla (flour)', 310, 8, 50, 8, 'Grains', 40, '1 wrap'),
  f('Corn Tortilla', 218, 5.7, 45, 2.8, 'Grains', 30, '1 tortilla'),
  f('English Muffin', 235, 8, 46, 2, 'Grains', 60, '1 muffin'),
  f('Pita Bread', 275, 9, 55, 1.2, 'Grains', 55, '1 pita'),
  f('Sweet Potato (cooked)', 90, 2, 20.7, 0.2, 'Vegetables', 150, '1 medium'),
  f('White Potato (boiled)', 87, 1.9, 20, 0.1, 'Vegetables', 150, '1 medium'),
  f('Potato (baked, skin)', 93, 2.5, 21, 0.1, 'Vegetables', 150, '1 medium'),
  f('Mashed Potato', 113, 2.1, 16, 4.5, 'Vegetables', 150, '1/2 cup'),
  f('Roast Potato', 157, 2.6, 24, 5.8, 'Vegetables', 120, '5 pieces'),
  f('Sweet Corn (cooked)', 96, 3.4, 21, 1.5, 'Vegetables', 100, '1 cob'),
  f('Plantain (cooked)', 116, 1.2, 31, 0.2, 'Fruits', 120, '1/2 plantain'),
  f('Yuca/Cassava (cooked)', 160, 1.4, 39, 0.3, 'Vegetables', 100, '1/2 cup'),

  // ─────────────────────────── FRUITS ───────────────────────────
  f('Banana', 89, 1.1, 23, 0.3, 'Fruits', 118, '1 medium'),
  f('Apple', 52, 0.3, 14, 0.2, 'Fruits', 180, '1 medium'),
  f('Green Apple', 52, 0.3, 14, 0.2, 'Fruits', 180, '1 medium'),
  f('Orange', 47, 0.9, 12, 0.1, 'Fruits', 130, '1 medium'),
  f('Mandarin', 53, 0.8, 13, 0.3, 'Fruits', 80, '1 medium'),
  f('Grapefruit', 42, 0.8, 11, 0.1, 'Fruits', 230, '1/2 fruit'),
  f('Blueberries', 57, 0.7, 14, 0.3, 'Fruits', 75, '1/2 cup'),
  f('Strawberries', 32, 0.7, 7.7, 0.3, 'Fruits', 150, '1 cup'),
  f('Raspberries', 52, 1.2, 12, 0.7, 'Fruits', 125, '1 cup'),
  f('Blackberries', 43, 1.4, 10, 0.5, 'Fruits', 150, '1 cup'),
  f('Grapes', 69, 0.7, 18, 0.2, 'Fruits', 150, '1 cup'),
  f('Watermelon', 30, 0.6, 7.6, 0.2, 'Fruits', 150, '1 slice'),
  f('Cantaloupe', 34, 0.8, 8, 0.2, 'Fruits', 150, '1 cup'),
  f('Honeydew', 36, 0.5, 9, 0.1, 'Fruits', 150, '1 cup'),
  f('Pineapple', 50, 0.5, 13, 0.1, 'Fruits', 100, '1 slice'),
  f('Mango', 60, 0.8, 15, 0.4, 'Fruits', 100, '1/2 mango'),
  f('Papaya', 43, 0.5, 11, 0.3, 'Fruits', 150, '1/2 fruit'),
  f('Peach', 39, 0.9, 10, 0.3, 'Fruits', 150, '1 medium'),
  f('Nectarine', 44, 1.1, 11, 0.3, 'Fruits', 140, '1 medium'),
  f('Plum', 46, 0.7, 11, 0.3, 'Fruits', 70, '1 medium'),
  f('Apricot', 48, 1.4, 11, 0.4, 'Fruits', 60, '3 apricots'),
  f('Cherries', 63, 1.1, 16, 0.2, 'Fruits', 100, '1 cup'),
  f('Kiwi', 61, 1.1, 15, 0.5, 'Fruits', 70, '1 kiwi'),
  f('Pear', 57, 0.4, 15, 0.1, 'Fruits', 180, '1 medium'),
  f('Pomegranate', 83, 1.7, 19, 1.2, 'Fruits', 100, '1/2 fruit'),
  f('Avocado', 160, 2, 8.5, 15, 'Fats', 50, '1/2 avocado'),
  f('Dates', 277, 1.8, 75, 0.2, 'Fruits', 24, '1 date'),
  f('Raisins', 299, 3.1, 79, 0.5, 'Fruits', 30, '1/4 cup'),
  f('Dried Cranberries', 308, 0.1, 82, 1.4, 'Fruits', 30, '1/4 cup'),
  f('Figs (dried)', 249, 3.3, 64, 0.9, 'Fruits', 40, '2 figs'),
  f('Coconut (fresh)', 354, 3.3, 15, 33, 'Fruits', 45, '1/2 cup'),
  f('Lemon', 29, 1.1, 9.3, 0.3, 'Fruits', 60, '1 lemon'),
  f('Passion Fruit', 97, 2.2, 23, 0.7, 'Fruits', 18, '1 fruit'),

  // ─────────────────────────── VEGETABLES ───────────────────────────
  f('Broccoli', 34, 2.8, 7, 0.4, 'Vegetables', 90, '1 cup'),
  f('Cauliflower', 25, 1.9, 5, 0.3, 'Vegetables', 100, '1 cup'),
  f('Spinach', 23, 2.9, 3.6, 0.4, 'Vegetables', 90, '2 cups'),
  f('Kale', 49, 4.3, 9, 0.9, 'Vegetables', 70, '1 cup'),
  f('Lettuce (Romaine)', 17, 1.2, 3.3, 0.3, 'Vegetables', 60, '2 cups'),
  f('Arugula', 25, 2.6, 3.7, 0.7, 'Vegetables', 50, '2 cups'),
  f('Tomato', 18, 0.9, 3.9, 0.2, 'Vegetables', 120, '1 medium'),
  f('Cherry Tomatoes', 18, 0.9, 3.9, 0.2, 'Vegetables', 100, '1 cup'),
  f('Cucumber', 16, 0.7, 3.6, 0.1, 'Vegetables', 100, '1/2 cucumber'),
  f('Bell Pepper (red)', 31, 1, 6, 0.3, 'Vegetables', 120, '1 pepper'),
  f('Bell Pepper (green)', 20, 0.9, 4.6, 0.2, 'Vegetables', 120, '1 pepper'),
  f('Carrot', 41, 0.9, 10, 0.2, 'Vegetables', 110, '1 large'),
  f('Onion', 40, 1.1, 9, 0.1, 'Vegetables', 110, '1 medium'),
  f('Red Onion', 40, 1.1, 9, 0.1, 'Vegetables', 110, '1 medium'),
  f('Garlic', 149, 6.4, 33, 0.5, 'Vegetables', 10, '2 cloves'),
  f('Mushrooms (white)', 22, 3.1, 3.3, 0.3, 'Vegetables', 90, '1 cup'),
  f('Portobello Mushroom', 22, 3.1, 3.3, 0.3, 'Vegetables', 120, '1 cap'),
  f('Zucchini', 17, 1.2, 3.1, 0.3, 'Vegetables', 120, '1 medium'),
  f('Eggplant', 25, 1, 6, 0.2, 'Vegetables', 120, '1/2 eggplant'),
  f('Green Beans', 31, 1.8, 7, 0.2, 'Vegetables', 100, '1 cup'),
  f('Asparagus', 20, 2.2, 3.9, 0.1, 'Vegetables', 90, '6 spears'),
  f('Celery', 16, 0.7, 3, 0.2, 'Vegetables', 80, '2 stalks'),
  f('Cabbage', 25, 1.3, 5.8, 0.1, 'Vegetables', 90, '1 cup'),
  f('Brussels Sprouts', 43, 3.4, 9, 0.3, 'Vegetables', 90, '1 cup'),
  f('Beetroot', 43, 1.6, 10, 0.2, 'Vegetables', 110, '1 medium'),
  f('Radish', 16, 0.7, 3.4, 0.1, 'Vegetables', 60, '1/2 cup'),
  f('Leek', 61, 1.5, 14, 0.3, 'Vegetables', 90, '1 leek'),
  f('Fennel', 31, 1.2, 7.3, 0.2, 'Vegetables', 90, '1 bulb'),
  f('Artichoke (cooked)', 64, 2.9, 14, 0.2, 'Vegetables', 120, '1 artichoke'),
  f('Pumpkin (cooked)', 26, 1, 6.5, 0.1, 'Vegetables', 100, '1 cup'),
  f('Butternut Squash', 45, 1, 12, 0.1, 'Vegetables', 120, '1 cup'),
  f('Mixed Salad Greens', 18, 1.5, 3, 0.3, 'Vegetables', 50, '2 cups'),

  // ─────────────────────────── FATS & OILS ───────────────────────────
  f('Olive Oil', 884, 0, 0, 100, 'Fats', 13, '1 tbsp'),
  f('Avocado Oil', 884, 0, 0, 100, 'Fats', 13, '1 tbsp'),
  f('Coconut Oil', 862, 0, 0, 100, 'Fats', 13, '1 tbsp'),
  f('Butter', 717, 0.9, 0.1, 81, 'Fats', 14, '1 tbsp'),
  f('Ghee', 900, 0, 0, 100, 'Fats', 14, '1 tbsp'),
  f('Mayonnaise', 680, 1, 0.6, 75, 'Condiments', 15, '1 tbsp'),
  f('Light Mayo', 250, 0.5, 5, 25, 'Condiments', 15, '1 tbsp'),
  f('Tahini', 595, 17, 21, 54, 'Nuts & Seeds', 15, '1 tbsp'),
  f('Sesame Oil', 884, 0, 0, 100, 'Fats', 13, '1 tbsp'),
  f('Rapeseed Oil', 884, 0, 0, 100, 'Fats', 13, '1 tbsp'),
  f('Sunflower Oil', 884, 0, 0, 100, 'Fats', 13, '1 tbsp'),
  f('Almonds', 579, 21, 22, 50, 'Nuts & Seeds', 30, '1 handful'),
  f('Walnuts', 654, 15, 14, 65, 'Nuts & Seeds', 30, '1 handful'),
  f('Cashews', 553, 18, 30, 44, 'Nuts & Seeds', 30, '1 handful'),
  f('Pecans', 691, 9, 14, 72, 'Nuts & Seeds', 30, '1 handful'),
  f('Hazelnuts', 628, 15, 17, 61, 'Nuts & Seeds', 30, '1 handful'),
  f('Brazil Nuts', 659, 14, 12, 66, 'Nuts & Seeds', 30, '6 nuts'),
  f('Pistachios', 560, 20, 28, 45, 'Nuts & Seeds', 30, '1 handful'),
  f('Macadamia Nuts', 718, 8, 14, 76, 'Nuts & Seeds', 30, '1 handful'),
  f('Cheddar Cheese', 402, 25, 1.3, 33, 'Dairy', 30, '1 slice'),
  f('Mozzarella (fresh)', 280, 22, 3, 20, 'Dairy', 60, '1 ball'),
  f('Feta Cheese', 264, 14, 4, 21, 'Dairy', 40, '1 cube'),
  f('Parmesan', 431, 38, 4, 29, 'Dairy', 20, '2 tbsp'),
  f('Swiss Cheese', 380, 27, 1.4, 29, 'Dairy', 30, '1 slice'),
  f('Blue Cheese', 353, 21, 2.3, 29, 'Dairy', 30, '1 tbsp'),
  f('Goat Cheese', 364, 21, 0, 30, 'Dairy', 30, '1 oz'),
  f('Cream Cheese', 342, 6, 4, 34, 'Dairy', 30, '2 tbsp'),
  f('Sour Cream', 198, 2.4, 4.6, 19, 'Dairy', 30, '2 tbsp'),
  f('Cream (double/whipping)', 340, 2, 3, 36, 'Dairy', 30, '2 tbsp'),
  f('Olives (black)', 115, 0.8, 6, 11, 'Condiments', 30, '8 olives'),

  // ─────────────────────────── DAIRY & DRINKS ───────────────────────────
  f('Whole Milk', 61, 3.2, 4.8, 3.3, 'Dairy', 250, '1 cup'),
  f('Semi-Skimmed Milk', 50, 3.4, 5, 1.8, 'Dairy', 250, '1 cup'),
  f('Skim Milk', 34, 3.4, 5, 0.1, 'Dairy', 250, '1 cup'),
  f('Oat Milk', 47, 1, 7, 1.5, 'Dairy', 250, '1 cup'),
  f('Almond Milk (unsweetened)', 17, 0.4, 0.6, 1.5, 'Dairy', 250, '1 cup'),
  f('Soy Milk', 54, 3.3, 3, 1.8, 'Dairy', 250, '1 cup'),
  f('Coconut Milk (drink)', 21, 0.2, 0.9, 2.1, 'Dairy', 250, '1 cup'),
  f('Coconut Milk (canned)', 230, 2.3, 6, 24, 'Dairy', 100, '1/2 cup'),
  f('Rice Milk', 47, 0.3, 9.2, 1, 'Dairy', 250, '1 cup'),
  f('Orange Juice', 45, 0.7, 10, 0.2, 'Drinks', 250, '1 cup'),
  f('Apple Juice', 46, 0.1, 11, 0.1, 'Drinks', 250, '1 cup'),
  f('Tomato Juice', 17, 0.9, 3.5, 0.1, 'Drinks', 250, '1 cup'),
  f('Grape Juice', 60, 0.4, 15, 0.1, 'Drinks', 250, '1 cup'),
  f('Coffee (black)', 2, 0.3, 0, 0, 'Drinks', 250, '1 cup'),
  f('Latte (whole milk)', 46, 2.8, 4.4, 2.2, 'Drinks', 250, '1 cup'),
  f('Cappuccino', 31, 2.1, 3, 1.3, 'Drinks', 200, '1 cup'),
  f('Espresso', 9, 0.7, 1.7, 0.2, 'Drinks', 30, '1 shot'),
  f('Coca-Cola', 42, 0, 10.6, 0, 'Drinks', 330, '1 can'),
  f('Diet Soda', 0.4, 0, 0, 0, 'Drinks', 330, '1 can'),
  f('Energy Drink', 45, 0, 11, 0, 'Drinks', 250, '1 can'),
  f('Beer', 43, 0.5, 3.6, 0, 'Drinks', 330, '1 bottle'),
  f('Light Beer', 29, 0.3, 1.6, 0, 'Drinks', 330, '1 bottle'),
  f('Red Wine', 85, 0.1, 2.6, 0, 'Drinks', 150, '1 glass'),
  f('White Wine', 82, 0.1, 2.6, 0, 'Drinks', 150, '1 glass'),
  f('Gin & Tonic', 84, 0, 7, 0, 'Drinks', 250, '1 drink'),
  f('Sports Drink (isotonic)', 24, 0, 6, 0, 'Drinks', 250, '1 cup'),
  f('Green Tea (unsweetened)', 1, 0, 0.2, 0, 'Drinks', 250, '1 cup'),
  f('Kombucha', 13, 0, 3, 0, 'Drinks', 250, '1 cup'),

  // ─────────────────────────── CONDIMENTS / SAUCES ───────────────────────────
  f('Ketchup', 112, 1.2, 26, 0.1, 'Condiments', 15, '1 tbsp'),
  f('Mustard', 66, 4.4, 5, 3.3, 'Condiments', 15, '1 tbsp'),
  f('Soy Sauce', 53, 8, 4.9, 0.6, 'Condiments', 15, '1 tbsp'),
  f('Worcestershire Sauce', 78, 0, 19, 0, 'Condiments', 15, '1 tbsp'),
  f('Balsamic Vinegar', 88, 0.5, 17, 0, 'Condiments', 15, '1 tbsp'),
  f('Apple Cider Vinegar', 22, 0, 0.9, 0, 'Condiments', 15, '1 tbsp'),
  f('Tomato Pesto', 460, 8, 14, 44, 'Condiments', 20, '1 tbsp'),
  f('Marinara Sauce', 42, 1.5, 8, 0.4, 'Condiments', 100, '1/2 cup'),
  f('Alfredo Sauce', 510, 8, 8, 51, 'Condiments', 60, '1/4 cup'),
  f('Sriracha', 93, 1.9, 19, 0.5, 'Condiments', 15, '1 tbsp'),
  f('Honey', 304, 0.3, 82, 0, 'Condiments', 20, '1 tbsp'),
  f('Maple Syrup', 260, 0, 67, 0.1, 'Condiments', 20, '1 tbsp'),
  f('BBQ Sauce', 135, 1, 32, 0.3, 'Condiments', 20, '1 tbsp'),
  f('Teriyaki Sauce', 128, 2, 28, 0, 'Condiments', 20, '1 tbsp'),
  f('Sweet Chilli Sauce', 280, 0.6, 68, 0.1, 'Condiments', 20, '1 tbsp'),
  f('Salad Dressing (Caesar)', 490, 2, 5, 51, 'Condiments', 15, '1 tbsp'),
  f('Italian Dressing', 280, 0.5, 9, 27, 'Condiments', 15, '1 tbsp'),
  f('Guacamole', 160, 2, 9, 14, 'Condiments', 30, '2 tbsp'),
  f('Salsa', 25, 1.2, 5, 0.2, 'Condiments', 30, '2 tbsp'),
  f('Jam (strawberry)', 250, 0.4, 65, 0.1, 'Condiments', 20, '1 tbsp'),

  // ─────────────────────────── SNACKS / SWEETS ───────────────────────────
  f('Dark Chocolate (70%)', 598, 7.8, 46, 43, 'Snacks', 30, '4 squares'),
  f('Milk Chocolate', 535, 7.7, 59, 30, 'Snacks', 30, '4 squares'),
  f('White Chocolate', 539, 5.9, 59, 32, 'Snacks', 30, '4 squares'),
  f('Potato Chips', 536, 7, 53, 34, 'Snacks', 30, '1 handful'),
  f('Tortilla Chips', 496, 7, 63, 25, 'Snacks', 30, '1 handful'),
  f('Popcorn (air-popped)', 387, 13, 78, 4.5, 'Snacks', 15, '1 cup'),
  f('Popcorn (buttered)', 535, 9, 51, 33, 'Snacks', 15, '1 cup'),
  f('Pretzels', 380, 10, 80, 2.9, 'Snacks', 30, '1 handful'),
  f('Crackers (salted)', 435, 8, 70, 13, 'Snacks', 30, '6 crackers'),
  f('Rice Cakes', 387, 8, 81, 3.6, 'Snacks', 20, '1 cake'),
  f('Granola Bar', 450, 8, 65, 17, 'Snacks', 40, '1 bar'),
  f('Oat Bar', 380, 7, 68, 10, 'Snacks', 40, '1 bar'),
  f('Ice Cream (vanilla)', 207, 3.5, 24, 11, 'Snacks', 100, '1 scoop'),
  f('Sorbet', 130, 0.3, 32, 0.1, 'Snacks', 100, '1 scoop'),
  f('Brownie', 466, 6, 60, 23, 'Snacks', 60, '1 brownie'),
  f('Chocolate Chip Cookie', 488, 5, 63, 25, 'Snacks', 30, '1 cookie'),
  f('Cheesecake (slice)', 321, 5.5, 26, 22, 'Snacks', 100, '1 slice'),
  f('Donut (glazed)', 452, 5, 51, 26, 'Snacks', 60, '1 donut'),
  f('Muffin (blueberry)', 377, 4.6, 57, 14, 'Snacks', 100, '1 muffin'),
  f('Pancake', 227, 6, 38, 6, 'Snacks', 100, '1 pancake'),
  f('Waffle', 291, 7.9, 32, 14, 'Snacks', 80, '1 waffle'),
  f('Granola', 471, 10, 64, 20, 'Grains', 60, '1/2 cup'),
  f('Muesli', 350, 10, 66, 6, 'Grains', 60, '1/2 cup'),
  f('Fruit Yogurt (low-fat)', 90, 3.5, 17, 1.2, 'Dairy', 150, '1 tub'),
  f('Frozen Yogurt', 159, 3, 30, 3.4, 'Snacks', 100, '1 scoop'),
  f('Biscuit (digestive)', 471, 6, 68, 20, 'Snacks', 15, '1 biscuit'),
  f('Protein Cookie', 400, 25, 35, 17, 'Snacks', 60, '1 cookie'),

  // ─────────────────────────── PREPARED / MEALS ───────────────────────────
  f('Pizza (Margherita slice)', 266, 11, 33, 10, 'Fast Food', 100, '1 slice'),
  f('Pepperoni Pizza (slice)', 298, 13, 31, 13, 'Fast Food', 100, '1 slice'),
  f('Burger (beef patty)', 295, 17, 24, 14, 'Fast Food', 200, '1 burger'),
  f('Cheeseburger', 303, 16, 25, 15, 'Fast Food', 200, '1 burger'),
  f('Chicken Burger', 250, 14, 26, 10, 'Fast Food', 180, '1 burger'),
  f('French Fries', 312, 3.4, 41, 15, 'Fast Food', 120, 'medium'),
  f('Kebab (doner wrap)', 220, 12, 24, 8, 'Fast Food', 250, '1 wrap'),
  f('Fish & Chips', 260, 12, 27, 11, 'Fast Food', 300, '1 portion'),
  f('Noodles (instant, prepared)', 150, 3.5, 22, 5, 'Prepared', 200, '1 pack'),
  f('Ramen (restaurant)', 110, 4, 15, 3.5, 'Prepared', 400, '1 bowl'),
  f('Fried Rice', 190, 5, 28, 6, 'Prepared', 250, '1 plate'),
  f('Stir-Fry (chicken & veg)', 130, 12, 12, 4, 'Prepared', 300, '1 bowl'),
  f('Curry (chicken, coconut)', 190, 14, 8, 11, 'Prepared', 300, '1 bowl'),
  f('Bolognese (beef)', 140, 10, 10, 6, 'Prepared', 300, '1 portion'),
  f('Carbonara', 330, 12, 25, 20, 'Prepared', 300, '1 portion'),
  f('Lasagna', 170, 10, 13, 8, 'Prepared', 300, '1 portion'),
  f('Mac & Cheese', 220, 7, 25, 10, 'Prepared', 250, '1 portion'),
  f('Chili Con Carne', 130, 9, 14, 4, 'Prepared', 300, '1 bowl'),
  f('Soup (chicken noodle)', 45, 2.5, 5, 1.5, 'Prepared', 300, '1 bowl'),
  f('Tomato Soup', 65, 1.5, 12, 1, 'Prepared', 300, '1 bowl'),
  f('Miso Soup', 30, 2, 3, 1, 'Prepared', 250, '1 bowl'),
  f('Tacos (beef)', 210, 12, 20, 9, 'Fast Food', 150, '2 tacos'),
  f('Burrito (chicken)', 200, 12, 24, 6, 'Fast Food', 350, '1 burrito'),
  f('Falafel Wrap', 220, 8, 26, 9, 'Fast Food', 250, '1 wrap'),
  f('Sushi Roll (maki)', 145, 4.5, 28, 1.5, 'Prepared', 250, '8 pieces'),
  f('Sushi (salmon nigiri)', 135, 6, 22, 2.5, 'Prepared', 30, '1 piece'),
  f('Pho (beef)', 55, 4, 7, 1, 'Prepared', 500, '1 bowl'),
  f('Shakshuka', 90, 5, 8, 4, 'Prepared', 300, '1 serving'),
  f('Omelette (3 eggs + cheese)', 190, 14, 2, 14, 'Prepared', 200, '1 omelette'),
  f('Scrambled Eggs on Toast', 180, 10, 14, 9, 'Prepared', 200, '1 serving'),
  f('Peanut Butter Sandwich', 300, 12, 35, 13, 'Prepared', 100, '1 sandwich'),
  f('Tuna Salad', 150, 14, 5, 8, 'Prepared', 250, '1 bowl'),
  f('Caesar Salad (with chicken)', 180, 14, 8, 10, 'Prepared', 250, '1 bowl'),
  f('Greek Salad', 120, 4, 7, 8, 'Prepared', 250, '1 bowl'),
  f('Chicken Wrap', 220, 15, 22, 8, 'Prepared', 250, '1 wrap'),
  f('Baked Beans (canned)', 95, 5, 15, 0.5, 'Prepared', 200, '1/2 can'),
  f('Beef Stew', 140, 12, 10, 5, 'Prepared', 300, '1 bowl'),
  f('Ratatouille', 80, 2, 12, 3, 'Prepared', 300, '1 bowl'),
  f('Veggie Stir-Fry (tofu)', 110, 6, 12, 4, 'Prepared', 300, '1 bowl'),

  // ─────────────────────────── INTERNATIONAL ───────────────────────────
  // Italian
  f('Margherita Pizza (whole)', 250, 11, 30, 9, 'International', 350, '1 pizza'),
  f('Pasta Carbonara (plate)', 190, 8, 22, 8, 'International', 400, '1 plate'),
  f('Pasta al Pomodoro', 130, 4, 22, 3, 'International', 350, '1 plate'),
  f('Pasta Pesto Genovese', 210, 6, 24, 10, 'International', 350, '1 plate'),
  f('Lasagne al Forno', 165, 9, 14, 8, 'International', 350, '1 portion'),
  f('Risotto alla Milanese', 145, 4, 22, 4, 'International', 300, '1 plate'),
  f('Tagliatelle al Ragù', 175, 8, 20, 7, 'International', 350, '1 plate'),
  f('Gnocchi (with butter)', 160, 3.5, 26, 4, 'International', 250, '1 plate'),
  f('Minestrone', 45, 2, 8, 0.8, 'International', 350, '1 bowl'),
  f('Vitello Tonnato', 180, 18, 3, 10, 'International', 150, '1 portion'),
  f('Ossobuco', 190, 21, 2, 11, 'International', 250, '1 portion'),
  f('Focaccia', 290, 8, 42, 10, 'International', 80, '1 slice'),
  f('Arancini (fried)', 240, 6, 30, 10, 'International', 100, '2 pieces'),
  f('Mozzarella di Bufala', 280, 18, 2, 22, 'Dairy', 125, '1 ball'),
  f('Prosciutto Crudo', 195, 28, 0, 9, 'Protein', 40, '4 slices'),
  f('Mortadella', 260, 15, 1, 22, 'Protein', 40, '4 slices'),
  f('Burrata', 330, 16, 2, 29, 'Dairy', 100, '1 ball'),
  f('Tiramisù', 290, 5, 30, 17, 'Snacks', 120, '1 slice'),
  // Asian
  f('Pad Thai', 180, 8, 24, 6, 'International', 350, '1 plate'),
  f('Green Curry (chicken)', 145, 10, 8, 9, 'International', 350, '1 bowl'),
  f('Massaman Curry (beef)', 170, 11, 9, 11, 'International', 350, '1 bowl'),
  f('Tom Yum Soup (shrimp)', 55, 5, 4, 2, 'International', 350, '1 bowl'),
  f('Sushi Platter (mixed)', 140, 7, 25, 1.5, 'International', 350, '12 pieces'),
  f('Sashimi (salmon)', 127, 21, 0, 4.5, 'International', 150, '8 slices'),
  f('Tonkotsu Ramen (bowl)', 105, 5, 12, 4, 'International', 500, '1 bowl'),
  f('Gyoza (pan-fried)', 195, 8, 22, 8, 'International', 90, '4 pieces'),
  f('Katsu Curry (pork)', 205, 11, 21, 9, 'International', 450, '1 plate'),
  f('Bibimbap (beef)', 130, 8, 16, 4, 'International', 450, '1 bowl'),
  f('Kimchi', 15, 1.1, 2.4, 0.5, 'International', 50, '1 side'),
  f('Korean Fried Chicken', 290, 19, 16, 17, 'International', 150, '4 pieces'),
  f('Pho Bo (vietnamese)', 48, 4, 6, 1, 'International', 550, '1 bowl'),
  f('Banh Mi (pork)', 230, 11, 27, 8, 'International', 250, '1 sandwich'),
  f('Spring Rolls (fresh)', 110, 4, 18, 2, 'International', 130, '2 rolls'),
  f('Char Siu (BBQ pork)', 240, 21, 9, 13, 'International', 150, '1 portion'),
  f('Mapo Tofu', 115, 8, 5, 7, 'International', 300, '1 bowl'),
  f('Chow Mein (chicken)', 155, 8, 20, 4, 'International', 350, '1 plate'),
  f('Butter Chicken', 190, 12, 7, 13, 'International', 350, '1 bowl'),
  f('Tikka Masala (chicken)', 165, 13, 8, 9, 'International', 350, '1 bowl'),
  f('Palak Paneer', 155, 8, 7, 11, 'International', 300, '1 bowl'),
  f('Chana Masala', 120, 6, 16, 4, 'International', 300, '1 bowl'),
  f('Dal Tadka', 115, 6, 15, 3, 'International', 300, '1 bowl'),
  f('Biryani (chicken)', 165, 9, 21, 5, 'International', 400, '1 plate'),
  f('Naan Bread', 310, 9, 50, 8, 'International', 90, '1 naan'),
  f('Samosa (fried)', 260, 5, 28, 14, 'International', 80, '2 pieces'),
  // Middle Eastern
  f('Shawarma Wrap (chicken)', 195, 13, 20, 7, 'International', 300, '1 wrap'),
  f('Falafel Bowl (with rice)', 150, 6, 20, 5, 'International', 400, '1 bowl'),
  f('Tabbouleh', 95, 2.5, 14, 3.5, 'International', 150, '1 side'),
  f('Fattoush', 85, 2, 10, 4, 'International', 200, '1 bowl'),
  f('Baba Ganoush', 130, 3, 12, 8, 'Condiments', 80, '1 side'),
  f('Shakshuka (with bread)', 110, 5, 10, 5, 'Prepared', 350, '1 pan'),
  f('Kofta (lamb, grilled)', 220, 19, 3, 14, 'International', 180, '3 skewers'),
  f('Manakish (za\'atar)', 300, 8, 40, 11, 'International', 100, '1 piece'),
  // Greek
  f('Moussaka', 150, 8, 10, 9, 'International', 300, '1 portion'),
  f('Souvlaki (pork)', 185, 18, 3, 11, 'International', 200, '3 skewers'),
  f('Spanakopita', 235, 7, 22, 13, 'International', 150, '1 slice'),
  f('Tzatziki', 95, 3.5, 4, 7, 'Condiments', 60, '1 side'),
  f('Grilled Octopus', 82, 15, 2, 1.5, 'Seafood', 150, '1 portion'),
  // Latin American
  f('Feijoada', 155, 11, 12, 7, 'International', 400, '1 bowl'),
  f('Pão de Queijo', 320, 8, 34, 17, 'International', 50, '3 pieces'),
  f('Coxinha', 270, 9, 25, 15, 'International', 110, '1 piece'),
  f('Empanada (beef, baked)', 240, 10, 24, 11, 'International', 100, '1 empanada'),
  f('Arepas (cheese)', 220, 7, 32, 6, 'International', 100, '1 arepa'),
  f('Ceviche (fish)', 90, 15, 5, 1.5, 'International', 200, '1 bowl'),
  f('Pozole', 85, 6, 10, 2.5, 'International', 450, '1 bowl'),
  f('Chiles Rellenos', 160, 7, 12, 9, 'International', 200, '2 pieces'),
  f('Enchiladas (chicken)', 175, 11, 15, 8, 'International', 300, '2 enchiladas'),
  f('Carnitas', 245, 21, 0, 17, 'Protein', 150, '1 portion'),
  f('Churrasco (grilled steak)', 230, 26, 0, 13, 'Protein', 200, '1 steak'),
  // US / comfort
  f('Clam Chowder', 95, 4, 9, 4.5, 'Prepared', 350, '1 bowl'),
  f('Buffalo Wings (baked)', 210, 25, 2, 11, 'Fast Food', 150, '5 wings'),
  f('Mac and Cheese (homemade)', 215, 9, 24, 9, 'Prepared', 300, '1 bowl'),
  f('Pulled Pork Sandwich', 235, 14, 25, 9, 'Fast Food', 250, '1 sandwich'),
  f('BLT Sandwich', 260, 11, 24, 13, 'Fast Food', 200, '1 sandwich'),
  f('Reuben Sandwich', 250, 13, 23, 12, 'Fast Food', 250, '1 sandwich'),
  f('Meatloaf', 210, 15, 9, 12, 'Prepared', 200, '1 slice'),
  f('Shepherd\'s Pie', 155, 9, 15, 7, 'Prepared', 350, '1 portion'),
  f('Fish Tacos', 175, 12, 16, 7, 'Fast Food', 250, '2 tacos'),

  // ─────────────────────────── BREAKFAST ───────────────────────────
  f('Croissant with Ham & Cheese', 340, 14, 30, 18, 'Breakfast', 120, '1 croissant'),
  f('Continental Breakfast Plate', 180, 8, 22, 7, 'Breakfast', 250, '1 plate'),
  f('Full English Breakfast', 210, 11, 13, 13, 'Breakfast', 450, '1 plate'),
  f('American Pancakes (3, syrup)', 270, 6, 44, 8, 'Breakfast', 200, '3 pancakes'),
  f('French Toast', 230, 7, 30, 9, 'Breakfast', 150, '2 slices'),
  f('Belgian Waffle (w/ cream)', 300, 6, 38, 13, 'Breakfast', 130, '1 waffle'),
  f('Avocado Toast (sourdough)', 190, 5, 20, 10, 'Breakfast', 150, '1 toast'),
  f('Eggs Benedict', 230, 10, 15, 15, 'Breakfast', 250, '1 serving'),
  f('Omelette (vegetables)', 150, 10, 3, 11, 'Breakfast', 200, '1 omelette'),
  f('Breakfast Burrito', 210, 11, 22, 9, 'Breakfast', 250, '1 burrito'),
  f('Bagel with Cream Cheese', 290, 10, 42, 9, 'Breakfast', 130, '1 bagel'),
  f('Granola with Milk', 150, 5, 22, 5, 'Breakfast', 250, '1 bowl'),
  f('Overnight Oats (berries)', 120, 4, 19, 3, 'Breakfast', 300, '1 jar'),
  f('Chia Pudding (almond milk)', 95, 3, 12, 4, 'Breakfast', 250, '1 jar'),
  f('Smoothie (banana & berries)', 70, 1.5, 15, 0.8, 'Drinks', 350, '1 glass'),
  f('Protein Smoothie (whey)', 90, 9, 9, 2, 'Drinks', 400, '1 shaker'),
  f('Yogurt Parfait (granola)', 140, 6, 20, 4, 'Breakfast', 250, '1 cup'),
  f('Scrambled Eggs on Croissant', 280, 12, 22, 16, 'Breakfast', 180, '1 sandwich'),
  f('Smoked Salmon Bagel', 250, 14, 35, 6, 'Breakfast', 180, '1 bagel'),
  f('Congee (rice porridge)', 40, 1.5, 8, 0.4, 'Breakfast', 350, '1 bowl'),
  f('Tamago Kake Gohan (egg rice)', 130, 5, 20, 3, 'Breakfast', 250, '1 bowl'),
  f('Okonomiyaki', 190, 8, 18, 9, 'Breakfast', 250, '1 pancake'),
  f('Congee with Chicken', 60, 4, 8, 1.2, 'Breakfast', 400, '1 bowl'),
  f('Acai Bowl', 90, 2, 16, 2.5, 'Breakfast', 300, '1 bowl'),
  f('Cottage Cheese & Pineapple', 75, 8, 8, 2, 'Breakfast', 250, '1 bowl'),
  f('Rice Porridge with Milk (jok)', 65, 2.5, 10, 1.5, 'Breakfast', 350, '1 bowl'),

  // ─────────────────────────── PLANT-BASED ───────────────────────────
  f('Vegan Burger (Beyond/Impossible)', 220, 17, 8, 14, 'Plant-Based', 120, '1 patty'),
  f('Seitan Steak', 145, 26, 6, 2, 'Plant-Based', 120, '1 steak'),
  f('Jackfruit Pulled BBQ', 95, 1.7, 22, 0.6, 'Plant-Based', 150, '1 portion'),
  f('Lentil Bolognese', 115, 8, 17, 1.8, 'Plant-Based', 300, '1 bowl'),
  f('Chickpea Curry (vegan)', 135, 6, 17, 5, 'Plant-Based', 350, '1 bowl'),
  f('Buddha Bowl (quinoa & veg)', 130, 5, 17, 5, 'Plant-Based', 400, '1 bowl'),
  f('Vegan Burrito (beans & rice)', 175, 7, 28, 4, 'Plant-Based', 350, '1 burrito'),
  f('Tofu Scramble', 120, 11, 4, 7, 'Plant-Based', 200, '1 plate'),
  f('Tempeh Bacon', 180, 19, 8, 9, 'Plant-Based', 60, '3 strips'),
  f('Cashew Ricotta', 260, 9, 10, 21, 'Plant-Based', 60, '1/4 cup'),
  f('Nutritional Yeast', 380, 50, 36, 5, 'Plant-Based', 10, '2 tbsp'),
  f('Pea Protein Powder', 375, 80, 5, 4, 'Plant-Based', 30, '1 scoop'),
  f('Soy Yogurt (unsweetened)', 55, 4, 3, 2.5, 'Plant-Based', 150, '1 tub'),
  f('Oat Yogurt', 75, 2.5, 12, 2, 'Plant-Based', 150, '1 tub'),
  f('Aquafaba (chickpea water)', 12, 0.6, 1.5, 0, 'Plant-Based', 60, '3 tbsp'),

  // ─────────────────────────── HERBS / SPICES / LOW-CAL ──────────────
  f('Basil (fresh)', 23, 3.2, 2.7, 0.6, 'Herbs & Spices', 10, '1 handful'),
  f('Parsley (fresh)', 36, 3, 6.3, 0.8, 'Herbs & Spices', 10, '1 handful'),
  f('Cilantro (fresh)', 23, 2.1, 3.7, 0.5, 'Herbs & Spices', 10, '1 handful'),
  f('Rosemary (fresh)', 131, 3.3, 20.7, 5.9, 'Herbs & Spices', 5, '1 sprig'),
  f('Thyme (fresh)', 101, 5.6, 24.5, 1.7, 'Herbs & Spices', 5, '1 sprig'),
  f('Oregano (dried)', 265, 9, 68.9, 4.3, 'Herbs & Spices', 2, '1 tsp'),
  f('Chili Flakes', 282, 13, 51, 14, 'Herbs & Spices', 2, '1 tsp'),
  f('Black Pepper', 251, 10, 64, 3.3, 'Herbs & Spices', 2, '1 tsp'),
  f('Turmeric (ground)', 312, 9.7, 67, 3.2, 'Herbs & Spices', 3, '1 tsp'),
  f('Cinnamon (ground)', 247, 4, 81, 1.2, 'Herbs & Spices', 3, '1 tsp'),
  f('Ginger (fresh)', 80, 1.8, 17.8, 0.8, 'Herbs & Spices', 10, '1 thumb'),
  f('Garlic Powder', 331, 16.6, 72.7, 0.7, 'Herbs & Spices', 3, '1 tsp'),
  f('Curry Powder', 325, 14, 56, 14, 'Herbs & Spices', 3, '1 tsp'),
  f('Paprika', 282, 14, 54, 13, 'Herbs & Spices', 3, '1 tsp'),
  f('Vanilla Extract', 288, 0.06, 12.7, 0.06, 'Herbs & Spices', 4, '1 tsp'),
  f('Mustard (Dijon)', 66, 4.4, 5, 3.3, 'Herbs & Spices', 15, '1 tbsp'),
  f('Hot Sauce', 15, 0.5, 3, 0.3, 'Herbs & Spices', 10, '1 tsp'),
  f('Soy Sauce (light)', 40, 6.5, 4, 0.1, 'Herbs & Spices', 15, '1 tbsp'),
  f('Miso Paste', 199, 12, 26, 6, 'Herbs & Spices', 15, '1 tbsp'),
  f('Harissa Paste', 190, 4, 20, 10, 'Herbs & Spices', 15, '1 tbsp'),
  f('Gochujang', 260, 6, 46, 4, 'Herbs & Spices', 20, '1 tbsp'),
];

/** Categories in display order (drives the browse dialog accordions). */
export const FOOD_CATEGORIES = [
  'Protein', 'Seafood', 'Legumes', 'Grains', 'Vegetables', 'Fruits',
  'Fats', 'Dairy', 'Nuts & Seeds', 'Drinks', 'Condiments', 'Snacks',
  'Prepared', 'Fast Food', 'International', 'Breakfast', 'Plant-Based',
  'Herbs & Spices',
];

/** Find a food by exact name (case-insensitive) — used by the log form. */
export function findFood(name: string): FoodEntry | undefined {
  const q = name.trim().toLowerCase();
  return FOOD_LIBRARY.find(food => food.name.toLowerCase() === q);
}

export function searchFoods(query: string): FoodEntry[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return FOOD_LIBRARY
    .filter(f => f.name.toLowerCase().includes(q) || f.category.toLowerCase().includes(q))
    .slice(0, 8);
}

export function searchFoodsByCategory(category: string): FoodEntry[] {
  const c = category.trim().toLowerCase();
  if (!c) return [];
  return FOOD_LIBRARY.filter(f => f.category.toLowerCase() === c);
}

/** Round a number to `decimals` places, trimming trailing zeros. */
const round = (v: number, decimals = 1): number =>
  Math.round(v * 10 ** decimals) / 10 ** decimals;

export interface FoodNutrition {
  calories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
}

/** Compute nutrition for `grams` of a food (per-100g scaling). */
export function nutritionFor(food: Pick<FoodEntry, 'kcalPer100g' | 'protein' | 'carbs' | 'fat'>, grams: number): FoodNutrition {
  const g = Math.max(0, Number.isFinite(grams) ? grams : 0);
  return {
    calories: round(food.kcalPer100g * (g / 100)),
    proteinG: round(food.protein * (g / 100)),
    carbsG: round(food.carbs * (g / 100)),
    fatG: round(food.fat * (g / 100)),
  };
}

/** Fetch from Open Food Facts — returns kcal/100g results or [] on failure */
export async function fetchCaloriesFromOFF(query: string): Promise<{ name: string; kcalPer100g: number }[]> {
  try {
    const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1&page_size=5&fields=product_name,nutriments`;
    const resp = await fetch(url);
    if (!resp.ok) return [];
    const json = await resp.json();
    return (json.products ?? [])
      .filter((p: any) => p.product_name && p.nutriments?.['energy-kcal_100g'])
      .map((p: any) => ({
        name: p.product_name,
        kcalPer100g: Math.round(p.nutriments['energy-kcal_100g']),
      }))
      .slice(0, 5);
  } catch {
    return [];
  }
}

/** Parse "150 g" / "1 L" / "500ml" into a grams approximation. */
export function parseWeightLabel(label: string | null | undefined): number | null {
  if (!label) return null;
  const m = /(\d+(?:[.,]\d+)?)\s*(kg|g|ml|l|cl|oz|lb)/i.exec(label.trim());
  if (!m) return null;
  const [, num, rawUnit] = m;
  if (!num || !rawUnit) return null;
  const n = parseFloat(num.replace(',', '.'));
  const unit = rawUnit.toLowerCase();
  switch (unit) {
    case 'kg': return n * 1000;
    case 'g': return n;
    case 'ml': return n; // water-weight approximation, fine for macro logging
    case 'cl': return n * 10;
    case 'l': return n * 1000;
    case 'oz': return n * 28.35;
    case 'lb': return n * 453.6;
    default: return null;
  }
}

/**
 * Look up one product barcode on Open Food Facts (EAN-13/UPC) and return it as
 * a normal FoodEntry so it drops straight into the meal log with real macros.
 */
export async function fetchFoodByBarcode(barcode: string): Promise<FoodEntry | null> {
  const code = barcode.trim().replace(/\D/g, '');
  if (code.length < 8) return null;
  try {
    const url = `https://world.openfoodfacts.org/api/v2/product/${encodeURIComponent(code)}.json`;
    const resp = await fetch(url);
    if (!resp.ok) return null;
    const json = await resp.json();
    const p = json?.product;
    if (!p || json?.status !== 1 || !p.product_name) return null;
    const n = p.nutriments ?? {};
    const kcal = n['energy-kcal_100g'] ?? n['energy_100g'];
    if (kcal == null) return null;
    const weight = parseWeightLabel(p.quantity ?? p.serving_size ?? null);
    const servingG = weight ?? 100;
    return {
      name: String(p.product_name).slice(0, 120),
      kcalPer100g: Math.round(Number(kcal)),
      protein: Math.round((Number(n['proteins_100g']) || 0) * 10) / 10,
      carbs: Math.round((Number(n['carbohydrates_100g']) || 0) * 10) / 10,
      fat: Math.round((Number(n['fat_100g']) || 0) * 10) / 10,
      category: 'Barcode',
      servingG,
      servingLabel: weight ? `~${weight} g (from barcode)` : '100 g',
    };
  } catch {
    return null;
  }
}
