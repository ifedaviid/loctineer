import React from "react";
import { useRouter } from "next/router";
import Image from 'next/image';
import Hero from "../components/hero";
import Button from "../components/button";
import Layout from "../components/layout";
import { featuredPhotos } from "../data/featured-photos";
import Carousel from "../components/carousel";

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
              <Button variant="primary">See Dreadlocks Services</Button>
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
              <Button variant="primary">See Braiding Services</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery-section">
        <h2>Gallery</h2>
        <p>{`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}</p>
        <div>
          <Carousel images={featuredPhotos} />
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
