import React from "react";
import Image from "next/image";
import Button from "src/components/button";
import styles from "src/components/hero.module.scss";
import { AppImage } from "src/types";
import { useRouter } from "next/router";

interface Props {
  topText?: string;
  mainText: string;
  bottomText?: string;
  image?: AppImage;
  callToAction?: Function;
}

const Hero = () => {
  const router = useRouter();
  return (
    <header className={styles["heroImage"]}>
      <div>
        <Image src={require("data/images/braids-and-twists.jpg")} alt="Main Image" layout="fill" />
      </div>
      <div
        className={styles["content"]}
        style={{ opacity: "unset" }}
      >
        <p>Your community's favorite loctician</p>
        <h1>Creating your best Look</h1>
        <p>Let me help you shine!</p>
        <Button
          variant="primary"
          size="large"
          onClick={() => router.push("/services")}
        >
          Our Service Menu
        </Button>
      </div>
    </header>
  );
};

export default Hero;
