import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Lazy, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/lazy';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import classes from '../styles/EventCarousel.module.css';

const EventCarousel: React.FC<{ events: string[] }> = (props) => {
  return (
    <div className={classes.container}>
      <h1>Events</h1>
      <Swiper
        modules={[Navigation, Pagination, Lazy, Autoplay]}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        centeredSlides={true}
        lazy={{
          checkInView: true,
          enabled: true,
          loadOnTransitionStart: true,
        }}
        navigation={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        className={classes.Swiper}
      >
        {props.events.map((event, index) => {
          return (
            <SwiperSlide key={index}>
              <img className={classes.img}src={event} alt="events" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default EventCarousel;
