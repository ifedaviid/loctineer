import React from "react";
import Image from "next/image";
import FacebookLogo from "../logo/facebook-logo";
import InstagramLogo from "../logo/instagram-logo";
import styles from "./socials.module.scss";

const Socials = () => (
  <section className={styles["image-bg"]}>
    <Image
      src="/images/city-junction.jpg"
      alt="socials-images"
      layout="fill"
      width={200}
      height={200}
    />
    <div className={styles.socials}>
      <div>
        <FacebookLogo width={80} height={80} />
        <p>Connect with us on Facebook</p>
      </div>
      <div>
        <InstagramLogo width={80} height={80} />
        <p>Follow us on Instagram</p>
      </div>
    </div>
  </section>
);

export default Socials;
