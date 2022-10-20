import React from "react";
import { useMachine, useActor } from "@xstate/react";
import Card from "../card";
import Grid from "../grid";
import { serviceMenu } from "../../data/service-categories";
import styles from "./select.module.scss";
import { bookingMachine } from "../../context/booking-machine";
import { useBookingService } from '../../context/useBookingService';

const SelectServiceType = () => {
  // const [state, send] = useMachine(bookingMachine);

  const { bookingService } = useBookingService();
  const [state, send] = useActor(bookingService);

  return (
    <>
      <h2 className={styles.bookingHeader}>What are you interested in?</h2>
      <Grid>
        {serviceMenu.map((option, idx) => {
          const { name, photo } = option;
          return (
            <Card
              key={idx}
              title={name}
              image={photo}
              isSelected={state.context.serviceType?.name === name}
              onChange={() => send({ type: 'SET_SERVICE_TYPE', serviceType: option })}
            />
          );
        })}
      </Grid>
    </>
  );
}

export default SelectServiceType; 