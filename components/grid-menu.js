import React from "react";
import { useDispatch } from "react-redux";
import styles from "./grid-menu.module.scss";

const GridMenu = ({ items }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.grid}>
      {items.map((item, idx) => {
        const { name, description, action } = item;
        return (
          <div key={idx} className={styles.card}>
            <label htmlFor="html">
              <input
                type="radio"
                id="html"
                name="fav_language"
                value="HTML"
                onChange={() => dispatch(action)}
              />
              <h2>{name}</h2>
            </label>
            {description && <p>{description}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default GridMenu;
