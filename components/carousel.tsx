import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import styles from './carousel.module.scss';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import "swiper/css/free-mode";

interface Props {
    images: Array<AppImage>;
}

const Carousel = ({ images }: Props) => {
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
            freeMode={true}
        >
            {images.map((image, idx) => {
                const { path, altText } = image;
                return (
                    <SwiperSlide key={idx}>
                        <div className={styles['carousel-image']}>
                            <Image
                                src={path}
                                alt={altText}
                            />
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    )
}

export default Carousel;