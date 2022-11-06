import React from "react";
import { useActor } from "@xstate/react";
import { useBookingService } from '../../context/useBookingService';
import { serviceTypes } from "../../data";
import Card from "../card";
import Grid from "../grid";
import styles from "./select.module.scss";

const SelectServiceType = () => {
  const { bookingService } = useBookingService();
  const [state, send] = useActor(bookingService);

  return (
    <>
      <h2 className={styles.bookingHeader}>What are you interested in?</h2>
      <Grid>
        {serviceTypes.map((option, idx) => {
          const { name, image } = option;
          return (
            <Card
              key={idx}
              title={name}
              image={image.path}
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