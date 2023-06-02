import React from "react";
import CustomImage from "src/components/custom-image";
import styles from "src/components/card.module.scss";
import { AppImage } from "src/types";

interface Props {
  title?: string;
  description?: string;
  onChange?: any;
  category?: string;
  isSelected?: boolean;
  image?: AppImage;
}

const Card = ({
  title,
  description,
  onChange,
  category,
  isSelected,
  image,
}: Props) => {
  return (
    <label
      className={`${styles.card} ${
        isSelected ? styles.active : styles.inactive
      }`}
    >
      <input
        name="plan"
        type="radio"
        className={styles.radio}
        checked={isSelected}
        onChange={onChange ? () => onChange() : null}
      />
      {image && <CustomImage image={image} darken={!isSelected} />}
      <div className={styles["plan-details"]}>
        {category && <span className={styles["plan-type"]}>{category}</span>}
        <h4>{title}</h4>
        {description && <p>{description}</p>}
      </div>
    </label>
  );
};

export default Card;
