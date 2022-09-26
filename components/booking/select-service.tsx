import React from "react";
import Card from "../card";
import Grid from "../grid";
import { useBookingContext } from "../../context/useBookingContext";
import styles from "./select.module.scss";

const SelectService = () => {
  const { service, setService, serviceType } = useBookingContext();
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
              onChange={() => setService(option)}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default SelectService;
