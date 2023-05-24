import React from "react";
import Image from "next/image";
import Button from "src/button";
import styles from "src/hero.module.scss";
import { AppImage } from "src/types/image";
import { useRouter } from "next/router";

interface Props {
  topText?: string;
  mainText: string;
  bottomText?: string;
  image?: AppImage;
  callToAction?: Function;
}

const Hero = ({
  topText,
  mainText,
  bottomText,
  image,
  callToAction,
}: Props) => {
  const router = useRouter();
  return (
    <header className={styles["heroImage"]}>
      {image && (
        <div>
          <Image src={image.path} alt={image.altText} layout="fill" />
        </div>
      )}
      <div
        className={styles["content"]}
        style={image ? null : { opacity: "unset" }}
      >
        {topText && <p>{topText}</p>}
        <h1>{mainText}</h1>
        {bottomText && <p>{bottomText}</p>}
        {callToAction && (
          <Button
            variant="primary"
            size="large"
            onClick={() => router.push("/services")}
          >
            Book Online
          </Button>
        )}
      </div>
    </header>
  );
};

export default Hero;
