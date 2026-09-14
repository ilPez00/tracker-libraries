/**
 * booksLibrary — book lookup for the reading tracker.
 * Combines a curated local library (instant, offline, includes page counts + genre)
 * with a live OpenLibrary search that returns richer metadata (ISBN, publish year,
 * subjects) so reading progress and "books read" are tracked precisely.
 */

export interface BookResult {
  title: string;
  author: string;
  totalPages: number | null;
  /** Curated genre tag (local entries only; remote entries use `subjects`). */
  genre?: string;
  isbn?: string;
  firstPublishedYear?: number | null;
  subjects?: string[];
}

const b = (title: string, author: string, totalPages: number, genre: string): BookResult =>
  ({ title, author, totalPages, genre });

/** Curated classics + popular titles with typical page counts, grouped by genre. */
export const BOOK_LIBRARY: BookResult[] = [
  // ── Tech & Code ──
  b('The Pragmatic Programmer', 'Andrew Hunt & David Thomas', 352, 'Tech & Code'),
  b('Clean Code', 'Robert C. Martin', 464, 'Tech & Code'),
  b('Clean Architecture', 'Robert C. Martin', 432, 'Tech & Code'),
  b('The Clean Coder', 'Robert C. Martin', 256, 'Tech & Code'),
  b('Design Patterns', 'Erich Gamma et al.', 395, 'Tech & Code'),
  b('Refactoring', 'Martin Fowler', 448, 'Tech & Code'),
  b('The Mythical Man-Month', 'Frederick P. Brooks', 322, 'Tech & Code'),
  b('Code Complete', 'Steve McConnell', 960, 'Tech & Code'),
  b('Introduction to Algorithms (CLRS)', 'Cormen, Leiserson, Rivest, Stein', 1312, 'Tech & Code'),
  b('Structure and Interpretation of Computer Programs', 'Abelson & Sussman', 657, 'Tech & Code'),
  b('Atomic Design', 'Brad Frost', 214, 'Tech & Code'),
  b('Designing Data-Intensive Applications', 'Martin Kleppmann', 616, 'Tech & Code'),
  b('Working Effectively with Legacy Code', 'Michael Feathers', 464, 'Tech & Code'),
  b('Grokking Algorithms', 'Aditya Bhargava', 256, 'Tech & Code'),
  b('Cracking the Coding Interview', 'Gayle Laakmann McDowell', 708, 'Tech & Code'),
  b('Eloquent JavaScript', 'Marijn Haverbeke', 472, 'Tech & Code'),
  b('Fluent Python', 'Luciano Ramalho', 792, 'Tech & Code'),
  b('Accelerate', 'Nicole Forsgren et al.', 248, 'Tech & Code'),
  b('The Phoenix Project', 'Gene Kim et al.', 368, 'Tech & Code'),

  // ── Business ──
  b('Zero to One', 'Peter Thiel', 210, 'Business'),
  b('The Lean Startup', 'Eric Ries', 336, 'Business'),
  b('Good to Great', 'Jim Collins', 300, 'Business'),
  b('The Hard Thing About Hard Things', 'Ben Horowitz', 304, 'Business'),
  b('Never Split the Difference', 'Chris Voss', 288, 'Business'),
  b('The Mom Test', 'Rob Fitzpatrick', 148, 'Business'),
  b('Hooked', 'Nir Eyal', 256, 'Business'),
  b('Blue Ocean Strategy', 'Chan Kim & Renée Mauborgne', 368, 'Business'),
  b('Measure What Matters', 'John Doerr', 320, 'Business'),
  b('The E-Myth Revisited', 'Michael Gerber', 288, 'Business'),
  b('Rich Dad Poor Dad', 'Robert T. Kiyosaki', 207, 'Business'),
  b('The Psychology of Money', 'Morgan Housel', 256, 'Business'),

  // ── Self-Improvement ──
  b('Atomic Habits', 'James Clear', 320, 'Self-Improvement'),
  b('Deep Work', 'Cal Newport', 304, 'Self-Improvement'),
  b('Digital Minimalism', 'Cal Newport', 304, 'Self-Improvement'),
  b('The Power of Habit', 'Charles Duhigg', 371, 'Self-Improvement'),
  b('The 7 Habits of Highly Effective People', 'Stephen Covey', 381, 'Self-Improvement'),
  b('How to Win Friends and Influence People', 'Dale Carnegie', 291, 'Self-Improvement'),
  b('How to Read a Book', 'Mortimer J. Adler', 426, 'Self-Improvement'),
  b('The Subtle Art of Not Giving a F*ck', 'Mark Manson', 224, 'Self-Improvement'),
  b('The 48 Laws of Power', 'Robert Greene', 452, 'Self-Improvement'),
  b('Mastery', 'Robert Greene', 352, 'Self-Improvement'),
  b('48 Things Successful People Do', 'Nigel Cumberland', 192, 'Self-Improvement'),
  b('Compound Effect', 'Darren Hardy', 194, 'Self-Improvement'),
  b('Ikigai', 'Héctor García & Francesc Miralles', 208, 'Self-Improvement'),
  b('The Four Agreements', 'Don Miguel Ruiz', 160, 'Self-Improvement'),
  b("Can't Hurt Me", 'David Goggins', 364, 'Self-Improvement'),
  b('Discipline Is Destiny', 'Ryan Holiday', 314, 'Self-Improvement'),
  b('Make Time', 'Jake Knapp & John Zeratsky', 304, 'Self-Improvement'),
  b('Essentialism', 'Greg McKeown', 260, 'Self-Improvement'),
  b('Tiny Habits', 'BJ Fogg', 320, 'Self-Improvement'),
  b('Feel-Good Productivity', 'Ali Abdaal', 352, 'Self-Improvement'),

  // ── Psychology ──
  b('Thinking, Fast and Slow', 'Daniel Kahneman', 499, 'Psychology'),
  b('Outliers', 'Malcolm Gladwell', 309, 'Psychology'),
  b('Blink', 'Malcolm Gladwell', 336, 'Psychology'),
  b('The Tipping Point', 'Malcolm Gladwell', 288, 'Psychology'),
  b('Mindset', 'Carol S. Dweck', 320, 'Psychology'),
  b('Grit', 'Angela Duckworth', 352, 'Psychology'),
  b('Range', 'David Epstein', 352, 'Psychology'),

  // ── Philosophy ──
  b('Meditations', 'Marcus Aurelius', 254, 'Philosophy'),
  b('The Daily Stoic', 'Ryan Holiday & Stephen Hanselman', 416, 'Philosophy'),
  b('Letters from a Stoic', 'Seneca', 254, 'Philosophy'),
  b('Nicomachean Ethics', 'Aristotle', 400, 'Philosophy'),
  b('Beyond Good and Evil', 'Friedrich Nietzsche', 240, 'Philosophy'),
  b('Thus Spoke Zarathustra', 'Friedrich Nietzsche', 352, 'Philosophy'),
  b('The Myth of Sisyphus', 'Albert Camus', 192, 'Philosophy'),
  b("Man's Search for Meaning", 'Viktor E. Frankl', 165, 'Philosophy'),
  b('Zen and the Art of Motorcycle Maintenance', 'Robert M. Pirsig', 412, 'Philosophy'),

  // ── History ──
  b('Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', 443, 'History'),
  b('Homo Deus', 'Yuval Noah Harari', 450, 'History'),
  b('Guns, Germs, and Steel', 'Jared Diamond', 480, 'History'),
  b('SPQR: A History of Ancient Rome', 'Mary Beard', 606, 'History'),
  b('The Silk Roads', 'Peter Frankopan', 656, 'History'),
  b('A People\'s History of the United States', 'Howard Zinn', 729, 'History'),

  // ── Science ──
  b('A Short History of Nearly Everything', 'Bill Bryson', 544, 'Science'),
  b('The Body', 'Bill Bryson', 464, 'Science'),
  b('Cosmos', 'Carl Sagan', 396, 'Science'),
  b('The Gene: An Intimate History', 'Siddhartha Mukherjee', 608, 'Science'),

  // ── Health ──
  b('Why We Sleep', 'Matthew Walker', 368, 'Health'),
  b('Breath', 'James Nestor', 288, 'Health'),
  b('Outlive', 'Peter Attia', 496, 'Health'),
  b('Lifespan', 'David Sinclair', 400, 'Health'),

  // ── Biography / Memoir ──
  b('Educated', 'Tara Westover', 352, 'Biography'),
  b('Born a Crime', 'Trevor Noah', 304, 'Biography'),
  b('Becoming', 'Michelle Obama', 448, 'Biography'),
  b('Shoe Dog', 'Phil Knight', 400, 'Biography'),
  b('Steve Jobs', 'Walter Isaacson', 656, 'Biography'),
  b('Elon Musk', 'Ashlee Vance', 400, 'Biography'),
  b('Benjamin Franklin', 'Walter Isaacson', 608, 'Biography'),
  b('Leonardo da Vinci', 'Walter Isaacson', 624, 'Biography'),
  b('Open', 'Andre Agassi', 384, 'Biography'),
  b('When Breath Becomes Air', 'Paul Kalanithi', 228, 'Biography'),
  b('Long Walk to Freedom', 'Nelson Mandela', 656, 'Biography'),

  // ── Classics ──
  b('Don Quixote', 'Miguel de Cervantes', 1023, 'Classics'),
  b('War and Peace', 'Leo Tolstoy', 1225, 'Classics'),
  b('Crime and Punishment', 'Fyodor Dostoevsky', 671, 'Classics'),
  b('Anna Karenina', 'Leo Tolstoy', 864, 'Classics'),
  b('The Brothers Karamazov', 'Fyodor Dostoevsky', 796, 'Classics'),
  b('Les Misérables', 'Victor Hugo', 1463, 'Classics'),
  b('The Count of Monte Cristo', 'Alexandre Dumas', 1276, 'Classics'),
  b('Pride and Prejudice', 'Jane Austen', 432, 'Classics'),
  b('Jane Eyre', 'Charlotte Brontë', 532, 'Classics'),
  b('Wuthering Heights', 'Emily Brontë', 416, 'Classics'),
  b('Great Expectations', 'Charles Dickens', 544, 'Classics'),
  b('A Tale of Two Cities', 'Charles Dickens', 544, 'Classics'),
  b('Oliver Twist', 'Charles Dickens', 608, 'Classics'),
  b('The Great Gatsby', 'F. Scott Fitzgerald', 180, 'Classics'),
  b('To Kill a Mockingbird', 'Harper Lee', 336, 'Classics'),
  b('Moby-Dick', 'Herman Melville', 635, 'Classics'),
  b('1984', 'George Orwell', 328, 'Classics'),
  b('Animal Farm', 'George Orwell', 141, 'Classics'),
  b('Brave New World', 'Aldous Huxley', 288, 'Classics'),
  b('Fahrenheit 451', 'Ray Bradbury', 194, 'Classics'),
  b('The Handmaid’s Tale', 'Margaret Atwood', 311, 'Classics'),
  b('Lord of the Flies', 'William Golding', 224, 'Classics'),
  b('The Catcher in the Rye', 'J.D. Salinger', 277, 'Classics'),
  b('One Hundred Years of Solitude', 'Gabriel García Márquez', 417, 'Classics'),
  b('Love in the Time of Cholera', 'Gabriel García Márquez', 348, 'Classics'),
  b('The Sound and the Fury', 'William Faulkner', 326, 'Classics'),
  b('Lolita', 'Vladimir Nabokov', 331, 'Classics'),
  b('The Old Man and the Sea', 'Ernest Hemingway', 127, 'Classics'),
  b('For Whom the Bell Tolls', 'Ernest Hemingway', 495, 'Classics'),
  b('A Farewell to Arms', 'Ernest Hemingway', 352, 'Classics'),
  b('The Sun Also Rises', 'Ernest Hemingway', 251, 'Classics'),
  b('East of Eden', 'John Steinbeck', 601, 'Classics'),
  b('The Grapes of Wrath', 'John Steinbeck', 464, 'Classics'),
  b('Dracula', 'Bram Stoker', 418, 'Classics'),
  b('No Longer Human', 'Osamu Dazai', 177, 'Classics'),
  b('The Metamorphosis', 'Franz Kafka', 96, 'Classics'),
  b('The Trial', 'Franz Kafka', 280, 'Classics'),
  b('Nausea', 'Jean-Paul Sartre', 178, 'Classics'),
  b('The Stranger', 'Albert Camus', 123, 'Classics'),
  b('The Plague', 'Albert Camus', 308, 'Classics'),

  // ── Fiction (modern) ──
  b('The Alchemist', 'Paulo Coelho', 208, 'Fiction'),
  b('The Little Prince', 'Antoine de Saint-Exupéry', 96, 'Fiction'),
  b('The Kite Runner', 'Khaled Hosseini', 371, 'Fiction'),
  b('Norwegian Wood', 'Haruki Murakami', 296, 'Fiction'),
  b('1Q84', 'Haruki Murakami', 944, 'Fiction'),
  b('Kafka on the Shore', 'Haruki Murakami', 505, 'Fiction'),
  b('The Road', 'Cormac McCarthy', 287, 'Fiction'),
  b('Fight Club', 'Chuck Palahniuk', 218, 'Fiction'),
  b('Stoner', 'John Williams', 288, 'Fiction'),
  b('Pachinko', 'Min Jin Lee', 490, 'Fiction'),
  b('Homegoing', 'Yaa Gyasi', 305, 'Fiction'),

  // ── Sci-Fi ──
  b('Dune', 'Frank Herbert', 412, 'Sci-Fi'),
  b('Neuromancer', 'William Gibson', 271, 'Sci-Fi'),
  b('Snow Crash', 'Neal Stephenson', 470, 'Sci-Fi'),
  b('The Three-Body Problem', 'Liu Cixin', 302, 'Sci-Fi'),
  b('Foundation', 'Isaac Asimov', 244, 'Sci-Fi'),
  b('I, Robot', 'Isaac Asimov', 224, 'Sci-Fi'),
  b('The Martian', 'Andy Weir', 369, 'Sci-Fi'),
  b('Project Hail Mary', 'Andy Weir', 476, 'Sci-Fi'),
  b('Ready Player One', 'Ernest Cline', 374, 'Sci-Fi'),
  b('The Hunger Games', 'Suzanne Collins', 374, 'Sci-Fi'),
  b('Hyperion', 'Dan Simmons', 482, 'Sci-Fi'),
  b("Ender's Game", 'Orson Scott Card', 324, 'Sci-Fi'),
  b('Solaris', 'Stanisław Lem', 204, 'Sci-Fi'),
  b('Red Rising', 'Pierce Brown', 382, 'Sci-Fi'),
  b('The Left Hand of Darkness', 'Ursula K. Le Guin', 304, 'Sci-Fi'),

  // ── Fantasy ──
  b('The Hobbit', 'J.R.R. Tolkien', 310, 'Fantasy'),
  b('The Lord of the Rings', 'J.R.R. Tolkien', 1178, 'Fantasy'),
  b('Harry Potter and the Sorcerer’s Stone', 'J.K. Rowling', 309, 'Fantasy'),
  b('Harry Potter and the Prisoner of Azkaban', 'J.K. Rowling', 435, 'Fantasy'),
  b('The Name of the Wind', 'Patrick Rothfuss', 662, 'Fantasy'),
  b('A Game of Thrones', 'George R.R. Martin', 694, 'Fantasy'),
  b('The Way of Kings', 'Brandon Sanderson', 1007, 'Fantasy'),
  b('Mistborn', 'Brandon Sanderson', 541, 'Fantasy'),
  b('The Lies of Locke Lamora', 'Scott Lynch', 475, 'Fantasy'),
  b('American Gods', 'Neil Gaiman', 465, 'Fantasy'),
  b('The Blade Itself', 'Joe Abercrombie', 519, 'Fantasy'),
  b('Circe', 'Madeline Miller', 393, 'Fantasy'),
  b('The Song of Achilles', 'Madeline Miller', 378, 'Fantasy'),

  // ── Horror / Thriller ──
  b('The Shining', 'Stephen King', 447, 'Horror'),
  b('It', 'Stephen King', 1138, 'Horror'),
  b('Carrie', 'Stephen King', 199, 'Horror'),
  b('Pet Sematary', 'Stephen King', 374, 'Horror'),
  b('House of Leaves', 'Mark Z. Danielewski', 709, 'Horror'),
  b('Bird Box', 'Josh Malerman', 262, 'Horror'),
  b('The Da Vinci Code', 'Dan Brown', 489, 'Thriller'),
  b('Angels & Demons', 'Dan Brown', 736, 'Thriller'),
  b('Gone Girl', 'Gillian Flynn', 415, 'Thriller'),
  b('The Girl with the Dragon Tattoo', 'Stieg Larsson', 465, 'Thriller'),
  b('The Silent Patient', 'Alex Michaelides', 352, 'Thriller'),
];

/** Genres in display order. */
export const BOOK_GENRES = [
  'Tech & Code', 'Business', 'Self-Improvement', 'Psychology', 'Philosophy',
  'History', 'Science', 'Health', 'Biography', 'Classics', 'Fiction',
  'Sci-Fi', 'Fantasy', 'Horror', 'Thriller',
];

/** Search local curated library first, then fall through to caller-merge with remote. */
export function searchLocalBooks(query: string): BookResult[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return BOOK_LIBRARY
    .filter(b => b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q))
    .slice(0, 6);
}

export function getBooksByGenre(genre: string): BookResult[] {
  if (!genre.trim()) return [];
  return BOOK_LIBRARY.filter(b => b.genre === genre);
}

/** Deterministic daily pick from a genre (stable within a day) — powers "read next". */
export function dailyBookSuggestion(genre?: string): BookResult | undefined {
  const pool = genre ? getBooksByGenre(genre) : BOOK_LIBRARY;
  if (pool.length === 0) return undefined;
  const dayIndex = Math.floor(Date.now() / 86_400_000);
  return pool[dayIndex % pool.length];
}

export async function searchBooks(query: string): Promise<BookResult[]> {
  const local = searchLocalBooks(query);
  const localTitles = new Set(local.map(b => b.title.toLowerCase()));
  try {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&fields=title,author_name,number_of_pages_median,isbn,first_publish_year,subject&limit=6`;
    const resp = await fetch(url);
    if (!resp.ok) return local;
    const json = await resp.json();
    const remote = (json.docs ?? [])
      .filter((d: any) => d.title)
      .map((d: any) => ({
        title: d.title,
        author: Array.isArray(d.author_name) ? d.author_name[0] : (d.author_name ?? 'Unknown'),
        totalPages: d.number_of_pages_median ?? null,
        isbn: Array.isArray(d.isbn) ? d.isbn[0] : undefined,
        firstPublishedYear: d.first_publish_year ?? null,
        subjects: Array.isArray(d.subject) ? d.subject.slice(0, 5) : undefined,
      }))
      .filter((b: BookResult) => !localTitles.has(b.title.toLowerCase()));
    return [...local, ...remote].slice(0, 8);
  } catch {
    return local;
  }
}
