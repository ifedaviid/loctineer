import React from "react";
import Image from "next/image";
import { AppImage } from "types/image";
import classNames from "classnames";
import styles from "src/custom-image.module.scss";

interface Props {
  image: AppImage;
  roundEdged?: boolean;
  darken?: boolean;
}

const CustomImage = ({ image, roundEdged, darken }: Props) => {
  const { path, altText } = image;
  return (
    <div
      className={classNames(styles["custom-image"], {
        [styles.rounded]: roundEdged,
        [styles.darken]: darken,
      })}
    >
      <Image src={path} alt={altText} placeholder="blur" />
    </div>
  );
};

export default CustomImage;
