import React from "react";
import Image from "next/legacy/image";
import styles from "components/custom-image.module.scss";

const CustomImage = ({ image, ...rest }) => {
  const { path, altText } = image;
  return (
    <div className={styles['custom-image']}>
      <Image
        src={path}
        alt={altText}
        placeholder="blur"
        loading="lazy"
        objectFit="cover"
        layout="fixed"
        {...rest}
      />
    </div >
  );
};

export default CustomImage;
