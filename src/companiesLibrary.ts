export interface CompanyEntry { name: string; sector: string }

export const COMPANY_LIBRARY: CompanyEntry[] = [
  // Tech
  { name: 'Google',       sector: 'Tech' }, { name: 'Apple',        sector: 'Tech' },
  { name: 'Microsoft',    sector: 'Tech' }, { name: 'Meta',         sector: 'Tech' },
  { name: 'Amazon',       sector: 'Tech' }, { name: 'Netflix',      sector: 'Tech' },
  { name: 'Nvidia',       sector: 'Tech' }, { name: 'Salesforce',   sector: 'Tech' },
  { name: 'Stripe',       sector: 'Tech' }, { name: 'Spotify',      sector: 'Tech' },
  { name: 'Airbnb',       sector: 'Tech' }, { name: 'Uber',         sector: 'Tech' },
  { name: 'Palantir',     sector: 'Tech' }, { name: 'OpenAI',       sector: 'Tech' },
  { name: 'Anthropic',    sector: 'Tech' }, { name: 'DeepMind',     sector: 'Tech' },
  { name: 'Notion',       sector: 'Tech' }, { name: 'Figma',        sector: 'Tech' },
  { name: 'Canva',        sector: 'Tech' }, { name: 'Twilio',       sector: 'Tech' },
  { name: 'Cloudflare',   sector: 'Tech' }, { name: 'Vercel',       sector: 'Tech' },
  { name: 'HashiCorp',    sector: 'Tech' }, { name: 'Databricks',   sector: 'Tech' },
  { name: 'Adobe',        sector: 'Tech' }, { name: 'Atlassian',    sector: 'Tech' },
  { name: 'GitLab',       sector: 'Tech' }, { name: 'GitHub',       sector: 'Tech' },
  { name: 'Docker',       sector: 'Tech' }, { name: 'MongoDB',      sector: 'Tech' },
  { name: 'Elastic',      sector: 'Tech' }, { name: 'Supabase',     sector: 'Tech' },
  { name: 'Samsung',      sector: 'Tech' }, { name: 'Sony',         sector: 'Tech' },
  { name: 'TikTok / ByteDance', sector: 'Tech' }, { name: 'Tencent', sector: 'Tech' },
  // AI Labs
  { name: 'Hugging Face', sector: 'AI' },  { name: 'Mistral AI',   sector: 'AI' },
  { name: 'Perplexity',   sector: 'AI' },  { name: 'Cohere',       sector: 'AI' },
  { name: 'xAI',          sector: 'AI' },  { name: 'Scale AI',     sector: 'AI' },
  { name: 'Stability AI', sector: 'AI' },  { name: 'Runway',       sector: 'AI' },
  // Finance
  { name: 'Goldman Sachs',sector: 'Finance' }, { name: 'JP Morgan',   sector: 'Finance' },
  { name: 'BlackRock',    sector: 'Finance' }, { name: 'Morgan Stanley',sector: 'Finance' },
  { name: 'Revolut',      sector: 'Finance' }, { name: 'N26',          sector: 'Finance' },
  { name: 'Wise',         sector: 'Finance' }, { name: 'Klarna',       sector: 'Finance' },
  { name: 'Mastercard',   sector: 'Finance' }, { name: 'Adyen',        sector: 'Finance' },
  { name: 'Intesa Sanpaolo', sector: 'Finance' }, { name: 'UniCredit', sector: 'Finance' },
  { name: 'Allianz',      sector: 'Finance' }, { name: 'AXA',          sector: 'Insurance' },
  { name: 'Generali',     sector: 'Insurance' }, { name: 'Zurich',    sector: 'Insurance' },
  // Consulting
  { name: 'McKinsey',     sector: 'Consulting' }, { name: 'BCG',        sector: 'Consulting' },
  { name: 'Bain',         sector: 'Consulting' }, { name: 'Deloitte',   sector: 'Consulting' },
  { name: 'Accenture',    sector: 'Consulting' }, { name: 'PwC',        sector: 'Consulting' },
  { name: 'KPMG',         sector: 'Consulting' }, { name: 'EY',         sector: 'Consulting' },
  // Healthcare
  { name: 'Pfizer',       sector: 'Healthcare' }, { name: 'Novartis',   sector: 'Healthcare' },
  { name: 'Johnson & Johnson', sector: 'Healthcare' }, { name: 'Roche', sector: 'Healthcare' },
  { name: 'Sanofi',       sector: 'Healthcare' }, { name: 'AstraZeneca', sector: 'Healthcare' },
  { name: 'Moderna',      sector: 'Healthcare' }, { name: 'BioNTech',   sector: 'Healthcare' },
  { name: 'Medtronic',    sector: 'Healthcare' }, { name: 'Siemens Healthineers', sector: 'Healthcare' },
  // Media
  { name: 'BBC',          sector: 'Media' }, { name: 'Guardian',    sector: 'Media' },
  { name: 'Disney',       sector: 'Media' }, { name: 'Warner Bros', sector: 'Media' },
  { name: 'RAI',          sector: 'Media' }, { name: 'Sky',         sector: 'Media' },
  // Gaming
  { name: 'Nintendo',     sector: 'Gaming' }, { name: 'Valve',       sector: 'Gaming' },
  { name: 'Riot Games',   sector: 'Gaming' }, { name: 'Epic Games',  sector: 'Gaming' },
  { name: 'Ubisoft',      sector: 'Gaming' }, { name: 'EA',          sector: 'Gaming' },
  { name: 'Rockstar Games', sector: 'Gaming' }, { name: 'FromSoftware', sector: 'Gaming' },
  { name: 'CD Projekt Red', sector: 'Gaming' }, { name: 'Blizzard',  sector: 'Gaming' },
  { name: 'Supercell',    sector: 'Gaming' }, { name: 'Xbox Game Studios', sector: 'Gaming' },
  // Automotive & Industrial
  { name: 'Tesla',        sector: 'Automotive' }, { name: 'BMW',        sector: 'Automotive' },
  { name: 'Ferrari',      sector: 'Automotive' }, { name: 'Mercedes-Benz', sector: 'Automotive' },
  { name: 'Audi',         sector: 'Automotive' }, { name: 'Volkswagen', sector: 'Automotive' },
  { name: 'Stellantis',   sector: 'Automotive' }, { name: 'Toyota',     sector: 'Automotive' },
  { name: 'Porsche',      sector: 'Automotive' }, { name: 'Rivian',     sector: 'Automotive' },
  { name: 'SpaceX',       sector: 'Aerospace' }, { name: 'Airbus',     sector: 'Aerospace' },
  { name: 'Boeing',       sector: 'Aerospace' }, { name: 'Leonardo',   sector: 'Aerospace' },
  { name: 'Siemens',      sector: 'Industrial' }, { name: 'Bosch',      sector: 'Industrial' },
  { name: 'GE',           sector: 'Industrial' }, { name: 'Caterpillar', sector: 'Industrial' },
  // Energy
  { name: 'Enel',         sector: 'Energy' }, { name: 'Eni',         sector: 'Energy' },
  { name: 'Shell',        sector: 'Energy' }, { name: 'BP',          sector: 'Energy' },
  { name: 'NextEra',      sector: 'Energy' }, { name: 'Vestas',      sector: 'Energy' },
  // Retail & FMCG
  { name: 'IKEA',         sector: 'Retail' }, { name: 'Zara / Inditex', sector: 'Retail' },
  { name: 'Decathlon',    sector: 'Retail' }, { name: 'Nike',        sector: 'Retail' },
  { name: 'Adidas',       sector: 'Retail' }, { name: 'Lidl',        sector: 'Retail' },
  { name: "L'Oréal",      sector: 'FMCG' },       { name: 'Unilever',   sector: 'FMCG' },
  { name: 'Nestlé',       sector: 'FMCG' },       { name: 'Ferrero',    sector: 'FMCG' },
  { name: 'Barilla',      sector: 'FMCG' },       { name: 'Red Bull',   sector: 'FMCG' },
  // Telecom
  { name: 'Vodafone',     sector: 'Telecom' }, { name: 'TIM',         sector: 'Telecom' },
  { name: 'Fastweb',      sector: 'Telecom' }, { name: 'Iliad',       sector: 'Telecom' },
];

export function searchCompanies(query: string): CompanyEntry[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return COMPANY_LIBRARY.filter(c => c.name.toLowerCase().includes(q)).slice(0, 8);
}
