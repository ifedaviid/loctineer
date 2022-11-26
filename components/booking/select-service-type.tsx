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
            <div
              key={idx}
            />
          );
        })}
      </Grid>
    </>
  );
}

export default SelectServiceType; 