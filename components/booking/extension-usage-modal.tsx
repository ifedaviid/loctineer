import React from "react";
import { useDispatch } from "react-redux";
import Button from "../button";
import Modal from "../modal";
import styles from "./extension-usage-modal.module.scss";
import { useBookingContext } from "../../context/useBookingContext";
import { updateBringingExtensions } from "../../actions/booking";

const ExtensionUsageModal = ({ setShowModal }) => {
    const dispatch = useDispatch();
    const {
        service,
        currentStageIndex,
        setCurrentStageIndex,
        bringingExtensions,
        setPreviousStageIndex,
        setBringingExtensions
    } = useBookingContext();

    const handleModalResponse = (isBringingExtensions) => {
        if (isBringingExtensions && service.canUseExtensions) {
            setBringingExtensions(isBringingExtensions)
            dispatch(updateBringingExtensions(isBringingExtensions));
            setPreviousStageIndex(currentStageIndex);
            setCurrentStageIndex(currentStageIndex + 1);
        } else {
            setPreviousStageIndex(currentStageIndex);
            setCurrentStageIndex(currentStageIndex + 2);
        }
        setShowModal(false)
    }

    const noThanksClass = !bringingExtensions ? "primary" : "secondary";
    const yesIwillClass = bringingExtensions ? "primary" : "secondary";

    return (
        <Modal> {/* This is the dark overlay in the background */}
            <div className={styles.modalContainer}> {/* This is the modal container */}
                <div>
                    <h4>Adding hair extensions?</h4>
                    <div>
                        <a href="#" onClick={() => setShowModal(false)}>
                            x
                        </a>
                    </div>
                </div>
                <p>{service.name} can be done using hair extensions. Will you
                    be adding hair extensions?
                </p>
                <div className={styles.modalButtonGroup}>
                    <Button variant={noThanksClass} onClick={() => handleModalResponse(false)}>No, thanks</Button>
                    <Button variant={yesIwillClass} onClick={() => handleModalResponse(true)}>Yes, I will!</Button>
                </div>
            </div >
        </Modal>
    );
}

export default ExtensionUsageModal;