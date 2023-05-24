import React from "react";
import Button from "src/button";

import { useState } from "react";
import styles from "src/booking/confirm-exit.module.scss";
import Modal from "src/modal";

const useConfirm = (
  title: string,
  message: string
): [() => JSX.Element, () => Promise<unknown>] => {
  const [promise, setPromise] = useState(null);

  const confirm = () =>
    new Promise((resolve, reject) => {
      setPromise({ resolve });
    });

  const handleClose = () => {
    setPromise(null);
  };

  const handleConfirm = () => {
    promise?.resolve(true);
    handleClose();
  };

  const handleCancel = () => {
    promise?.resolve(false);
    handleClose();
  };

  const ConfirmationDialog = () => (
    <>
      {promise !== null && (
        <Modal>
          {" "}
          {/* This is the dark overlay in the background */}
          <div className={styles.modalContainer}>
            {" "}
            {/* This is the modal container */}
            <div>
              <h4>{title}</h4>
              <div>
                <a href="#" onClick={handleCancel}>
                  x
                </a>
              </div>
            </div>
            <p>{message}</p>
            <div className={styles.buttonGroup}>
              <Button variant="secondary" onClick={handleCancel}>
                No
              </Button>
              <Button variant="primary" onClick={handleConfirm}>
                Yes
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
  return [ConfirmationDialog, confirm];
};

export default useConfirm;
