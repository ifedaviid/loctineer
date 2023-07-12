import React from "react";
import { useActor } from "@xstate/react";
import { Close } from "@mui/icons-material";
import Button from "src/components/button";
import Modal from "src/components/modal";
import styles from "src/booking/stages/adding-extensions.module.scss";
import { useBookingService } from "src/helpers";

const AddingExtensions = ({ service, setShowModal }) => {
  const { bookingService } = useBookingService();
  const [state, send] = useActor(bookingService);

  return (
    <Modal>
      <div>
        <h4>Adding hair extensions?</h4>
        <div>
          <Close
            sx={{ color: "black" }}
            onClick={() => {
              send({
                type: "IGNORE_ADDING_EXTENSIONS",
                addingExtensions: undefined,
              });
              setShowModal(false);
            }}
          />
        </div>
      </div>
      <p>
        {service.name} can be done using hair extensions. Will you be adding
        hair extensions?
      </p>
      <div className={styles.buttonGroup}>
        <Button
          variant="secondary"
          onClick={() => {
            send({ type: "NOT_ADDING_EXTENSIONS", addingExtensions: false });
            setShowModal(false);
          }}
        >
          No, thanks
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            send({ type: "ADDING_EXTENSIONS", addingExtensions: true });
            setShowModal(false);
          }}
        >
          Yes, I will!
        </Button>
      </div>
    </Modal>
  );
};

export default AddingExtensions;
