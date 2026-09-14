# tracker-libraries

Curated reference data for the trackers people actually build: exercises,
foods, books, habits, medications, languages, games, expenses and more.

**2,439 records across 25 datasets. Zero runtime dependencies.** Plain
TypeScript arrays plus small search helpers — no database, no network, no
service to stand up. Import it and render a picker.

```bash
npm install tracker-libraries
```

```ts
import { searchExercises, searchFoods, nutritionFor, parseWeightLabel } from 'tracker-libraries';

searchExercises('bench');        // [{ name: 'Bench Press', muscle: 'Chest', equipment: 'Barbell' }, ...]
searchFoods('chicken');          // [{ name: 'Chicken Breast (cooked)', kcalPer100g: 165, protein: 31, ... }, ...]
parseWeightLabel('1,5 kg');      // 1500   — grams, comma decimals included
```

Every dataset is exported as a named constant; every search helper is
case-insensitive and returns `[]` on no match rather than the whole list.

## Datasets

| Export | Records |
|---|---|
| `EXERCISE_LIBRARY` | 484 |
| `FOOD_LIBRARY` | 462 |
| `BOOK_LIBRARY` | 182 |
| `COMPANY_LIBRARY` | 136 |
| `SUBJECT_LIBRARY` | 110 |
| `CARDIO_ACTIVITY_LIBRARY` | 107 |
| `GAME_LIBRARY` | 107 |
| `ASSET_LIBRARY` | 90 |
| `JOURNAL_PROMPTS` | 75 |
| `LANGUAGE_LIBRARY` | 69 |
| `HABIT_LIBRARY` | 65 |
| `MEDICATION_LIBRARY` | 65 |
| `BUCKET_LIST_LIBRARY` | 64 |
| `SOCIAL_ACTIVITY_LIBRARY` | 58 |
| `INSTRUMENT_LIBRARY` | 54 |
| `PROJECT_LIBRARY` | 51 |
| `OUTDOOR_LOCATION_LIBRARY` | 48 |
| `MERCHANT_LIBRARY` | 45 |
| `FOCUS_TASK_LIBRARY` | 44 |
| `EXPENSE_CATEGORIES` | 43 |
| `CODE_LANGUAGES` | 30 |
| `FOOD_CATEGORIES` | 18 |
| `BOOK_GENRES` | 15 |
| `CODE_ACTIVITY_KINDS` | 9 |
| `CODE_PLATFORMS` | 8 |

## Why

Autocomplete data is the unglamorous half of every tracking app, and it is
nearly always rebuilt from scratch or scraped from a source with terms
attached. This is that half, extracted from a shipping app and released on
its own so the next person can skip it.

## Development

```bash
npm install
npm test     # tsc --noEmit + node:test
npm run build
```

## Caveats

Nutrition values are approximations suitable for macro logging, not clinical
use. `parseWeightLabel` treats millilitres as grams, which is a water-weight
approximation — correct for water, close enough for most logged liquids, wrong
for oils.

`MEDICATION_LIBRARY` is a list of common medication names for autocomplete. It
carries no dosage or interaction data and must not be used to make any
clinical decision.

## License

MIT — see [LICENSE](LICENSE).

Extracted from [Praxis](https://praxisweb.xyz).
