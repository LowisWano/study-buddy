import data from '@/data/decks.json'

export interface Flashcard {
  term: string;
  definition: string;
}

export interface Deck {
  title: string;
  flashcards: Flashcard[];
  lastOpened: string;
}

export function getDecks(): Deck[] {
  return Object.entries(data).map(([title, deck]) => ({
    title,
    flashcards: deck.flashcards,
    lastOpened: deck.lastOpened
  }));
}