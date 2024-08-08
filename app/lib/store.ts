import { create } from 'zustand';
import { DeckBasicProps } from '../interfaces/interface';

interface DeckState {
  decks: DeckBasicProps[];
  addDeck: (newDeck: DeckBasicProps) => void;
  removeDeck: (id: string) => void;
  changeDeck: (newName: string) => void;
}

export const useDeckStore = create<DeckState>((set) => ({
  decks: [],
  addDeck: (newDeck) => set((state) => ({ decks: [...state.decks, newDeck] })),
  removeDeck: (id) => set((state) => ({ decks: state.decks.filter((deck) => deck.id !== id) })),
  changeDeck: (newName) => set((state) => ({ decks: state.decks.map((deck) => deck.name === newName ? { ...deck, name: newName } : deck) })),
}));
