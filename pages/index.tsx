import React, { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { AppImage } from "../types/image";
import Modal from "../components/modal";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Listing from "../components/listing";
import CustomImage from "../components/custom-image";
import { extractImages } from "../components/helpers/utils";
import { featuredImages } from "../data/featured-images";
import { serviceTypes } from "../data";

export default function Home() {
  const router = useRouter();
  const images: Array<AppImage> = extractImages(featuredImages);
  const initialPopUpState = {
    showing: false,
    image: null,
  };
  const [popUp, setPopUp] = useState(initialPopUpState);

  const openImage = (image: AppImage) => (
    <Modal closeModal={() => setPopUp(initialPopUpState)}>
      <CustomImage image={image} roundEdged />
    </Modal>
  );

  return (
    <Layout>
      <Hero
        topText="Ottawa's favorite braider & loctician"
        mainText="Creating your best Look"
        bottomText="Let me help you shine!"
        callToAction={() => router.push("/booking")}
        image={{
          path: require("../data/images/braids-and-twists.jpg"),
          altText: "ifes alt text",
        }}
      />
      <section>
        <h2>About Us</h2>
        <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
      </section>
      <section>
        <h2 style={{ marginTop: "unset" }}>We specialize in...</h2>
        <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
        <div className="services-content">
          {serviceTypes.map((option, idx) => {
            const { image, name, description, cta } = option;
            return (
              <Listing
                key={idx}
                image={image}
                title={name}
                description={description}
                cta={cta}
              />
            );
          })}
        </div>
      </section>
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
      {popUp.showing && openImage(popUp.image)}
    </Layout>
  );
}
