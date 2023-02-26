import React from "react";
import { Swiper } from "swiper/react";
import styles from "./swiper-slide-wrapper.module.scss";
import "swiper/swiper.min.css";

const SwiperSlideWrapper = ({ children, ...rest }) => {
  return (
    <Swiper
      className={styles["swiper-slide-wrapper"]}
      centeredSlides={true}
      breakpoints={{
        320: { slidesPerView: 1.3 },
        520: { slidesPerView: 1.3 },
        768: { slidesPerView: 2.3 },
        968: { slidesPerView: 2.3 },
        1120: { slidesPerView: 3.3 },
        1400: { slidesPerView: 3.3 },
      }}
      {...rest}
    >
      {children}
    </Swiper>
  );
};

export default SwiperSlideWrapper;
