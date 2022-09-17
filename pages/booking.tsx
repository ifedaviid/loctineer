import React, { useState } from "react";
import CustomButton from "../components/button";
import Layout from "../components/layout";
import Link from "next/link";
import styles from "./booking.module.scss";
import useBooking from "../components/booking/useBooking";
import Grid from "../components/grid";

const Booking = () => {
    const {
        bookingStages,
        currentStage,
        currentStageIndex,
        setCurrentStageIndex,
        goToStage
    } = useBooking();
    return (
        <Layout>
            <h2 className={styles.bookingHeader}>{currentStage.title}</h2>
            {currentStage.component}
            <div className={styles.buttonGroupContainer}>
                <div className={styles.stageNavigationButtonGroup}>
                    {currentStageIndex !== 0 &&
                        <CustomButton
                            variant="outlined"
                            size="large"
                            onClick={() => goToStage(currentStageIndex - 1, false)}
                        >
                            <Link href="/booking">Back to Previous</Link>
                        </CustomButton>
                    }
                    {currentStageIndex !== bookingStages.length - 1 &&
                        <CustomButton
                            variant="outlined"
                            size="large"
                            onClick={() => goToStage(currentStageIndex + 1, true)}
                        >
                            <Link href="/booking">Next Step</Link>
                        </CustomButton>
                    }
                </div>
                <CustomButton variant="link" size="large">
                    <Link href="/">Exit Booking</Link>
                </CustomButton>
            </div>
        </Layout >
    );
};

export default Booking;
