import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

const ConfirmBooking = () => {
    const booking = useSelector((state: RootState) => state.booking);
    console.log("Booking info: ", booking);
    return <div />
};

export default ConfirmBooking;
