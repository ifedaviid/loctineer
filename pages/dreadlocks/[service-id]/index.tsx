import React, { useEffect, useState } from "react";
import { useActor } from '@xstate/react';
import {
    ServiceProfile,
    ExtensionUsageModal,
    SelectExtensionLength,
    SelectHairLength,
    SelectSchedule
} from '../../../components/booking/index';
import Layout from "../../../components/layout";
// import ButtonGroupWrapper from "../../../components/button-group-wrapper";
import { Service } from "../../../types/service";
import Button from "../../../components/button";
import { getServicePaths } from '../../../static/paths';
import { getServiceProps } from '../../../static/props';
import { bookingMachine } from '../../../context/booking-machine';
import { useBookingService } from '../../../context/useBookingService';

interface Props {
    service: Service
}

const BookAppointment = ({ service }: Props) => {
    const [showModal, setShowModal] = useState(false)
    const { bookingService } = useBookingService()
    const [state, send] = useActor(bookingService)

    // Navigation Rules
    const atStart = state.value === bookingMachine.initialState.value
    const atFinal = state.matches('selectSchedule')

    useEffect(() => {
        if (state.matches('selectExtensionUsage')) setShowModal(true)
    }, [state])

    const handleSendEvent = (event, currentStage) => {
        console.log("=====> now booking: ", service)
        switch (currentStage) {
            case 'serviceProfile':
                if (service) {
                    send({ type: event, service })
                    if (service.canUseExtensions) setShowModal(true)
                }
                break;
            default:
                send(event)
                break;
        }
    };

    const renderNavigationButtons = () => {
        return (
            <>
                {!atStart &&
                    <Button
                        variant="tertiary"
                        onClick={() => send('PREV')}
                    >
                        {"<   Back"}
                    </Button>
                }
                {!atStart &&
                    < Button
                        variant="tertiary"
                        size="large"
                        onClick={() => {
                            send('EXIT')
                            // router.push('/')
                        }}
                    >
                        Exit Booking
                    </Button>

                }
            </>
        );
    }

    return (
        <Layout>
            <section className='dark'>
                <div className='nav-buttons'>
                    {!state.done && renderNavigationButtons()}
                </div>
                {(state.matches('idle') ||
                    state.matches('serviceProfile') ||
                    state.matches('selectExtensionUsage')) &&
                    <ServiceProfile service={service} />}
                {state.matches('selectExtensionLength') && <SelectExtensionLength />}
                {state.matches('selectHairLength') && <SelectHairLength />}
                {state.matches('selectSchedule') && <SelectSchedule />}
                <div>
                    {!atFinal &&
                        <Button
                            variant="secondary"
                            onClick={() => handleSendEvent('NEXT', state.value)}
                        >
                            Next
                        </Button>
                    }
                </div>
            </section>
            {showModal && <ExtensionUsageModal setShowModal={setShowModal} />}
        </Layout>
    )
};

const isDreadlocks = true
export const getStaticPaths = () => getServicePaths(isDreadlocks)
export const getStaticProps = ({ params }) => getServiceProps(params, isDreadlocks)
export default BookAppointment