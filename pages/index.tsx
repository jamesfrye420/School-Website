import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { events, EventCarousel } from '../components/EventCarousel';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

import { images, Description } from '../components/Description';
import { curriculums, Curriculums } from '../components/Curriculums';

const events: events[] = [
  {
    description: 'विद्यालय के प्रतिभा सम्मान समारोह',
    image: 'functions/0003.jpg',
  },
  {
    description:
      'विद्यालय के वार्षिकोत्सव समारोह में कार्यक्रम प्रस्तुत करती बालिकाएं',
    image: 'functions/0006.jpeg',
  },
  {
    description: 'विद्यालय के प्रतिभा सम्मान समारोह',
    image: 'functions/0004.jpg',
  },
  {
    description:
      'सम्मानित करते प्राचार्य डॉ जेबी सिंह भाजपा जिला अध्यक्ष डॉ मिथिलेश त्रिपाठी  को सम्मानित करते प्रधानाचार्य अरविंद कुमार त्रिपाठी',
    image: 'functions/0005.jpg',
  },
  {
    description: '',
    image: 'functions/0007.jpg',
  },
  {
    description:
      'विद्यालय के वार्षिकोत्सव समारोह में कार्यक्रम प्रस्तुत करती बालिकाएं',
    image: 'functions/0008.jpg',
  },
];

const descriptionImages: images = {
  principal: 'principal.jpeg',
  manager: 'manager.jpeg',
  founder: 'establishedBy.jpeg',
};

const treeCurriculum: curriculums = {
  description:
    'विद्यालय में वृक्षारोपण कार्यक्रम में सम्मिलित प्रधानाचार्य एवं अन्य स्टाफ',
  image: '/treePlanting.jpeg',
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>गायत्री संस्कृत माध्यमिक विद्यालय</title>
      </Head>
      <div>
        <HeroSection />
        <Image
          src="/school.jpeg"
          alt="image"
          layout="fill"
          className="index__image"
        />
        <EventCarousel events={events} />
        <Curriculums curriculums={treeCurriculum} />
        <Description images={descriptionImages} />
        <Footer />
      </div>
    </>
  );
};

export default Home;
