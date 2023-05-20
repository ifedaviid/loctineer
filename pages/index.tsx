import React, { useState } from "react";
import Socials from "../components/section/socials";
import Services from "../components/section/services";
import { useRouter } from "next/router";

import { AppImage } from "../types/image";
import Modal from "../components/modal";
import Header from "../components/section/header";
import PageWrapper from "../components/page-wrapper";
import Listing from "../components/listing";
import CustomImage from "../components/custom-image";
import { extractImages } from "../components/helpers/utils";
import { featuredImages } from "../data/featured-images";
import About from "../components/section/about";
import Photos from "../components/section/photos";

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
    <PageWrapper>
      <Header
        topText="Ottawa's favorite braider & loctician"
        mainText="Creating your best Look"
        bottomText="Let me help you shine!"
        callToAction={() => router.push("/booking")}
        image={{
          path: require("../data/images/braids-and-twists.jpg"),
          altText: "ifes alt text",
        }}
      />
      <About />
      <Services />
      <Photos images={images} setPopUp={setPopUp} />
      <Socials />
      {popUp.showing && openImage(popUp.image)}
    </PageWrapper>
  );
}
