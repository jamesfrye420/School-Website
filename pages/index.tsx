import type { NextPage } from 'next';
import EventCarousel from '../components/EventCarousel';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

const events: string[] = [
  'functions/0001.jpeg',

  'functions/0003.jpeg',

  'functions/0004.jpeg',

  'functions/0005.jpeg',

  'functions/0006.jpeg',

  'functions/0007.jpeg',
];

const Home: NextPage = () => {
  return (
    <div>
      <HeroSection />
      <EventCarousel events={events} />
      <Footer />
    </div>
  );
};

export default Home;
