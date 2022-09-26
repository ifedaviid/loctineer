import React from "react";
import Card from "../card";
import Grid from "../grid";
import { useBookingContext } from "../../context/useBookingContext";
import styles from "./select.module.scss";

const SelectExtensionInfo = () => {
    const { bringingExtensions, setBringingExtensions } = useBookingContext();
    return (
        <>
            <h2 className={styles.bookingHeader}>Just a few questions about your extensions?</h2>
            <Grid>
                <Card
                    title='Will bring my extensions'
                    image={null}
                    isSelected={bringingExtensions}
                    onChange={() => setBringingExtensions(true)}
                />
                <Card
                    title='Will purchase extensions from Loctineer'
                    image={null}
                    isSelected={!bringingExtensions}
                    onChange={() => setBringingExtensions(false)}
                />
            </Grid>
        </>
    );
}

export default SelectExtensionInfo; 