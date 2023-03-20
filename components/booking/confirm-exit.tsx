import React from "react";
import Button from "../button";
import {
  Box,
  Dialog, DialogActions,
  DialogContent, DialogContentText, DialogTitle,
} from '@mui/material';

import { useState } from 'react';
import styles from "./confirm-exit.module.scss";
import Modal from "../modal";

const useConfirm = (title: string, message: string): [() => JSX.Element, () => Promise<unknown>] => {
  const [promise, setPromise] = useState(null);

  const confirm = () => new Promise((resolve, reject) => {
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
    // <Dialog
    //   open={promise !== null}
    //   fullWidth
    //   sx={{ borderRadius: '2rem' }}
    // >
    //   <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between' }}>
    //     <Box>
    //       {title}
    //     </Box>
    //     <Box>
    //       <a
    //         href="#"
    //         onClick={handleCancel}
    //       >
    //         x
    //       </a>
    //     </Box>
    //   </DialogTitle>
    //   <DialogContent>
    //     <DialogContentText>{message}</DialogContentText>
    //   </DialogContent>
    //   <DialogActions className={styles.buttonGroup}>
    //     <Button variant="secondary" onClick={handleCancel}>No</Button>
    //     <Button variant="primary" onClick={handleConfirm}>Yes</Button>
    //   </DialogActions>
    // </Dialog>
    <>
      {promise !== null &&
        <Modal>
          {" "}
          {/* This is the dark overlay in the background */}
          <div className={styles.modalContainer}>
            {" "}
            {/* This is the modal container */}
            <div>
              <h4>{title}</h4>
              <div>
                <a
                  href="#"
                  onClick={handleCancel}
                >
                  x
                </a>
              </div>
            </div>
            <p>
              {message}
            </p>
            <div className={styles.buttonGroup}>
              <Button
                variant="secondary"
                onClick={handleCancel}
              >
                No
              </Button>
              <Button
                variant="primary"
                onClick={handleConfirm}
              >
                Yes
              </Button>
            </div>
          </div>
        </Modal>
      }
    </>
  );
  return [ConfirmationDialog, confirm];
};

export default useConfirm;