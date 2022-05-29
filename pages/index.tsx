import type { NextPage } from 'next';
import Head from 'next/head';
import EventCarousel from '../components/EventCarousel';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

import { images, Description } from '../components/Description';

const events: string[] = [
  'functions/0003.jpg',

  'functions/0004.jpeg',

  'functions/0005.jpeg',

  'functions/0006.jpeg',

  'functions/0007.jpeg',

  'functions/0008.jpeg',
];

const descriptionImages: images = {
  principal: 'principal.jpeg',
  manager: 'manager.jpeg',
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div>
        <HeroSection />
        <img src="school.jpeg" alt="image" className="index__image" />
        <EventCarousel events={events} />
        <Description images={descriptionImages} />
        <Footer />
      </div>
    </>
  );
};

export default Home;
