import React from "react";
import { useActor } from "@xstate/react";
import Button from "../button";
import Modal from "../modal";
import styles from "./extension-usage-modal.module.scss";
import { bookingMachine } from "../../context/booking-machine";
import { useBookingService } from '../../context/useBookingService';

const ExtensionUsageModal = ({ setShowModal }) => {
    // const [state, send] = useMachine(bookingMachine);

    const { bookingService } = useBookingService();
    const [state, send] = useActor(bookingService);
    const { service } = state.context;

    return (
        <Modal> {/* This is the dark overlay in the background */}
            <div className={styles.modalContainer}> {/* This is the modal container */}
                <div>
                    <h4>Adding hair extensions?</h4>
                    <div>
                        <a href="#" onClick={() => {
                            send({ type: 'IGNORE_ADDING_EXTENSIONS', addingExtensions: undefined })
                            setShowModal(false)
                        }}>
                            x
                        </a>
                    </div>
                </div>
                <p>
                    {service.name} can be done using hair extensions. Will you
                    be adding hair extensions?
                </p>
                <div className={styles.modalButtonGroup}>
                    <Button variant="secondary" onClick={() => {
                        send({ type: 'NOT_ADDING_EXTENSIONS', addingExtensions: false })
                        setShowModal(false)
                    }}>
                        No, thanks
                    </Button>
                    <Button variant="primary" onClick={() => {
                        send({ type: 'ADDING_EXTENSIONS', addingExtensions: true })
                        setShowModal(false)
                    }}>
                        Yes, I will!
                    </Button>
                </div>
            </div>
        </Modal>
    );
}

export default ExtensionUsageModal;