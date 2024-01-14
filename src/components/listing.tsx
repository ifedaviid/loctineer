import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import Button from "src/components/button";
import styles from "src/components/listing.module.scss";
import { Service } from "src/types";

interface Props {
  service: Service;
}

const Listing = ({ service }: Props) => {
  const { name, featuredImage, description, cta } = service

  return (
    <div className={styles["listing"]}>
      <div>
        <Image
          src={featuredImage.path}
          alt={featuredImage.altText}
          placeholder="blur"
          loading="lazy"
        />
      </div>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        {cta.primary && (
          <Link href={cta.primary.href} legacyBehavior>
            <Button variant="primary">{cta.primary.text}</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Listing;
