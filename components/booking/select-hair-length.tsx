import React from "react";
import { useActor } from "@xstate/react";
import { useBookingService } from '../../context/useBookingService';
import { extensionLengthOptions } from "../../data/extension-length-options";
import SlideSelect from "../slide-select";

const SelectHairLength = () => {
    const { bookingService } = useBookingService();
    const [state, send] = useActor(bookingService);
    return (
        <div style={{ width: '100%' }}>
            <h2>How long is your natural hair?</h2>
            <SlideSelect options={extensionLengthOptions} />
        </div>
    );
}

export default SelectHairLength; 