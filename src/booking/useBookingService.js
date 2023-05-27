import React from "react";
import { BookingContext } from "src/booking/booking-state";

export const useBookingService = () => React.useContext(BookingContext);
