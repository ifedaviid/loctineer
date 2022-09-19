import React from "react";
import Card from "../card";
import Grid from "../grid";
import dreadlocks from '../../images/dreadlocks.jpg';
import braidsPhoto from '../../images/braids-and-twists.jpg';
import consultationPhoto from '../../images/consultation.jpg';
import { LOCS, BRAIDS_AND_TWISTS, CONSULTATION } from "../../data/strings";

const SelectHairLength = ({ interest, setInterest }) => {


    return (
        <Grid>
            <Card
                title={LOCS}
                image={dreadlocks}
                isSelected={interest === LOCS}
                onChange={() => setInterest(LOCS)}
            />
            <Card
                title={BRAIDS_AND_TWISTS}
                image={braidsPhoto}
                isSelected={interest === BRAIDS_AND_TWISTS}
                onChange={() => setInterest(BRAIDS_AND_TWISTS)}
            />
            <Card
                title={CONSULTATION}
                image={consultationPhoto}
                isSelected={interest === CONSULTATION}
                onChange={() => setInterest(CONSULTATION)}
            />
            <Card
                title={LOCS}
                image={dreadlocks}
                isSelected={interest === LOCS}
                onChange={() => setInterest(LOCS)}
            />
            <Card
                title={BRAIDS_AND_TWISTS}
                image={braidsPhoto}
                isSelected={interest === BRAIDS_AND_TWISTS}
                onChange={() => setInterest(BRAIDS_AND_TWISTS)}
            />
            <Card
                title={CONSULTATION}
                image={consultationPhoto}
                isSelected={interest === CONSULTATION}
                onChange={() => setInterest(CONSULTATION)}
            />
        </Grid>
    );
}

export default SelectHairLength; 