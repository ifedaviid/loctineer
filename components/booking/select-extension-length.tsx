import React from "react";
import { useActor } from "@xstate/react";
import { useBookingService } from '../../context/useBookingService';
import { hairLengthOptions } from "../../data/hair-length-options";
import Card from "../card";
import Grid from "../grid";
import styles from "./select.module.scss";

const SelectExtensionLength = () => {
    const { bookingService } = useBookingService();
    const [state, send] = useActor(bookingService);
    const { service } = state.context;
    return (
        <>
            <h2 className={styles.bookingHeader}>{`How long do you want your ${service.name} extensions to be?`}</h2>
            <Grid>
                {hairLengthOptions.map((option, idx) => {
                    const { name } = option;
                    return (
                        <Card
                            key={idx}
                            title={name}
                            isSelected={false}
                            onChange={() => { }}
                        />
                    );
                })}
            </Grid>
        </>
    );
}

export default SelectExtensionLength; 