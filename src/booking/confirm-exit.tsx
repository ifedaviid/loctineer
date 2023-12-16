import React, { useState } from "react";
import { Close } from "@mui/icons-material";
import Button from "src/components/button";
import Modal from "src/components/modal";
import styles from "src/booking/confirm-exit.module.scss";

interface Props {
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
  setIsBookingAppointment: React.Dispatch<React.SetStateAction<boolean>>
}

const ConfirmExit = ({
  setIsModalVisible,
  setIsBookingAppointment,
}) => {

  return (
    <Modal>
      <div>
        <h4>Are you sure?</h4>
        <div>
          <Close sx={{ color: "lightgray" }} onClick={() => setIsModalVisible(false)} />
        </div>
      </div>
      <p>Are you sure you want to exit booking process?</p>
      <div className={styles.buttonGroup}>
        <Button variant="primary" onClick={() => setIsModalVisible(false)}>
          No
        </Button>
        <Button variant="secondary" onClick={() => {
          setIsModalVisible(false);
          setIsBookingAppointment(false);
        }}>
          Yes
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmExit;
