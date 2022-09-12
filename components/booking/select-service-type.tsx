import React from "react";
import Title from "../title";
import type { RootState } from "../../store";
import { useSelector } from 'react-redux';
import GridMenu from "../grid-menu";
import { setServiceType } from "../../actions/booking";

const INSTALLATION = "Installation";
const MAINTENANCE = "Maintenance";

const SelectServiceType = () => {
  const serviceTypes = [
    {
      name: "Book an installation appointment",
      description:
        "Suitable if you have lengthy locs and would like to style them.",
      action: setServiceType(INSTALLATION),
    },
    {
      name: "Book a maintenance appointment",
      description:
        "Suitable if you're trying to recover or reattach damaged or broken locs.",
      action: setServiceType(MAINTENANCE),
    },
  ];

  return <GridMenu items={serviceTypes} />
};

export default SelectServiceType;
