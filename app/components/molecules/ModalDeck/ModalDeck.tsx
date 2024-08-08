import { useState } from 'react';
import { ModalBasicProps } from '@/app/interfaces/interface';
import { useDeckStore } from '@/app/lib/store';
import Input from '../../atoms/Input/Input';
import Modal from '../../atoms/Modal/Modal';
import Button from '../../atoms/Button/Button';
import { nanoid } from 'nanoid';

export default function ModalDeck({ opened, close }: ModalBasicProps) {
  const addDeck = useDeckStore((state) => state.addDeck);
  const [deck, setDeck] = useState('');

  function handleClick(newName: string) {
    addDeck({ id: nanoid(), name: newName });
    setDeck('');
  }

  return (
    <Modal opened={opened} close={close}>
      <Input
        placeholder="Название колоды"
        value={deck}
        mx="block mx-auto"
        onChange={(event) => setDeck(event.target.value)}
      />
      <Button type="button" mt="mt-3 block mx-auto" onClick={() => handleClick(deck)}>
        Добавить
      </Button>
    </Modal>
  );
}