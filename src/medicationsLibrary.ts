export interface MedicationEntry {
  name: string;
  category: string;
  typicalDose?: string;
}

export const MEDICATION_LIBRARY: MedicationEntry[] = [
  // Vitamins
  { name: 'Vitamin D3', category: 'Vitamins', typicalDose: '1000-4000 IU' },
  { name: 'Vitamin B12', category: 'Vitamins', typicalDose: '500-1000 mcg' },
  { name: 'Vitamin C', category: 'Vitamins', typicalDose: '500-1000 mg' },
  { name: 'Vitamin B Complex', category: 'Vitamins', typicalDose: '1 tablet' },
  { name: 'Vitamin K2', category: 'Vitamins', typicalDose: '90-180 mcg' },
  { name: 'Vitamin A', category: 'Vitamins', typicalDose: '700-900 mcg' },
  { name: 'Vitamin E', category: 'Vitamins', typicalDose: '15 mg' },
  { name: 'Folic Acid', category: 'Vitamins', typicalDose: '400-800 mcg' },
  { name: 'Biotin', category: 'Vitamins', typicalDose: '30-100 mcg' },
  { name: 'Multivitamin', category: 'Vitamins', typicalDose: '1 tablet' },

  // Minerals
  { name: 'Magnesium Glycinate', category: 'Minerals', typicalDose: '200-400 mg' },
  { name: 'Magnesium Citrate', category: 'Minerals', typicalDose: '200-400 mg' },
  { name: 'Zinc Picolinate', category: 'Minerals', typicalDose: '15-30 mg' },
  { name: 'Iron', category: 'Minerals', typicalDose: '15-30 mg' },
  { name: 'Calcium', category: 'Minerals', typicalDose: '500-1000 mg' },
  { name: 'Potassium', category: 'Minerals', typicalDose: '100-500 mg' },
  { name: 'Selenium', category: 'Minerals', typicalDose: '55-200 mcg' },
  { name: 'Iodine', category: 'Minerals', typicalDose: '150 mcg' },
  { name: 'Chromium', category: 'Minerals', typicalDose: '200-400 mcg' },
  { name: 'Copper', category: 'Minerals', typicalDose: '2 mg' },

  // Supplements
  { name: 'Whey Protein', category: 'Supplements', typicalDose: '25-50 g' },
  { name: 'Casein Protein', category: 'Supplements', typicalDose: '25-50 g' },
  { name: 'Creatine Monohydrate', category: 'Supplements', typicalDose: '3-5 g' },
  { name: 'Omega-3 Fish Oil', category: 'Supplements', typicalDose: '1000-2000 mg' },
  { name: 'Probiotic', category: 'Supplements', typicalDose: '1 capsule' },
  { name: 'Collagen Peptides', category: 'Supplements', typicalDose: '10-20 g' },
  { name: 'BCAAs', category: 'Supplements', typicalDose: '5-10 g' },
  { name: 'L-Glutamine', category: 'Supplements', typicalDose: '5-10 g' },
  { name: 'L-Carnitine', category: 'Supplements', typicalDose: '500-2000 mg' },
  { name: 'Ashwagandha', category: 'Supplements', typicalDose: '300-600 mg' },
  { name: 'Rhodiola Rosea', category: 'Supplements', typicalDose: '200-400 mg' },
  { name: 'L-Theanine', category: 'Supplements', typicalDose: '100-200 mg' },
  { name: 'Melatonin', category: 'Supplements', typicalDose: '1-5 mg' },
  { name: '5-HTP', category: 'Supplements', typicalDose: '50-100 mg' },
  { name: 'CBD Oil', category: 'Supplements', typicalDose: '10-50 mg' },
  { name: 'Electrolytes', category: 'Supplements', typicalDose: '1 serving' },
  { name: 'Pre-Workout', category: 'Supplements', typicalDose: '1 scoop' },
  { name: 'Taurine', category: 'Supplements', typicalDose: '500-2000 mg' },
  { name: 'NAC', category: 'Supplements', typicalDose: '600-1200 mg' },

  // OTC Medications
  { name: 'Ibuprofen', category: 'OTC', typicalDose: '200-400 mg' },
  { name: 'Paracetamol (Acetaminophen)', category: 'OTC', typicalDose: '500-1000 mg' },
  { name: 'Aspirin', category: 'OTC', typicalDose: '75-325 mg' },
  { name: 'Naproxen', category: 'OTC', typicalDose: '220-440 mg' },
  { name: 'Loratadine', category: 'OTC', typicalDose: '10 mg' },
  { name: 'Cetirizine', category: 'OTC', typicalDose: '10 mg' },
  { name: 'Omeprazole', category: 'OTC', typicalDose: '20 mg' },
  { name: 'Ranitidine', category: 'OTC', typicalDose: '75-150 mg' },
  { name: 'Loperamide', category: 'OTC', typicalDose: '2-4 mg' },
  { name: 'Bismuth Subsalicylate', category: 'OTC', typicalDose: '525 mg' },
  { name: 'Dextromethorphan', category: 'OTC', typicalDose: '15-30 mg' },
  { name: 'Caffeine Pill', category: 'OTC', typicalDose: '100-200 mg' },
  { name: 'Nicotine Gum', category: 'OTC', typicalDose: '2-4 mg' },

  // Prescription (common)
  { name: 'Metformin', category: 'Prescription', typicalDose: '500-2000 mg' },
  { name: 'Levothyroxine', category: 'Prescription', typicalDose: '25-200 mcg' },
  { name: 'Omeprazole (Rx)', category: 'Prescription', typicalDose: '20-40 mg' },
  { name: 'Atorvastatin', category: 'Prescription', typicalDose: '10-80 mg' },
  { name: 'Lisinopril', category: 'Prescription', typicalDose: '5-40 mg' },
  { name: 'Metoprolol', category: 'Prescription', typicalDose: '25-200 mg' },
  { name: 'Sertraline', category: 'Prescription', typicalDose: '50-200 mg' },
  { name: 'Fluoxetine', category: 'Prescription', typicalDose: '20-80 mg' },
  { name: 'Escitalopram', category: 'Prescription', typicalDose: '10-20 mg' },
  { name: 'Bupropion', category: 'Prescription', typicalDose: '150-300 mg' },
  { name: 'Methylphenidate', category: 'Prescription', typicalDose: '10-60 mg' },
  { name: 'Modafinil', category: 'Prescription', typicalDose: '100-200 mg' },
  { name: 'Albuterol (Inhaler)', category: 'Prescription', typicalDose: '1-2 puffs' },
];

export function searchMedications(query: string): MedicationEntry[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return MEDICATION_LIBRARY.filter(
    m => m.name.toLowerCase().includes(q) || m.category.toLowerCase().includes(q)
  ).slice(0, 8);
}

export function searchMedicationsByCategory(category: string): MedicationEntry[] {
  if (!category.trim()) return [];
  const c = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
  return MEDICATION_LIBRARY.filter(m => m.category === c);
}
