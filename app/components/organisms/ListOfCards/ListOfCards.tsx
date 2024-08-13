'use client';

import { Trash2 } from 'lucide-react';

import { useState } from 'react';

import { useCardStore, useNameDeckStore } from '@/app/lib/store';

import Button from '../../atoms/Button/Button';
import ModalCard from '../../molecules/ModalCard/ModalCard';

export default function ListOfCards() {
  const [modalOpen, setModalOpen] = useState(false);
  const deck = useNameDeckStore((state) => state.deck);
  const cards = useCardStore((state) => state.cards);
  const filteredCards = cards.filter((card) => card.nameDeck === deck);
  const removeCard = useCardStore((state) => state.removeCard);
  const toggleTranslation = (index: number) => {
    const updatedCards = filteredCards.map((card, i) =>
      i === index ? { ...card, isShow: !card.isShow } : card,
    );
    useCardStore.setState({ cards: updatedCards });
  };

  return (
    <section>
      <div className="mt-3 flex flex-col gap-y-2 xs:grid xs:grid-cols-2 xs:gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6">
        {filteredCards.map((card, index) => (
          <div
            key={card.id}
            className="flex items-center justify-between rounded-md p-2 outline outline-2 outline-indigo-300"
          >
            <h2
              className="cursor-pointer transition-colors duration-300 ease-linear hover:text-indigo-600"
              onClick={() => toggleTranslation(index)}
            >
              {card.isShow ? card.translatedWord : card.word}
            </h2>
            <Trash2
              onClick={() => removeCard(card.id)}
              className="cursor-pointer stroke-red-500 transition duration-300 ease-linear hover:stroke-red-200"
            />
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
