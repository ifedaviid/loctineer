import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import Button from "src/components/button";
import Modal from "src/components/modal";
import styles from "src/booking/stages/confirm-exit.module.scss";

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
          <div>
            <h4>{title}</h4>
            <div>
              <Close sx={{ color: "black" }} onClick={handleCancel} />
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
        </Modal>
      )}
    </>
  );
  return [ConfirmationDialog, confirm];
};

export default useConfirm;
