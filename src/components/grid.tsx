import React from "react";
import styles from "src/components/grid.module.scss";

const Grid = ({ children }) => {
  return <div className={styles.grid}>{children}</div>;
};

export default Grid;
