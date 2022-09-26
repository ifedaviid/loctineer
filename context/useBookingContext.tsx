import { useContext } from 'react';
import { BookingContext } from './BookingContextProvider';

export const useBookingContext = () => useContext(BookingContext);