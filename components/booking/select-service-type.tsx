import React from "react";
import Card from "../card";
import Grid from "../grid";
import { serviceMenu } from "../../data/service-categories";
import { useBookingContext } from "../../context/useBookingContext";
import styles from "./select.module.scss";

const SelectServiceType = () => {
  const { serviceType, setServiceType } = useBookingContext();
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
              isSelected={serviceType?.name === name}
              onChange={() => setServiceType(option)}
            />
          );
        })}
      </Grid>
    </>
  );
}

export default SelectServiceType; 