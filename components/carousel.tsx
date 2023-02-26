import React from "react";
import CustomImage from "./custom-image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import { AppImage } from "../types/image";
import styles from "./carousel.module.scss";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

interface Props {
  images: Array<AppImage>;
}

const Carousel = ({ images }: Props) => {
  return (
    <Swiper
      speed={1200}
      breakpoints={{
        320: { slidesPerView: 1.3 },
        520: { slidesPerView: 1.3 },
        768: { slidesPerView: 2.3 },
        968: { slidesPerView: 2.3 },
        1120: { slidesPerView: 3.3 },
        1400: { slidesPerView: 4.3 },
      }}
      modules={[FreeMode, Pagination]}
      spaceBetween={10}
      pagination={{ clickable: true }}
      freeMode={true}
      className={styles["carousel"]}
    >
      {images.map((image, idx) => (
        <SwiperSlide key={idx}>
          {/* Or use unselectable <Card/> */}
          <CustomImage image={image} roundEdged />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
