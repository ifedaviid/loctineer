import React from "react";
import styles from "./button.module.scss";

const Button = ({ children, variant, ...rest }) => {
  return <button className={` ${styles['default']} ${styles[variant]}`} {...rest}>{children}</button>
}

export default Button;
