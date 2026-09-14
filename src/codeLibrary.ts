/**
 * codeLibrary — lookup data for the Dev/Git tracker: programming languages and
 * git platforms. Powers the language select in the code log form so entries are
 * normalized (searchable, consistent spelling) instead of free-typed.
 */

export interface CodeLanguageEntry {
  name: string;
  paradigm: string;
}

export const CODE_LANGUAGES: CodeLanguageEntry[] = [
  { name: 'TypeScript',   paradigm: 'Static / OOP-FP' },
  { name: 'JavaScript',   paradigm: 'Dynamic / Multi' },
  { name: 'Python',       paradigm: 'Multi-paradigm' },
  { name: 'Rust',         paradigm: 'Systems / FP' },
  { name: 'Go',           paradigm: 'Systems / Concurrent' },
  { name: 'Java',         paradigm: 'OOP' },
  { name: 'Kotlin',       paradigm: 'OOP-FP' },
  { name: 'Swift',        paradigm: 'OOP-Protocol' },
  { name: 'C',            paradigm: 'Procedural' },
  { name: 'C++',          paradigm: 'Multi-paradigm' },
  { name: 'C#',           paradigm: 'OOP' },
  { name: 'Ruby',         paradigm: 'Dynamic / OOP' },
  { name: 'PHP',          paradigm: 'Dynamic / Web' },
  { name: 'Elixir',       paradigm: 'Functional' },
  { name: 'Haskell',      paradigm: 'Pure Functional' },
  { name: 'Scala',        paradigm: 'FP-OOP Hybrid' },
  { name: 'Clojure',      paradigm: 'Lisp / Functional' },
  { name: 'Dart',         paradigm: 'OOP / Mobile' },
  { name: 'Lua',          paradigm: 'Embeddable Scripting' },
  { name: 'Zig',          paradigm: 'Systems' },
  { name: 'OCaml',        paradigm: 'ML Family' },
  { name: 'F#',           paradigm: 'ML on .NET' },
  { name: 'SQL',          paradigm: 'Declarative Data' },
  { name: 'Bash / Shell', paradigm: 'Scripting' },
  { name: 'PowerShell',   paradigm: 'Shell / Objects' },
  { name: 'HTML/CSS',     paradigm: 'Markup & Styling' },
  { name: 'Solidity',     paradigm: 'Smart Contracts' },
  { name: 'Julia',        paradigm: 'Scientific Computing' },
  { name: 'R',            paradigm: 'Statistics' },
  { name: 'Assembly',     paradigm: 'Low-level' },
];

export const CODE_PLATFORMS = [
  'GitHub', 'GitLab', 'Bitbucket', 'Codeberg', 'Gitea',
  'Self-hosted Git', 'Local only', 'Other',
] as const;

/** Activity kinds logged by the code tracker rows. */
export const CODE_ACTIVITY_KINDS = [
  'Feature', 'Bugfix', 'Refactor', 'Review', 'Docs',
  'Tests', 'CI/CD', 'Research / Spike', 'Ops / Deploy',
] as const;

export function searchCodeLanguages(query: string): CodeLanguageEntry[] {
  if (!query.trim()) return CODE_LANGUAGES.slice(0, 6);
  const q = query.toLowerCase();
  return CODE_LANGUAGES
    .filter(l => l.name.toLowerCase().includes(q) || l.paradigm.toLowerCase().includes(q))
    .slice(0, 8);
}
