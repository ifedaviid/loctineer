import React from "react";
import Card from "../card";
import Grid from "../grid";
import { useActor } from "@xstate/react";
import { useBookingService } from '../../context/useBookingService';

const SelectService = () => {
  const { bookingService } = useBookingService();
  const [state, send] = useActor(bookingService);

  const { serviceType, service } = state.context;
  const { services } = serviceType;

  return (
    <>
      <h2>Choose a {serviceType.name} service</h2>
      <Grid>
        {services && services.map((option, idx) => {
          const { name, category, canUseExtensions } = option;
          return (
            <div
              key={idx}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default SelectService;
