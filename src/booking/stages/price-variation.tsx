import React from "react";
import { Close } from "@mui/icons-material";
import Button from "src/components/button";
import Modal from "src/components/modal";
import styles from "src/booking/stages/adding-extensions.module.scss";

const PriceVariation = ({ setShowModal }) => {
  return (
    <Modal>
      <div>
        <h4>Prices may vary because...</h4>
        <div>
          <Close sx={{ color: "black" }} onClick={() => setShowModal(false)} />
        </div>
      </div>
      <p>state of your hair, desired hair style etc.</p>
      <div className={styles.buttonGroup}>
        <Button variant="primary" onClick={() => setShowModal(false)}>
          Ok, got it!
        </Button>
      </div>
    </Modal>
  );
};

export default PriceVariation;
