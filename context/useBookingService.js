import React from "react";
import { BookingContext } from "./booking-state";

export const useBookingService = () => React.useContext(BookingContext);
