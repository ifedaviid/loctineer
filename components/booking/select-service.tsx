import React from "react";
import Card from "../card";
import Grid from "../grid";
import { LOCS, BRAIDS_AND_TWISTS, CONSULTATION } from "../../data/services";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

// Services (Locs)
const LOC_REPAIR = "Loc Repair";
const LOC_RETWIST = "Loc Retwist";
const LOC_STYLING = "Loc Styling";
const NATURAL_INSTANT_DREADLOCKS = "Natural Instant dreadlocks";
const TWO_STRAND_STARTER_LOCS = "Two-strand starter locs";
const SISTER_LOCS = "Sister locs";

// Services (Braids & Twists)
const FAUX_LOCS = "Faux locs";
const SOFT_LOCS = "Soft locs";
const BUTTERFLY_DISTRESSED_LOCS = "Butterfly/Distressed Locs";
const NATURAL_BRAIDS_AND_TWISTS = "Natural hair braids & twists";
const BOX_BRAIDS_AND_TWISTS = "Box braids & twists";
const KINKY_PASSION_TWISTS = "Kinky/Passion twists";
const KNOTLESS_BRAIDS = "Knotless braids";

// Service Categories
const INSTALLATION = "Installation";
const MAINTENANCE = "Maintenance";

const SelectService = ({ interest, service, setService }) => {
  const locServices = [
    {
      name: LOC_REPAIR,
      serviceCategory: MAINTENANCE,
      canUseExtensions: true
    },
    {
      name: LOC_RETWIST,
      serviceCategory: MAINTENANCE,
      canUseExtensions: true
    },
    {
      name: LOC_STYLING,
      serviceCategory: MAINTENANCE,
      canUseExtensions: true
    },
    {
      name: NATURAL_INSTANT_DREADLOCKS,
      serviceCategory: INSTALLATION,
      canUseExtensions: true
    },
    {
      name: TWO_STRAND_STARTER_LOCS,
      serviceCategory: INSTALLATION,
      canUseExtensions: false
    },
    {
      name: SISTER_LOCS,
      serviceCategory: INSTALLATION,
      canUseExtensions: false
    },
  ];

  const batServices = [
    {
      name: FAUX_LOCS,
      serviceCategory: INSTALLATION,
      canUseExtensions: true
    },
    {
      name: SOFT_LOCS,
      serviceCategory: INSTALLATION,
      canUseExtensions: true
    },
    {
      name: BUTTERFLY_DISTRESSED_LOCS,
      serviceCategory: INSTALLATION,
      canUseExtensions: true
    },
    {
      name: NATURAL_BRAIDS_AND_TWISTS,
      serviceCategory: INSTALLATION,
      canUseExtensions: true
    },
    {
      name: BOX_BRAIDS_AND_TWISTS,
      serviceCategory: INSTALLATION,
      canUseExtensions: false
    },
    {
      name: KINKY_PASSION_TWISTS,
      serviceCategory: INSTALLATION,
      canUseExtensions: false
    },
    {
      name: KNOTLESS_BRAIDS,
      serviceCategory: INSTALLATION,
      canUseExtensions: false
    },
  ];

  const getServices = () => {
    switch (interest) {
      case LOCS:
      default:
        return locServices;
      case BRAIDS_AND_TWISTS:
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
