import { useState } from 'react';

import { ModalBasicProps } from '@/app/interfaces/interface';

import Input from '../../atoms/Input/Input';
import Modal from '../../atoms/Modal/Modal';

export default function ModalCard({ opened, close }: ModalBasicProps) {
  const [word, setword] = useState('');
  const [translatedWord, settranslatedWord] = useState('');
  return (
    <Modal opened={opened} close={close}>
      <Input
        placeholder="Слово на лицевой стороне"
        value={word}
        mx="block mx-auto"
        onChange={(event) => setword(event.target.value)}
      />
      <Input
        placeholder="Слово на обороте карты"
        value={translatedWord}
        mx="block mx-auto"
        onChange={(event) => settranslatedWord(event.target.value)}
      />
    </Modal>
  );
}
