import React, { createContext } from 'react';
import { useInterpret } from '@xstate/react';
import { bookingMachine } from './booking-machine';
import { InterpreterFrom } from 'xstate';

export const BookingContext = createContext({ bookingService: {} as InterpreterFrom<typeof bookingMachine> });

export const BookingProvider = (props) => {
  const bookingService = useInterpret(bookingMachine);

  return (
    <BookingContext.Provider value={{ bookingService }}>
      {props.children}
    </BookingContext.Provider>
  );
};