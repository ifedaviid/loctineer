import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import styles from "./select.module.scss";

const ConfirmBooking = () => {
    const booking = useSelector((state: RootState) => state.booking);
    console.log("Appointment Booking info: ", booking);
    return (
        <h2 className={styles.bookingHeader}>Appointment Confirmed! See you soon!</h2>
    );
};

export default ConfirmBooking;
