import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.scss";

const Modal = ({ children }) => {
    const [isBrowser, setIsBrowser] = useState(false);

    useEffect(() => {
        setIsBrowser(true);
    }, []);

    const renderModalContent = () => {
        return (
            <>
                {isBrowser ?
                    <div className={styles.modalOverlay}>
                        {children}
                    </div>
                    : null}
            </>
        );
    }

    return ReactDOM.createPortal(
        renderModalContent(),
        document.getElementById("modal-root")
    );
};

export default Modal;