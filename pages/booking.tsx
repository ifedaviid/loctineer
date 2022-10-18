import React, { useState } from "react";
import Link from "next/link";
import Button from "../components/button";
import Layout from "../components/layout";
import { useBookingContext } from "../context/useBookingContext";
import {
    ExtensionUsageModal,
    SelectServiceType,
    SelectService,
    SelectExtensionInfo,
    SelectHairLength,
    ConfirmBooking
} from '../components/booking/index';
import styles from "./booking.module.scss";
import { updateServiceType, updateService, updateBringingExtensions } from "../actions/booking";
import { useDispatch } from 'react-redux';
import { useRouter } from "next/router";

const Booking = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);
    const {
        serviceType,
        service,
        bringingExtensions,
        previousStageIndex,
        currentStageIndex,
        setPreviousStageIndex,
        setCurrentStageIndex
    } = useBookingContext();

    console.log("======> previousStageIndex: ", previousStageIndex);
    console.log("======> currentStageIndex: ", currentStageIndex);

    const bookingStages = [
        {
            component: <SelectServiceType />,
            action: updateServiceType(serviceType),
            onNext: () => {
                setPreviousStageIndex(0);
                setCurrentStageIndex(1);
            },
            validation: serviceType !== null
        },
        {
            component: <SelectService />,
            action: updateService(service),
            onPrevious: () => {
                setPreviousStageIndex(0);
                setCurrentStageIndex(1);
            },
            onNext: () => {
                if (service.canUseExtensions) {
                    setShowModal(true);
                } else {
                    setPreviousStageIndex(1);
                    setCurrentStageIndex(3);
                }
            },
            validation: service !== null
        },
        {
            component: <SelectExtensionInfo />,
            action: updateBringingExtensions(bringingExtensions),
            onPrevious: () => {
                setPreviousStageIndex(0);
                setCurrentStageIndex(1);
            },
            onNext: () => {
                setPreviousStageIndex(3);
                setCurrentStageIndex(4);
            },
            validation: service !== null
        },
        {
            component: <SelectHairLength />,
            action: updateService(service),
            onPrevious: () => {
                setPreviousStageIndex(bringingExtensions ? 1 : 0);
                setCurrentStageIndex(bringingExtensions ? 2 : 1);
            },
            onNext: () => {
                setPreviousStageIndex(3);
                setCurrentStageIndex(4);
            },
            validation: service !== null
        },
        {
            component: <ConfirmBooking />,
            action: updateServiceType(serviceType),
            onNext: () => router.push('/'),
        }
    ];

    const starting = currentStageIndex === 0;
    const ending = currentStageIndex > bookingStages.length - 2;
    const ended = currentStageIndex === bookingStages.length - 1;

    return (
        <Layout>
            {bookingStages[currentStageIndex].component}
            <div className={styles.buttonGroupContainer}>
                <div className={styles.stageNavigationButtonGroup}>
                    {!starting || !ended &&
                        <Button
                            variant="secondary"
                            onClick={() => bookingStages[currentStageIndex].onPrevious()}
                        >
                            Back to Previous
                        </Button>
                    }
                    <Button
                        variant="secondary"
                        onClick={() => bookingStages[currentStageIndex].onNext()}
                    >
                        {!ending ? 'Next' : 'Submit'}
                    </Button>
                </div>
                <Button variant="secondary" size="large">
                    <Link href="/">Exit Booking</Link>
                </Button>
            </div>
            {showModal && <ExtensionUsageModal setShowModal={setShowModal} />}
        </Layout >
    );
};

export default Booking;
