import React, { useState } from "react";
import Title from "../components/title";
import CustomButton from "../components/button";
import Layout from "../components/layout";
import Link from "next/link";
import styles from "./booking.module.scss";
import {
    SelectService,
    SelectServiceType,
    SelectInstallationStyle
} from '../components/booking/index';
import { useSelector } from "react-redux";
import type { RootState } from "../store";

const Booking = () => {
    const service = useSelector((state: RootState) => state.booking.service);
    const [currentStageIndex, setCurrentStageIndex] = useState(0);

    const bookingStages = [
        {
            title: "Choose a service",
            component: <SelectService />,
        },
        {
            title: `Book a ${service} appointment`,
            component: <SelectServiceType />,
        },
        {
            title: "Choose a style",
            component: <SelectInstallationStyle />,
        }
    ];

    console.log("============> currentStageIndex", currentStageIndex);

    const goToStage = (index) => {
        const isValidIndex = index >= 0 || index < bookingStages.length - 1
        if (isValidIndex) setCurrentStageIndex(index);
    };

    return (
        <Layout>
            <Title>{bookingStages[currentStageIndex].title}</Title>
            {bookingStages[currentStageIndex].component}
            <div className={styles.buttonGroupContainer}>
                <div className={styles.stageNavigationButtonGroup}>
                    {currentStageIndex !== 0 &&
                        <CustomButton
                            variant="outlined"
                            size="large"
                            onClick={() => goToStage(currentStageIndex - 1)}
                        >
                            <Link href="/booking">Back to Previous</Link>
                        </CustomButton>
                    }
                    {currentStageIndex !== bookingStages.length - 1 &&
                        <CustomButton
                            variant="outlined"
                            size="large"
                            onClick={() => goToStage(currentStageIndex + 1)}
                        >
                            <Link href="/booking">Next Step</Link>
                        </CustomButton>
                    }
                </div>
                <CustomButton variant="link" size="large" onClick={() => setCurrentStageIndex(0)}>
                    <Link href="/">Exit Booking</Link>
                </CustomButton>
            </div>
        </Layout >
    );
};

export default Booking;
