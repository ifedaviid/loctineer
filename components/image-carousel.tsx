import React, { SetStateAction } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import CustomImage from "components/custom-image";
import { AppImage } from "types";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

interface Props {
  images: AppImage[]
  setPopUp: React.Dispatch<SetStateAction<boolean>>;
}

const ImageCarousel = ({ images, setPopUp }) => {
  return (
    <section className="dark" style={{ padding: '3rem 0' }}>
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
            <CustomImage image={image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default ImageCarousel;
