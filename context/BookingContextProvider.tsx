import React, { useState } from 'react';
import {
    Service,
    ServiceType,
    ExtensionLength,
} from '../actions/booking';

interface BookingContext {
    previousStageIndex: number,
    currentStageIndex: number,
    serviceType: ServiceType,
    service: Service,
    bringingExtensions: boolean,
    extensionLength: ExtensionLength,
    /**********************/
    setPreviousStageIndex: (previousStage: number) => void;
    setCurrentStageIndex: (currentStage: number) => void;
    setServiceType: (serviceType: ServiceType) => void;
    setService: (service: Service) => void;
    setBringingExtensions: (bringingExtensions: boolean) => void;
    setExtensionLength: (extensionLength: ExtensionLength) => void;
}

export const BookingContext = React.createContext<BookingContext>({
    previousStageIndex: 0,
    currentStageIndex: 0,
    serviceType: null,
    service: null,
    bringingExtensions: null,
    extensionLength: null,
    /**********************/
    setPreviousStageIndex: () => { },
    setCurrentStageIndex: () => { },
    setServiceType: () => { },
    setService: () => { },
    setBringingExtensions: () => { },
    setExtensionLength: () => { },
});

export const BookingContextProvider = (props) => {
    // We need to know the current booking stage
    const [previousStageIndex, setPreviousStageIndex] = useState(0);
    const [currentStageIndex, setCurrentStageIndex] = useState(0);

    // We also need to keep track of the appointment info
    const [serviceType, setServiceType] = useState<ServiceType>(null);
    const [service, setService] = useState<Service>(null);
    const [bringingExtensions, setBringingExtensions] = useState(null);
    const [extensionLength, setExtensionLength] = useState<ExtensionLength>(null);

    return (
        <BookingContext.Provider
            value={{
                previousStageIndex: previousStageIndex,
                currentStageIndex: currentStageIndex,
                serviceType: serviceType,
                service: service,
                bringingExtensions: bringingExtensions,
                extensionLength: extensionLength,
                /**********************/
                setPreviousStageIndex: setPreviousStageIndex,
                setCurrentStageIndex: setCurrentStageIndex,
                setServiceType: setServiceType,
                setService: setService,
                setBringingExtensions: setBringingExtensions,
                setExtensionLength: setExtensionLength,
            }}
        >
            {props.children}
        </BookingContext.Provider>
    );
};