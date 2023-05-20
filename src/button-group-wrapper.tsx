import React from "react";
import styles from "./button-group-wrapper.module.scss";

// Use this to wrap buttons for proper space management.

const ButtonGroupWrapper = ({ children, ...rest }) => {
    return (
        <div className={styles.buttonGroupWrapper} {...rest}>
            {children}
        </div>
    );
};

export default ButtonGroupWrapper;
