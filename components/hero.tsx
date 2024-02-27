import React from "react";
import Image from "next/legacy/image";
import Button from "components/button";
import styles from "components/hero.module.scss";
import { Business } from "types";
import { useRouter } from "next/router";

interface Props {
  business: Business;
}

const Hero = ({ business }: Props) => {
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
