'use client';

import { Trash2 } from 'lucide-react';
import Link from 'next/link';

import { useState } from 'react';

import { useDeckStore } from '@/app/lib/store';

import Button from '../../atoms/Button/Button';
import Container from '../../atoms/Container/Container';
import Title from '../../atoms/Title/Title';
import ModalDeck from '../../molecules/ModalDeck/ModalDeck';

export default function ListOfDecks() {
  const [modalOpen, setModalOpen] = useState(false);
  const decks = useDeckStore((state) => state.decks);
  const removeDeck = useDeckStore((state) => state.removeDeck);
  return (
    <section className="bg-gray-200">
      <Container>
        <div className="flex flex-col gap-y-2 xs:grid xs:grid-cols-2 xs:gap-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xxl:grid-cols-6">
          {decks.map((deck) => (
            <div
              key={deck.id}
              className="flex items-center justify-between rounded-md p-2 outline outline-2 outline-indigo-300"
            >
              <Link href={`/deck/${deck.name}`}>
                <Title>{deck.name}</Title>
              </Link>
              <Trash2
                onClick={() => removeDeck(deck.id)}
                className="cursor-pointer stroke-red-500 transition duration-300 ease-linear hover:stroke-red-200"
              />
            </div>
          ))}
        </div>
        <Button onClick={() => setModalOpen(!modalOpen)} mt="block mx-auto mt-3" type="button">
          Добавить колоду
        </Button>
        {modalOpen && <ModalDeck opened={modalOpen} close={() => setModalOpen(!modalOpen)} />}
      </Container>
    </section>
  );
}
