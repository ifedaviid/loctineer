import React from "react";
import Card from "../card";
import Grid from "../grid";
import { services } from './../../data/services';

const SelectService = ({ interest, service, setService }) => {
  const serviceMenu = services.find(service => service.name === interest).services;
  return (
    <Grid>
      {serviceMenu && serviceMenu.map((serviceOption, idx) => {
        const { name, serviceCategory } = serviceOption;
        return (
          <Card
            key={idx}
            title={name}
            category={serviceCategory}
            isSelected={service === name}
            onChange={() => setService(name)}
          />
        );
      })}
    </Grid>
  );
};

export default SelectService;
