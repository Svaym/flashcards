"use client"

import { useState } from 'react';
import { useDeckStore } from '@/app/lib/store';
import Button from '../../atoms/Button/Button';
import Container from '../../atoms/Container/Container';
import ModalDeck from '../../molecules/ModalDeck/ModalDeck';

export default function ListOfDecks() {
  const [modalOpen, setModalOpen] = useState(false)
  const decks = useDeckStore(((state) => state.decks))
  return (
    <section className="bg-gray-200">
      <Container>
        {decks.map((deck) => (
          <div key={deck.id} className="bg-red-500">
            <h2>
              {deck.name}
            </h2>
          </div>
        ))}
        <Button onClick={() => setModalOpen(!modalOpen)} mt="block mx-auto mt-3" type="button">
          Добавить колоду
        </Button>
        {modalOpen && <ModalDeck opened={modalOpen} close={() => setModalOpen(!modalOpen)} />}
      </Container>
    </section>
  );
}
