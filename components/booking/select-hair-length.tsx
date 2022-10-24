import React from "react";
import { useActor } from "@xstate/react";
import { useBookingService } from '../../context/useBookingService';
import { extensionLengthOptions } from "../../data/extension-length-options";
import Card from "../card";
import Grid from "../grid";

const SelectHairLength = () => {
    const { bookingService } = useBookingService();
    const [state, send] = useActor(bookingService);

    return (
        <>
            <h2>Just a few questions about your hair length?</h2>
            <Grid>
                {extensionLengthOptions.map((option, idx) => {
                    const { name, photo } = option;
                    return (
                        <Card
                            key={idx}
                            title={name}
                            image={photo}
                            isSelected={state.context.serviceType?.name === name}
                            onChange={() => { }}
                        />
                    );
                })}
            </Grid>
        </>
    );
}

export default SelectHairLength; 