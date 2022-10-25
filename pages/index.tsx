import React from "react";
import { useRouter } from "next/router";
import Image from 'next/image'
import Button from "../components/button";
import Layout from "../components/layout";
import Card from "../components/card";


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
          <p>Ottawa's favorite braider & loctician</p>
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
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
              <h2>Dreadlocks</h2>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
              <h2>Braids & Twists</h2>
              <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <Button variant="primary">See Braiding Services</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div>
          <h2>About me</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="image-wrapper about">
          <Image
            src={require('../images/consultation.jpg')}
            alt="A smiling client on a video phone call"
          // placeholder="blur" // Optional blur-up while loading
          />
        </div>
      </section>
      {/* <h1 >
        Liked what you saw at{" "}
        <a href="https://bougieebraids.com">Loctineer.com</a>?
      </h1>
      <div className={styles.buttonGroupContainer}>
        <Button variant="primary" size="large" onClick={() => {
          router.push('/booking')
        }}>
          Book an appointment
        </Button>
        <Button variant="secondary" size="large" onClick={() => {
          router.push('https://loctineer.com')
        }}>
          Visit Loctineer.com
        </Button>
      </div> */}
    </Layout >
  );
}
