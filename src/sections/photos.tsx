import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import CustomImage from "src/components/custom-image";
import { extractImages } from "src/helpers";
import { featuredImages } from "data/featured-images";
import { AppImage } from "src/types";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

const Photos = ({ setPopUp }) => {
  const images: Array<AppImage> = extractImages(featuredImages);
  return (
    <section className="dark">
      <h2>Gallery</h2>
      <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
      <Swiper
        speed={500}
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
        className="carousel"
      >
        {images.map((image, idx) => (
          <SwiperSlide
            key={idx}
            onClick={() => setPopUp({ showing: true, image })}
          >
            {/* Or use unselectable <Card/> */}
            <CustomImage image={image} roundEdged />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Photos;
