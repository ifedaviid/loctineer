import React from "react";
import Card from "../card";
import Grid from "../grid";
import * as services from "../../data/services";

const SelectService = ({ interest, service, setService }) => {
  const locServices = [
    {
      name: services.LOC_REPAIR,
      serviceCategory: services.MAINTENANCE,
      canUseExtensions: true
    },
    {
      name: services.LOC_RETWIST,
      serviceCategory: services.MAINTENANCE,
      canUseExtensions: true
    },
    {
      name: services.LOC_STYLING,
      serviceCategory: services.MAINTENANCE,
      canUseExtensions: true
    },
    {
      name: services.NATURAL_INSTANT_DREADLOCKS,
      serviceCategory: services.INSTALLATION,
      canUseExtensions: true
    },
    {
      name: services.TWO_STRAND_STARTER_LOCS,
      serviceCategory: services.INSTALLATION,
      canUseExtensions: false
    },
    {
      name: services.SISTER_LOCS,
      serviceCategory: services.INSTALLATION,
      canUseExtensions: false
    },
  ];

  const batServices = [
    {
      name: services.FAUX_LOCS,
      serviceCategory: services.INSTALLATION,
      canUseExtensions: true
    },
    {
      name: services.SOFT_LOCS,
      serviceCategory: services.INSTALLATION,
      canUseExtensions: true
    },
    {
      name: services.BUTTERFLY_DISTRESSED_LOCS,
      serviceCategory: services.INSTALLATION,
      canUseExtensions: true
    },
    {
      name: services.NATURAL_BRAIDS_AND_TWISTS,
      serviceCategory: services.INSTALLATION,
      canUseExtensions: true
    },
    {
      name: services.BOX_BRAIDS_AND_TWISTS,
      serviceCategory: services.INSTALLATION,
      canUseExtensions: false
    },
    {
      name: services.KINKY_PASSION_TWISTS,
      serviceCategory: services.INSTALLATION,
      canUseExtensions: false
    },
    {
      name: services.KNOTLESS_BRAIDS,
      serviceCategory: services.INSTALLATION,
      canUseExtensions: false
    },
  ];

  const getServices = () => {
    switch (interest) {
      case services.LOCS:
      default:
        return locServices;
      case services.BRAIDS_AND_TWISTS:
        return batServices;
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
