import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import Link from "next/link";
import Button from "../components/button";
import Layout from "../components/layout";
import {
    SelectInterest,
    SelectService,
    ConfirmBooking
} from '../components/booking/index';
import { updateInterest, updateService } from './../actions/booking';
import styles from "./booking.module.scss";

const Booking = () => {
    const dispatch = useDispatch();
    const [currentStageIndex, setCurrentStageIndex] = useState(0);
    const [interest, setInterest] = useState(null);
    const [service, setService] = useState(null);

    const bookingStages = [
        {
            title: "What are you interested in?",
            component: <SelectInterest interest={interest} setInterest={setInterest} />,
        },
        {
            title: `Choose a ${interest} service`,
            component: <SelectService interest={interest} service={service} setService={setService} />,
        },
        {
            title: `Thank you! See you soon!`,
            component: <ConfirmBooking />,
        }
    ];

    const saveSelection = () => {
        switch (currentStageIndex) {
            case 0:
                dispatch(updateInterest(interest));
                break;
            case 1:
                dispatch(updateService(service));
                break;
            default:
                break;
        }
    }

    const goToStage = (index, clickedNext) => {
        const isValidIndex = index >= 0 || index < bookingStages.length - 1
        if (isValidIndex) setCurrentStageIndex(index);
        if (clickedNext) saveSelection();
    };

    return (
        <Layout>
            <h2 className={styles.bookingHeader}>{bookingStages[currentStageIndex].title}</h2>
            {bookingStages[currentStageIndex].component}
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
