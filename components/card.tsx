import React, { useState } from "react";
import CustomImage from "./custom-image";
import styles from "./card.module.scss";
import { AppImage } from "../types/image";

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
  // const [darken, setDarken] = useState(true);
  // const handleClick = () => ;
  return (
    // <div
    //   role="radio"
    //   // checked={isSelected}
    //   aria-checked={isSelected}
    //   // onKeyDown={onChange ? () => onChange() : null}
    //   // tabIndex={0}
    //   // label={payLaterText}
    //   // aria-label={payLaterText}
    //   // name={RADIO_GROUP_NAME}

    //   // aria-checked={selectedPayLater}
    //   // onChange={() => handleSelection(PAYLATER)}
    // >
    //   {image && <CustomImage image={image} />}
    //   <div className={styles.cardDetails}>
    //   </div>
    // </div>

    <label
      className={`${styles.card} ${isSelected ? styles.active : styles.inactive}`}
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
