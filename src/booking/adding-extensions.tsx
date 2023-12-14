import React, { SetStateAction } from "react";
import { useActor } from "@xstate/react";
import { Close } from "@mui/icons-material";
import Button from "src/components/button";
import Modal from "src/components/modal";
import styles from "src/booking/adding-extensions.module.scss";
import { useBookingService } from "src/helpers";
import { Service } from "src/types";

interface Props {
  service: Service
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const AddingExtensions = ({ service, setShowModal }: Props) => {
  const { bookingService } = useBookingService();
  const [state, send] = useActor(bookingService);
  const { requiresHairExtensions } = service;

  let title, description = null;
  if (requiresHairExtensions) {
    title = 'Do you want us to provide your hair extensions?';
  } else {
    title = 'Will you be using hair extensions?';
  }

  return (
    <Modal>
      <div>
        <h4>{title}</h4>
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
