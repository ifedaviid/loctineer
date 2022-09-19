import React from "react";
import Card from "../card";
import Grid from "../grid";
import { services } from './../../data/services';

const SelectService = ({ serviceCategory, serviceName, setServiceName }) => {
  const serviceMenu = services.find(category => category.name === serviceCategory).services;
  return (
    <Grid>
      {serviceMenu && serviceMenu.map((serviceOption, idx) => {
        const { name, appointmentType } = serviceOption;
        return (
          <Card
            key={idx}
            title={name}
            category={appointmentType}
            isSelected={serviceName === name}
            onChange={() => setServiceName(name)}
          />
        );
      })}
    </Grid>
  );
};

export default SelectService;
