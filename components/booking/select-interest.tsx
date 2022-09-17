import React from "react";
import Card from "../card";
import Grid from "../grid";
import { LOCS, BRAIDS_AND_TWISTS, CONSULTATION } from "../../data/services";

const SelectInterest = ({ interest, setInterest }) => {
  return (
    <Grid>
      <Card
        title={LOCS}
        isSelected={interest === LOCS}
        onChange={() => setInterest(LOCS)}
      />
      <Card
        title={BRAIDS_AND_TWISTS}
        isSelected={interest === BRAIDS_AND_TWISTS}
        onChange={() => setInterest(BRAIDS_AND_TWISTS)}
      />
      <Card
        title={CONSULTATION}
        isSelected={interest === CONSULTATION}
        onChange={() => setInterest(CONSULTATION)}
      />
    </Grid>
  );
}

export default SelectInterest; 