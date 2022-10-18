import React from "react";
import Card from "../card";
import Grid from "../grid";
import dreadlocks from '../../images/dreadlocks.jpg';
import braidsPhoto from '../../images/braids-and-twists.jpg';
import consultationPhoto from '../../images/consultation.jpg';
import { LOCS, BRAIDS_AND_TWISTS, CONSULTATION } from "../../data/strings";

const SelectHairLength = () => {

    return (
        <>
            <h2>Just a few questions about your hair length?</h2>
            <Grid>
                <Card
                    title='234'
                    image={null}
                />
                <Card
                    title='111'
                    image={null}
                />
            </Grid>
        </>
    );
}

export default SelectHairLength; 