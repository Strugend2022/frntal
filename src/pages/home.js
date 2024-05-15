import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import About from '../components/about';
import Deals from '../components/deals';
import Services from '../components/services';
import Review from '../components/review';
import Insta from '../components/insta';
import Form from '../components/form';
import scrollIcon from '../assets/icons/topArrowIcon.png';

import Footer from '@/components/footer';
import Hero from '@/components/hero';

const HomePage = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Frntal</title>
        <meta name="description" content="Struggling to find employee housing? Frntal simplifies corporate relocations & temporary stays. We find furnished apartments & homes for your team, ensuring a smooth transition. Stress-free rentals, happy employees." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="dark:bg-bgDark">
        <Hero
          address="Chirag Dilli, South Delhi 110017"
          phone="+91 84260 25211"
          email="hello@frntal.com"
        />

        <About
          cardTitle1="1.5 years"
          cardSubText1="in business"
          cardTitle2="1000"
          cardSubText2="property brokered"
          cardTitle3="$10K"
          cardSubText3="transactions"
        />
        <Services />
        <Deals />
        <Review />
        <Insta />
        <Form />
        <Footer />
        {showButton && (
          <div className="fixed bottom-24 right-10 z-50">
            <button
              onClick={handleScrollToTop}
              className="bg-slate-100 rounded shadow-xl overflow-visible"
            >
              <Image src={scrollIcon} alt="scroll button" />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
