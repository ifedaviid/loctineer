import React from 'react';
import { useActor } from '@xstate/react';
import { useBookingService } from '../../context/useBookingService';
import Button from '../button';
import ButtonGroupWrapper from '../button-group-wrapper';
import CustomImage from '../custom-image';
import styles from './service-profile.module.scss'


const ServiceProfile = ({ service }) => {
    const { bookingService } = useBookingService()
    const [, send] = useActor(bookingService)
    const { name, description, image, cta } = service

    return (
        <div className={styles['profile-container']}>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <ButtonGroupWrapper>
                    {cta.primary && (
                        <Button
                            variant="primary"
                            onClick={() => send({ type: 'BOOK_APPOINTMENT', service })}
                        >
                            Book Appointment
                        </Button>
                    )}
                </ButtonGroupWrapper>
            </div>
            <CustomImage image={image} />
        </div>
    )
}

export default ServiceProfile