import Head from 'next/head';
import HomePage from './home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Frntal</title>
        <meta name="description" content="Struggling to find employee housing? Frntal simplifies corporate relocations & temporary stays. We find furnished apartments & homes for your team, ensuring a smooth transition. Stress-free rentals, happy employees." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <HomePage />
        </div>
      </main>
    </>
  );
}
