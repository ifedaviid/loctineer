import React from "react";
import Image from "next/image";
import Button from "src/components/button";
import styles from "src/components/hero.module.scss";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter();
  return (
    <header className={styles["heroImage"]}>
      <div>
        <Image
          src={require("data/images/braids-and-twists.jpg")}
          alt="main-image"
          layout="fill"
        />
      </div>
      <div className={styles["content"]}>
        <p>{"Ottawa's favorite braider & loctician"}</p>
        <h1>Creating your best Look</h1>
        <p>Let me help you shine!</p>
        <Button
          variant="primary"
          size="large"
          onClick={() => router.push("/services")}
        >
          Book Online
        </Button>
      </div>
    </header>
  );
};

export default Hero;
