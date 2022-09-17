import { useState } from 'react';
import {
    SelectInterest,
    SelectService,
    ConfirmBooking
} from '../../components/booking/index';
import { updateInterest, updateService } from './../../actions/booking';
import { useDispatch } from 'react-redux';

export default function useBooking() {
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

    return {
        bookingStages,
        currentStage: bookingStages[currentStageIndex],
        goToStage,
        currentStageIndex,
        setCurrentStageIndex,
        interest,
        setInterest,
        service,
        setService
    };
}