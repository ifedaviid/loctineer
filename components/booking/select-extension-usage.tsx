import React from "react";
import Card from "../card";
import Grid from "../grid";
import dreadlocks from '../../images/dreadlocks.jpg';
import braidsPhoto from '../../images/braids-and-twists.jpg';
import { WILL_USE_EXTENSIONS, WILL_NOT_USE_EXTENSIONS } from "../../data/strings";

const SelectExtensionUsage = ({ willUseExtensions, setWillUseExtensions }) => {
    return (
        <Grid>
            <Card
                title={WILL_USE_EXTENSIONS}
                image={dreadlocks}
                isSelected={willUseExtensions}
                onChange={() => setWillUseExtensions(true)}
            />
            <Card
                title={WILL_NOT_USE_EXTENSIONS}
                image={braidsPhoto}
                isSelected={!willUseExtensions}
                onChange={() => setWillUseExtensions(false)}
            />
        </Grid>
    );
}

export default SelectExtensionUsage; 