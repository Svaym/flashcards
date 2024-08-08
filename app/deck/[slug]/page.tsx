import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

import React from 'react';

import Container from '@/app/components/atoms/Container/Container';
import Header from '@/app/components/organisms/Header/Header';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section>
          <Container>
            <Link href="/home">
              <ArrowLeft className="cursor-pointer transition duration-300 ease-linear hover:stroke-gray-400" />
            </Link>
          </Container>
        </section>
      </main>
    </>
  );
}
