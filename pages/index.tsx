import React, { useState } from "react";
import { useRouter } from "next/router";

import { AppImage } from "src/types";
import Modal from "src/components/modal";
import Hero from "src/components/hero";
import CustomImage from "src/components/custom-image";
import Layout from "src/template/page-wrapper";
import About from "src/sections/about";
import ServiceList from "src/sections/service-list";
import { serviceTypes } from "data";
import Photos from "src/sections/photos";

export default function HomePage() {
  const router = useRouter();
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
        topText="Your community's favorite loctician"
        mainText="Creating your best Look"
        bottomText="Let me help you shine!"
        callToAction={() => router.push("/booking")}
        image={{
          path: require("data/images/braids-and-twists.jpg"),
          altText: "ifes alt text",
        }}
      />
    </Layout>
  );
}
