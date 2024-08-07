import React from 'react';

import Header from '../components/organisms/Header/Header';
import ListOfDecks from '../components/organisms/ListOfDecks/ListOfDecks';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <ListOfDecks />
      </main>
    </>
  );
}
