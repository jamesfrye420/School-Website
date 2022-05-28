import type { NextPage } from 'next';
import EventCarousel from '../components/EventCarousel';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { events } from '../models/events';

const events: events[] = [
  {
    url: 'functions/0001.jpeg',
    functionName: 'Function 1',
  },
  {
    url: 'functions/0002.jpeg',
    functionName: 'Function 2',
  },
  {
    url: 'functions/0003.jpeg',
    functionName: 'Function 3',
  },
  {
    url: 'functions/0004.jpeg',
    functionName: 'Function 4',
  },
  {
    url: 'functions/0005.jpeg',
    functionName: 'Function 5',
  },
  {
    url: 'functions/0006.jpeg',
    functionName: 'Function 6',
  },
  {
    url: 'functions/0007.jpeg',
    functionName: 'Function 7',
  },
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
