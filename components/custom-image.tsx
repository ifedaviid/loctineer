import React from "react";
import Image from "next/legacy/image";
import { AppImage } from "types";
import Link from "next/link";
import styles from "components/custom-image.module.scss";

interface Props {
  image: AppImage;
}

const CustomImage = ({ image }: Props) => {
  const { path, altText } = image;
  return (
    <div className={styles['custom-image']}>
      <Image
        src={path}
        alt={altText}
        placeholder="blur"
        loading="lazy"
        objectFit="cover"
      />
    </div>
  );
};

export default CustomImage;
