import { create } from 'zustand';

import { CardBasicProps, DeckBasicProps } from '../interfaces/interface';

interface DeckState {
  decks: DeckBasicProps[];
  addDeck: (newDeck: DeckBasicProps) => void;
  removeDeck: (id: string) => void;
  changeDeck: (newName: string) => void;
}
interface CardState {
  cards: CardBasicProps[];
  addCard: (newCard: CardBasicProps) => void;
  removeCard: (id: string) => void;
  changeCard: (newName: string) => void;
}

export const useDeckStore = create<DeckState>((set) => ({
  decks: [],
  addDeck: (newDeck) => set((state) => ({ decks: [...state.decks, newDeck] })),
  removeDeck: (id) => set((state) => ({ decks: state.decks.filter((deck) => deck.id !== id) })),
  changeDeck: (newName) =>
    set((state) => ({
      decks: state.decks.map((deck) => (deck.name === newName ? { ...deck, name: newName } : deck)),
    })),
}));

export const useCardStore = create<CardState>((set) => ({
  cards: [],
  addCard: (newCard) => set((state) => ({ cards: [...state.cards, newCard] })),
  removeCard: (id) => set((state) => ({ cards: state.cards.filter((card) => card.id !== id) })),
  changeCard: (newName) =>
    set((state) => ({
      cards: state.cards.map((card) => (card.name === newName ? { ...card, name: newName } : card)),
    })),
}));

interface NameDeckState {
  deck: string;
}
type Action = {
  updateDeck: (deck: NameDeckState['deck']) => void;
};
export const useNameDeckStore = create<NameDeckState & Action>((set) => ({
  deck: '',
  updateDeck: (deck) => set(() => ({ deck })),
}));
