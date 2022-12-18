import React from "react";
import { BookingContext } from "../context/booking-state";

export const useBookingService = () => React.useContext(BookingContext);
