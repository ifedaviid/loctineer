import React from "react";
import Card from "../card";
import Grid from "../grid";
import { LOCS, BRAIDS_AND_TWISTS, dreadlocksServices, braidingServices } from "../../data/services";

const SelectService = ({ interest, service, setService }) => {
  const getServices = () => {
    switch (interest) {
      case LOCS:
      default:
        return dreadlocksServices;
      case BRAIDS_AND_TWISTS:
        return braidingServices;
    }
  };

  return (
    <Grid>
      {getServices().map((serviceObj, idx) => {
        const { name } = serviceObj;
        return (
          <Card
            key={idx}
            title={name}
            isSelected={service === name}
            onChange={() => setService(name)}
          />
        );
      })}
    </Grid>
  );
};

export default SelectService;
