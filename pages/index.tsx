import React from "react";
import { useRouter } from "next/router";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Carousel from "../components/carousel";
import Listing from "../components/listing";
import CustomImage from "../components/custom-image";
import { SwiperSlide } from 'swiper/react';
import { featuredImages } from "../data/featured-images";
import { serviceTypes } from "../data";
import { extractImages } from "../components/helpers/utils";

export default function Home() {
  const router = useRouter();
  const images = extractImages(featuredImages);
  return (
    <Layout>
      <Hero
        topText="Ottawa's favorite braider & loctician"
        mainText='Creating your best Look'
        bottomText='Let me help you shine!'
        callToAction={() => router.push('/booking')}
        image={{
          path: require('../images/braids-and-twists.jpg'),
          altText: 'ifes alt text'
        }}
      />
      <section>
        <h2>About Us</h2>
        <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
      </section>
      <section>
        <h2 style={{ marginTop: 'unset' }}>We specialize in...</h2>
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
      <section className="dark offset-pagination-bullets">
        <h2>Gallery</h2>
        <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
        <Carousel images={images} />
      </section>
    </Layout >
  );
}
