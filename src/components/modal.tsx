import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Close } from "@mui/icons-material";
import styles from "src/components/modal.module.scss";

interface Props {
  closeModal?: Function;
  children: React.ReactNode;
}

const Modal = ({ closeModal, children }: Props) => {
  const renderModalContent = () => {
    return (
      <>
        <div className={styles.modalOverlay}>
          {closeModal && (
            <div className={styles.closeIcon}>
              <Close
                sx={{ fontSize: 50, color: "white" }}
                onClick={() => closeModal()}
              />
            </div>
          )}
          <div className={styles.modalContainer}>{children}</div>
        </div>
      </>
    );
  };

  return ReactDOM.createPortal(
    renderModalContent(),
    document.getElementById("modal-root")
  );
};

export default Modal;
