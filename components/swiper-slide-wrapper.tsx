import React from "react";
import { Swiper } from "swiper/react";
import styles from "./swiper-slide-wrapper.module.scss";
import "swiper/swiper.min.css";

const SwiperSlideWrapper = ({ children, ...rest }) => {
  return (
    <Swiper
      className={styles["swiper-slide-wrapper"]}
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
      {...rest}
    >
      {children}
    </Swiper>
  );
};

export default SwiperSlideWrapper;
