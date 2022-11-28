import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from './card';
import styles from './slide-select.module.scss';
import 'swiper/swiper.min.css';

const SlideSelect = ({ options }) => {
  return (
    <Swiper
      className={styles['slide-select']}
      spaceBetween={15}
      centeredSlides={true}
      breakpoints={{
        320: { slidesPerView: 1 },
        520: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        968: { slidesPerView: 2 },
        1120: { slidesPerView: 3 },
        1400: { slidesPerView: 3 },
      }}
    >
      {options.map((option, idx) => (
        <SwiperSlide key={idx}>
          {({ isActive }) => (
            <Card
              image={option.image}
              isSelected={isActive}
              title={option.name}
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SlideSelect