import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { IconButton } from '@mui/material';
import { bookingMachine } from '../booking-machine';
import { useBookingService } from 'src/helpers';
import { useActor } from '@xstate/react';
import styles from "src/booking/stages/use-navigation-wrapper.module.scss";

interface Props {
    handleExit: () => void
    disableExit?: boolean
    handleNext?: () => void
    disableNext?: boolean
}

const useBookingNavigation = ({ handleExit, disableExit, handleNext, disableNext }: Props) => {
    const { bookingService } = useBookingService();
    const [state, send] = useActor(bookingService);
    const atStart =
        state.value === bookingMachine.initialState.value ||
        state.matches("selectExtensionUsage");
    const showBackButton = !state.done && !atStart;
    const showNextButton = !state.matches("selectSchedule");
    const showExitButton = !atStart;

    const renderExitbutton = () => (
        <IconButton className={styles.exitButton} color="secondary" aria-label="exit" size="large" onClick={handleExit} disabled={disableExit}>
            <CloseIcon fontSize="inherit" />
        </IconButton>
    )

    const renderBackbutton = () => (
        <IconButton className={styles.backButton} color='secondary' aria-label="backward" size="large" onClick={() => send("PREV")}>
            <ArrowBackIcon fontSize="inherit" />
        </IconButton>
    )

    const renderNextbutton = () => (
        <IconButton className={styles.nextButton} color='primary' aria-label="forward" size="large" onClick={handleNext} disabled={disableNext}>
            <ArrowForwardIcon fontSize="inherit" />
        </IconButton>
    )

    return {
        showExitButton,
        showBackButton,
        showNextButton,
        renderExitbutton,
        renderBackbutton,
        renderNextbutton,
    }
}

export default useBookingNavigation