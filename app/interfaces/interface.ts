import { ReactNode } from 'react';

export interface ChildrenProps {
  children: ReactNode;
}
export interface ModalBasicProps {
  opened: boolean;
  close: () => void;
}
