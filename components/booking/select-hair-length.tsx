import React from "react";
import { useActor } from "@xstate/react";
import { useBookingService } from '../../context/useBookingService';
import { naturalHairLengthOptions } from "../../data/hair-length-options";
import SlideSelect from "../slide-select";

const SelectHairLength = () => {
    const { bookingService } = useBookingService();
    const [state, send] = useActor(bookingService);
    return (
        <div style={{ width: '100%' }}>
            <h2>How long is your natural hair?</h2>
            <SlideSelect options={naturalHairLengthOptions} />
        </div>
    );
}

export default SelectHairLength; 