import React from "react";
import { BookingContext } from "src/context/booking-state";

export const useBookingService = () => React.useContext(BookingContext);
