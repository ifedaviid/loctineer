import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import "swiper/css/free-mode";

const Carousel = ({ images }) => {
    return (
        <Swiper
            breakpoints={{
                320: { slidesPerView: 1.1 },
                520: { slidesPerView: 2.1 },
                768: { slidesPerView: 2.1 },
                968: { slidesPerView: 2.1 },
                1120: { slidesPerView: 3.1 },
                1400: { slidesPerView: 4.1 },
            }}
            modules={[FreeMode, Pagination]}
            spaceBetween={15}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}

            freeMode={true}
            className="mySwiper"
        >
            {images.map((image, idx) => {
                const { path, alt } = image;
                return (
                    <SwiperSlide key={idx}>
                        <div className="image-wrapper gallery">
                            <Image
                                src={path}
                                alt={alt}
                            />
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    )
}

export default Carousel;