import React from "react";
import Card from "../card";
import Grid from "../grid";
import dreadlocks from '../../images/dreadlocks.jpg';
import braidsPhoto from '../../images/braids-and-twists.jpg';
import consultationPhoto from '../../images/consultation.jpg';
import { LOCS, BRAIDS_AND_TWISTS, CONSULTATION } from "../../data/strings";

const SelectHairLength = () => {

    return (
        <Grid>
            <Card
                title={LOCS}
                image={dreadlocks}
            />
            <Card
                title={BRAIDS_AND_TWISTS}
                image={braidsPhoto}
            />
        </Grid>
    );
}

export default SelectHairLength; 