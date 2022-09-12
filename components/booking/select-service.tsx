import React from "react";
import { setService } from "../../actions/booking";
import GridMenu from "../grid-menu";

const LOCS = "Locs";
const BRAIDS_AND_TWISTS = "Braids & Twists";
const CONSULTATION = "Consultation";

const SelectService = () => {
  const services = [
    {
      name: LOCS,
      action: setService(LOCS),
    },
    {
      name: BRAIDS_AND_TWISTS,
      action: setService(BRAIDS_AND_TWISTS),
    },
    {
      name: CONSULTATION,
      action: setService(CONSULTATION),
    },
  ]

  return <GridMenu items={services} />
}

export default SelectService; 