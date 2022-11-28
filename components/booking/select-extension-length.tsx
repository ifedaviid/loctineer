import React from "react";
import { useActor } from "@xstate/react";
import { useBookingService } from '../../context/useBookingService';
import { extensionLengthOptions } from "../../data/extension-length-options";
import SlideSelect from "../slide-select";

const SelectExtensionLength = () => {
    const { bookingService } = useBookingService();
    const [state, send] = useActor(bookingService);
    const { service } = state.context;
    return (
        <div style={{ width: '100%' }}>
            <h2>{`How long do you want your ${service.name} extensions to be?`}</h2>
            <SlideSelect options={extensionLengthOptions} />
        </div>
    );
}

export default SelectExtensionLength; 