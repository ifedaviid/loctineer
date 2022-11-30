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
import ButtonGroupWrapper from "../../../components/button-group-wrapper";

interface Props {
    service: Service
}

const BraidsAndTwistsService = ({ service }: Props) => {
    const [showModal, setShowModal] = useState(false)
    const { bookingService } = useBookingService()
    const [state, send] = useActor(bookingService)

    // Rules for dtermining key positions in the booking process.
    const atFinal = state.matches('selectSchedule')
    const atStart = (
        state.value === bookingMachine.initialState.value || 
        state.matches('selectExtensionUsage')
    )

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
            </>
        );
    }

    return (
        <Layout>
            <section className='gray'>
                {!state.done && renderNavigationButtons()}
                {(state.matches('idle') ||
                    state.matches('serviceProfile') ||
                    state.matches('selectExtensionUsage')) &&
                    <ServiceProfile service={service} />}
                {state.matches('selectExtensionLength') && <SelectExtensionLength />}
                {state.matches('selectHairLength') && <SelectHairLength />}
                {state.matches('selectSchedule') && <SelectSchedule />}
                {!atStart &&
                    <ButtonGroupWrapper style={{ margin: '2rem 0'}}>
                        {!atFinal &&
                            <Button
                                variant="primary"
                                onClick={() => handleSendEvent('NEXT', state.value)}
                            >
                                Next
                            </Button>
                        }
                        < Button
                            variant="secondary"
                            size="large"
                            onClick={() => {
                                send('EXIT')
                                // router.push('/')
                            }}
                        >
                            X
                        </Button>
                    </ButtonGroupWrapper>
                }
            </section>
            {showModal && <ExtensionUsageModal setShowModal={setShowModal} />}
        </Layout>
    )
};

const isDreadlocks = false
export const getStaticPaths = () => getServicePaths(isDreadlocks)
export const getStaticProps = ({ params }) => getServiceProps(params, isDreadlocks)
export default BraidsAndTwistsService