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

const Booking = () => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const {
        serviceType,
        service,
        bringingExtensions,
        currentStageIndex,
        setCurrentStageIndex
    } = useBookingContext();

    const bookingStages = [
        {
            component: <SelectServiceType />,
            action: updateServiceType(serviceType),
            validation: serviceType !== null
        },
        {
            component: <SelectService />,
            action: updateService(service),
            validation: service !== null
        },
        {
            component: <SelectExtensionInfo />,
            action: updateBringingExtensions(bringingExtensions),
            validation: service !== null
        },
        {
            component: <SelectHairLength />,
            action: updateService(service),
            validation: service !== null
        },
        {
            component: <ConfirmBooking />,
            action: updateServiceType(serviceType)
        }
    ];

    const isValidIndex = (index) => index >= 0 || index < bookingStages.length - 1;

    const handleNavigation = (currentIndex, nextIndex) => {
        if (!isValidIndex(nextIndex)) return;
        // Forward or Backward
        if (nextIndex > currentIndex) {
            // Valid or invalid selection
            if (bookingStages[currentIndex].validation) {
                // Save in Redux store
                dispatch(bookingStages[currentIndex].action);
                // Show Modal or Proceed
                if (nextIndex === 2) {
                    if (service.canUseExtensions) {
                        setShowModal(true)
                    }
                    setCurrentStageIndex(nextIndex + 1);
                } else {
                    setCurrentStageIndex(nextIndex);
                }
            }
        } else {
            setCurrentStageIndex(nextIndex);
        }
    }

    return (
        <Layout>
            {bookingStages[currentStageIndex].component}
            <div className={styles.buttonGroupContainer}>
                <div className={styles.stageNavigationButtonGroup}>
                    {currentStageIndex !== 0 &&
                        <Button
                            variant="secondary"
                            onClick={() => handleNavigation(currentStageIndex, currentStageIndex - 1)}
                        >
                            Back to Previous
                        </Button>
                    }
                    {currentStageIndex !== bookingStages.length - 1 &&
                        <Button
                            variant="primary"
                            onClick={() => handleNavigation(currentStageIndex, currentStageIndex + 1)}
                        >
                            Next Step
                        </Button>
                    }
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
