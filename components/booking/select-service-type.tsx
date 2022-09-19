import React from "react";
import Card from "../card";
import Grid from "../grid";
import dreadlocks from '../../images/dreadlocks.jpg';
import braidsPhoto from '../../images/braids-and-twists.jpg';
import consultationPhoto from '../../images/consultation.jpg';
import { LOCS, BRAIDS_AND_TWISTS, CONSULTATION } from "../../data/strings";

const SelectServiceType = ({ serviceCategory, setServiceCategory }) => {
  return (
    <Grid>
      <Card
        title={LOCS}
        image={dreadlocks}
        isSelected={serviceCategory === LOCS}
        onChange={() => setServiceCategory(LOCS)}
      />
      <Card
        title={BRAIDS_AND_TWISTS}
        image={braidsPhoto}
        isSelected={serviceCategory === BRAIDS_AND_TWISTS}
        onChange={() => setServiceCategory(BRAIDS_AND_TWISTS)}
      />
      <Card
        title={CONSULTATION}
        image={consultationPhoto}
        isSelected={serviceCategory === CONSULTATION}
        onChange={() => setServiceCategory(CONSULTATION)}
      />
    </Grid>
  );
}

export default SelectServiceType; 