import React from "react";
import { useMachine } from '@xstate/react';
import { bookingMachine } from "../../context/booking-machine";
import Card from "../card";
import Grid from "../grid";
import styles from "./select.module.scss";

const SelectExtensionLength = () => {
    const [state, send] = useMachine(bookingMachine);
    return (
        <>
            <h2 className={styles.bookingHeader}>Just a few questions about your extensions?</h2>
            <Grid>
                <Card
                    title='Will bring my extensions'
                    image={null}
                    isSelected={state.context.addingExtensions}
                    onChange={() => { }}
                />
                <Card
                    title='Will purchase extensions from Loctineer'
                    image={null}
                    isSelected={!state.context.addingExtensions}
                    onChange={() => { }}
                />
            </Grid>
        </>
    );
}

export default SelectExtensionLength; 