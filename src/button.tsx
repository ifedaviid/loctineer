import React from "react";
import styles from "./button.module.scss";

const Button = ({ children, variant, disabled = false, ...rest }) => {
  return <button className={` ${styles['default']} ${styles[variant]} ${disabled ? styles['disabled'] : ''}`} {...rest} disabled={disabled}>{children}</button>
}

export default Button;
