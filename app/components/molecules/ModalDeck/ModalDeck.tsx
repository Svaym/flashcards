import { useState } from 'react';

import { ModalBasicProps } from '@/app/interfaces/interface';

import Input from '../../atoms/Input/Input';
import Modal from '../../atoms/Modal/Modal';

export default function ModalDeck({ opened, close }: ModalBasicProps) {
  const [deck, setDeck] = useState('');
  return (
    <Modal opened={opened} close={close}>
      <Input
        placeholder="Название колоды"
        value={deck}
        mx="block mx-auto"
        onChange={(event) => setDeck(event.target.value)}
      />
    </Modal>
  );
}
