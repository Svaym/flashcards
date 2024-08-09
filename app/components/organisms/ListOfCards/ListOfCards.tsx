'use client';

import { useState } from 'react';

import { useCardStore, useNameDeckStore } from '@/app/lib/store';

import Button from '../../atoms/Button/Button';
import ModalCard from '../../molecules/ModalCard/ModalCard';

export default function ListOfCards() {
  const [modalOpen, setModalOpen] = useState(false);
  const deck = useNameDeckStore((state) => state.deck);
  const cards = useCardStore((state) => state.cards);
  const filteredCards = cards.filter((card) => card.nameDeck === deck);
  return (
    <section>
      <div>
        {filteredCards.map((card) => (
          <div className="bg-purple-500">
            <h2>{card.word}</h2>
            <h2>{card.translatedWord}</h2>
            <h2>{card.nameDeck}</h2>
          </div>
        ))}
      </div>
      <Button onClick={() => setModalOpen(!modalOpen)} mt="block mx-auto mt-3" type="button">
        Добавить карту
      </Button>
      {modalOpen && <ModalCard opened={modalOpen} close={() => setModalOpen(!modalOpen)} />}
    </section>
  );
}
