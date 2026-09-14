import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as lib from '../src/index.ts';

// Every exported *_LIBRARY / *_CATEGORIES constant must be a non-empty array.
// Guards against a data file being emptied or a barrel export going stale.
test('every dataset is a non-empty array', () => {
  const datasets = Object.entries(lib).filter(([, v]) => Array.isArray(v));
  assert.ok(datasets.length >= 20, `expected >=20 datasets, got ${datasets.length}`);
  for (const [name, value] of datasets) {
    assert.ok((value as unknown[]).length > 0, `${name} is empty`);
  }
});

test('search returns matches and is case-insensitive', () => {
  assert.ok(lib.searchExercises('bench').length > 0);
  assert.ok(lib.searchExercises('BENCH').length > 0);
  assert.equal(lib.searchExercises('bench').length, lib.searchExercises('BENCH').length);
  assert.ok(lib.searchFoods('chicken').length > 0);
});

test('search on nonsense returns empty, not everything', () => {
  assert.equal(lib.searchExercises('zzzzqqqq').length, 0);
  assert.equal(lib.searchFoods('zzzzqqqq').length, 0);
});

test('parseWeightLabel converts units to grams', () => {
  assert.equal(lib.parseWeightLabel('150 g'), 150);
  assert.equal(lib.parseWeightLabel('1kg'), 1000);
  assert.equal(lib.parseWeightLabel('500ml'), 500);
  assert.equal(lib.parseWeightLabel('1,5 kg'), 1500);   // comma decimal
  assert.equal(lib.parseWeightLabel('no digits'), null);
  assert.equal(lib.parseWeightLabel(null), null);
  assert.equal(lib.parseWeightLabel(undefined), null);
});
