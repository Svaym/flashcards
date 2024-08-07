"use client"

import { useState } from 'react';
import Button from '../../atoms/Button/Button';
import Container from '../../atoms/Container/Container';
import ModalDeck from '../../molecules/ModalDeck/ModalDeck';

export default function ListOfDecks() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <section className="bg-gray-200">
      <Container>
        <Button onClick={() => setModalOpen(!modalOpen)} mt="block mx-auto mt-3" type="button">
          Добавить колоду
        </Button>
        {modalOpen && <ModalDeck opened={modalOpen} close={() => setModalOpen(!modalOpen)} />}
      </Container>
    </section>
  );
}
