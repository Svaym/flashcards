import { ReactNode } from 'react';

export interface ChildrenProps {
  children: ReactNode;
}
export interface ModalBasicProps {
  opened: boolean;
  close: () => void;
}
export interface DeckBasicProps {
  id: string;
  name: string;
}
export interface CardBasicProps {
  id: string;
  word: string;
  isShow: false;
  translatedWord: string;
  nameDeck: string;
}
