
import styles from './price-list.module.scss'
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Close } from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import { Price } from 'src/types';

interface ModalProps {
    open: boolean;
    onClose: React.Dispatch<React.SetStateAction<boolean>>;
    prices: Price[];
    serviceName: string;
}

const PriceList = ({ open, onClose, prices, serviceName }: ModalProps) => {
    const renderModalContent = () => (
        <Modal
            open={open}
            onClose={onClose}
        >
            <div className={styles.modalOverlay}>
                {onClose && (
                    <div className={styles.closeIcon}>
                        <Close
                            sx={{ fontSize: 35, color: "white" }}
                            onClick={() => onClose(false)}
                        />
                    </div>
                )}
                <div className={styles.modalContainer}>
                    <h2>Prices for {serviceName} </h2>
                    <ul>
                        {prices.map((price, idx) => (
                            <li key={idx}>
                                <p className={styles.priceName}>{price.name} </p>
                                <small>* Starting at ${price.value}</small>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </Modal>
    );


    return ReactDOM.createPortal(
        renderModalContent(),
        document.getElementById("modal-root")
    );
};

export default PriceList;

