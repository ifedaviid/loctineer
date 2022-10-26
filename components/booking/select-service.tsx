import React from "react";
import Card from "../card";
import Grid from "../grid";
import { useActor } from "@xstate/react";
import styles from "./select.module.scss";
import { useBookingService } from '../../context/useBookingService';

const SelectService = () => {
  const { bookingService } = useBookingService();
  const [state, send] = useActor(bookingService);

  const { serviceType, service } = state.context;
  const { services } = serviceType;

  return (
    <>
      <h2 className={styles.bookingHeader}>Choose a {serviceType.name} service</h2>
      <Grid>
        {services && services.map((option, idx) => {
          const { name, category, canUseExtensions } = option;
          return (
            <Card
              key={idx}
              title={name}
              category={category}
              isSelected={service?.name === name}
              description={canUseExtensions ? 'Can use hair extensions' : 'Natural hair only'}
              onChange={() => send({ type: 'SET_SERVICE', service: option })
              }
            />
          );
        })}
      </Grid>
    </>
  );
};

export default SelectService;
