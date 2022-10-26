import React from "react";
import { useRouter } from "next/router";
import Hero from "../components/hero";
import Layout from "../components/layout";
import Carousel from "../components/carousel";
import Listing from "../components/listing";
import { featuredPhotos } from "../data/featured-photos";
import { serviceMenu } from "../data/service-categories";

export default function Home() {
  const router = useRouter();
  return (
    <Layout variant="home">
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
      <section className="about-section">
        <h2>About Us</h2>
        <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
      </section>
      <section className="services-section">
        <h2 style={{ marginTop: 'unset' }}>We specialize in...</h2>
        <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
        <div className="services-content">
          {serviceMenu.map((option, idx) => {
            const { image, name, description, slug } = option;
            return (
              <Listing
                key={idx}
                image={image}
                title={name}
                description={description}
                callToAction={{
                  text: 'See Related Services',
                  action: () => router.push(slug),
                }}
              />
            );
          })}
        </div>
      </section>
      <section className="gallery-section">
        <h2>Gallery</h2>
        <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
        <div>
          <Carousel images={featuredPhotos} />
        </div>
      </section>
    </Layout >
  );
}
