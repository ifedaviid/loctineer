import React from "react";
import { useRouter } from "next/router";
import Image from 'next/image'
import Button from "../components/button";
import Layout from "../components/layout";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import "swiper/css/free-mode";


export default function Home() {
  const router = useRouter();
  return (
    <Layout variant="home">
      <header>
        <div className="image-wrapper hero">
          <Image
            src={require('../images/braids-and-twists.jpg')}
            alt="A smiling client on a video phone call"
          // placeholder="blur" // Optional blur-up while loading
          />
        </div>
        <section>
          <p>{`Ottawa's favorite braider & loctician`}</p>
          <h1>Creating your best Look</h1>
          <p>Let me help you shine!</p>
          <Button
            variant="primary"
            size="large"
            onClick={() => {
              router.push("/booking");
            }}>Book Online</Button>
        </section>
      </header>
      <section className="services-section">
        <h2>About Us</h2>
        <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
        <h2>We specialize in...</h2>
        <div className="services-content">
          <div>
            <div className="image-wrapper service">
              <Image
                src={require('../images/braids-and-twists.jpg')}
                alt="A smiling client on a video phone call"
              // placeholder="blur" // Optional blur-up while loading
              />
            </div>
            <div>
              <h3>Dreadlocks</h3>
              <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
              <Button variant="primary">> Dreadlocks Services</Button>
            </div>
          </div>
          <div>
            <div className="image-wrapper services">
              <Image
                src={require('../images/braids-and-twists.jpg')}
                alt="A smiling client on a video phone call"
              // placeholder="blur" // Optional blur-up while loading
              />
            </div>
            <div>
              <h3>Braids & Twists</h3>
              <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
              <Button variant="primary">> Braiding Services</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery-section">
        <h2>Gallery</h2>
        <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
        <div>
          <Swiper
            // install Swiper modules
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
            // slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}

            freeMode={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="image-wrapper gallery">
                <Image
                  src={require('../images/braids-and-twists.jpg')}
                  alt="A smiling client on a video phone call"
                // placeholder="blur" // Optional blur-up while loading
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="image-wrapper gallery">
                <Image
                  src={require('../images/braids-and-twists.jpg')}
                  alt="A smiling client on a video phone call"
                // placeholder="blur" // Optional blur-up while loading
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-wrapper gallery">
                <Image
                  src={require('../images/braids-and-twists.jpg')}
                  alt="A smiling client on a video phone call"
                // placeholder="blur" // Optional blur-up while loading
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-wrapper gallery">
                <Image
                  src={require('../images/braids-and-twists.jpg')}
                  alt="A smiling client on a video phone call"
                // placeholder="blur" // Optional blur-up while loading
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-wrapper gallery">
                <Image
                  src={require('../images/braids-and-twists.jpg')}
                  alt="A smiling client on a video phone call"
                // placeholder="blur" // Optional blur-up while loading
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-wrapper gallery">
                <Image
                  src={require('../images/braids-and-twists.jpg')}
                  alt="A smiling client on a video phone call"
                // placeholder="blur" // Optional blur-up while loading
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="image-wrapper gallery">
                <Image
                  src={require('../images/braids-and-twists.jpg')}
                  alt="A smiling client on a video phone call"
                // placeholder="blur" // Optional blur-up while loading
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* <div>
          <h2>About me</h2>
          <p>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
            <br />
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
          </p>
        </div>
        <div className="image-wrapper gallery">
          <Image
            src={require('../images/consultation.jpg')}
            alt="A smiling client on a video phone call"
          // placeholder="blur" // Optional blur-up while loading
          />
        </div> */}
      </section>
    </Layout >
  );
}
