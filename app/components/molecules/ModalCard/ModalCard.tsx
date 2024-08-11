import { nanoid } from 'nanoid';

import { useState } from 'react';

import { ModalBasicProps } from '@/app/interfaces/interface';
import { useCardStore, useNameDeckStore } from '@/app/lib/store';

import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import Modal from '../../atoms/Modal/Modal';

export default function ModalCard({ opened, close }: ModalBasicProps) {
  const addCard = useCardStore((state) => state.addCard);
  const deck = useNameDeckStore((state) => state.deck);
  const [word, setWord] = useState('');
  const [translatedWord, settranslatedWord] = useState('');
  function handleKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    newWord: string,
    newTrasnaltedWord: string,
    title: string,
  ) {
    if (e.key === 'Enter' && word.length !== 0 && translatedWord.length !== 0) {
      e.preventDefault();
      addCard({ id: nanoid(), word: newWord, translatedWord: newTrasnaltedWord, nameDeck: title });
      setWord('');
      settranslatedWord('');
    }
  }
  function handleClick(newWord: string, newTrasnaltedWord: string, title: string) {
    addCard({ id: nanoid(), word: newWord, translatedWord: newTrasnaltedWord, nameDeck: title });
    setWord('');
    settranslatedWord('');
  }
  return (
    <Modal opened={opened} close={close}>
      <Input
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
          handleKeyDown(e, word, translatedWord, deck)
        }
        placeholder="Слово на лицевой стороне"
        value={word}
        mx="block mx-auto"
        onChange={(event) => setWord(event.target.value)}
      />
      <Input
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
          handleKeyDown(e, word, translatedWord, deck)
        }
        placeholder="Слово на обороте карты"
        value={translatedWord}
        mx="block mx-auto"
        onChange={(event) => settranslatedWord(event.target.value)}
      />
      <Button
        type="button"
        mt="mt-3 block mx-auto"
        onClick={() => handleClick(word, translatedWord, deck)}
      >
        Добавить
      </Button>
    </Modal>
  );
}
