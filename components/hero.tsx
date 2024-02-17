import React from "react";
import Image from "next/legacy/image";
import Button from "components/button";
import styles from "components/hero.module.scss";
import { AppImage } from "types";
import { useRouter } from "next/router";
import { business } from "data/loctineer/index";

interface Props {
  topText?: string;
  mainText: string;
  bottomText?: string;
  image?: AppImage;
  callToAction?: Function;
}

const Hero = () => {
  const router = useRouter();
  const { description, marketingCopy, cta, heroImage } = business;
  return (
    <header className={styles["heroImage"]}>
      <div>
        <Image src={heroImage.path} alt={heroImage.altText} layout="fill" />
      </div>
      <div
        className={styles["content"]}
        style={{ opacity: "unset" }}
      >
        <p>{description}</p>
        <h1>{marketingCopy}</h1>
        <Button
          variant="primary"
          size="large"
          onClick={() => router.push(cta?.primary?.href)}
        >
          {cta?.primary?.text}
        </Button>
      </div>
    </header>
  );
};

export default Hero;
