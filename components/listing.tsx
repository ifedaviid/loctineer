import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import styles from "components/listing.module.scss";
import { Service } from "types";

interface Props {
  service: Service;
}

const Listing = ({ service }: Props) => {
  const { name, featuredImage, cta } = service

  return (
    <div className={styles.listing}>
      <Image
        src={featuredImage.path}
        alt={featuredImage.altText}
        placeholder="blur"
        loading="lazy"
        objectFit="cover"
      />
      <Link href={cta?.primary?.href} className={styles.overlay} />
      <Link href={cta?.primary?.href} className={styles.title}>{name}</Link>
    </div >
  );
};

export default Listing;
