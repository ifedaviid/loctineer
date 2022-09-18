import React from "react";
import Button from "../components/button";
import Layout from "../components/layout";
import Link from "next/link";
import styles from "./booking.module.scss";
import useBooking from "../components/booking/useBooking";

const Booking = () => {
    const {
        bookingStages,
        currentStage,
        currentStageIndex,
        goToStage
    } = useBooking();
    return (
        <Layout>
            <h2 className={styles.bookingHeader}>{currentStage.title}</h2>
            {currentStage.component}
            <div className={styles.buttonGroupContainer}>
                <div className={styles.stageNavigationButtonGroup}>
                    {currentStageIndex !== 0 &&
                        <Button
                            variant="secondary"
                            onClick={() => goToStage(currentStageIndex - 1, false)}
                        >
                            <Link href="/booking">Back to Previous</Link>
                        </Button>
                    }
                    {currentStageIndex !== bookingStages.length - 1 &&
                        <Button
                            variant="primary"
                            onClick={() => goToStage(currentStageIndex + 1, true)}
                        >
                            <Link href="/booking">Next Step</Link>
                        </Button>
                    }
                </div>
                <Button variant="secondary" size="large">
                    <Link href="/">Exit Booking</Link>
                </Button>
            </div>
        </Layout >
    );
};

export default Booking;
