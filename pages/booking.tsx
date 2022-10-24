import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useActor } from '@xstate/react';
import Button from "../components/button";
import Layout from "../components/layout";
import {
    ExtensionUsageModal,
    SelectServiceType,
    SelectService,
    SelectExtensionLength,
    SelectHairLength,
    SelectSchedule,
    ConfirmBooking
} from '../components/booking/index';
import styles from "./booking.module.scss";
import { bookingMachine } from '../context/booking-machine';
import { useBookingService } from '../context/useBookingService';

export const Booking = () => {
    const router = useRouter();
    const [showModal, setShowModal] = useState(false);

    // const [state, send] = useMachine(bookingFlowMachine);
    const { bookingService } = useBookingService();
    const [state, send] = useActor(bookingService);

    const { service } = state.context;
    const { initialState } = bookingMachine;

    const handleSendEvent = (event, currentStage) => {
        switch (currentStage) {
            case 'selectService':
                if (service) {
                    send({ type: event })
                    if (service.canUseExtensions) setShowModal(true)
                }
                break;
            default:
                send(event)
                break;
        }
    };

    // console.log("here: ", state.context);
    console.log("===> current state: ", state.value);

    const renderNavigationButtons = () => {
        return (
            <>
                {state.value !== initialState.value &&
                    <Button
                        variant="secondary"
                        onClick={() => send('PREV')}
                    >
                        Back to Previous
                    </Button>
                }
                {!state.done &&
                    <Button
                        variant="secondary"
                        onClick={() => handleSendEvent('NEXT', state.value)}
                    >
                        Next
                    </Button>
                }
            </>
        );
    }

    return (
        <Layout>
            {state.matches('selectServiceType') && <SelectServiceType />}
            {(state.matches('selectService') || state.matches('selectExtensionUsage')) && <SelectService />}
            {state.matches('selectExtensionLength') && <SelectExtensionLength />}
            {state.matches('selectHairLength') && <SelectHairLength />}
            {state.matches('selectSchedule') && <SelectSchedule />}
            {state.matches('reviewInfo') && <ConfirmBooking />}
            <div className={styles.buttonGroupContainer}>
                <div className={styles.stageNavigationButtonGroup}>
                    {!state.done && renderNavigationButtons()}
                </div>
                <Button
                    variant="secondary"
                    size="large"
                    onClick={() => {
                        send('EXIT')
                        router.push('/')
                    }}
                >
                    Exit Booking
                </Button>
            </div>
            {showModal && <ExtensionUsageModal setShowModal={setShowModal} />}
        </Layout >
    );
};

export default Booking;
