import React, { createContext } from 'react';
import { useInterpret } from '@xstate/react';
import { bookingMachine } from './booking-machine';
import { InterpreterFrom } from 'xstate';

export const GlobalStateContext = createContext({ bookingService: {} as InterpreterFrom<typeof bookingMachine> });

export const GlobalStateProvider = (props) => {
  const bookingService = useInterpret(bookingMachine);

  return (
    <GlobalStateContext.Provider value={{ bookingService }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};