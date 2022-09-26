import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { StaticImageData } from 'next/image';

export enum ServiceCategory {
    INSTALLATION = 'Installation',
    MAINTENANCE = 'Maintenance'
}

export interface ExtensionLength {
    name: string,
    photo: StaticImageData
}

export interface ServiceType {
    name: string;
    photo: StaticImageData;
    services?: Array<Service>;
}

export interface Service {
    name: string;
    category: ServiceCategory;
    canUseExtensions: boolean;
}

/******************************************/
/******************************************/

export interface Appointment {
    serviceType: ServiceType;
    service: Service;
    bringingExtensions: boolean;
    extensionLength: ExtensionLength;
}

const initialState: Appointment = {
    serviceType: null,
    service: null,
    bringingExtensions: null,
    extensionLength: null
};

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes.

export const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        updateServiceType: (state: Appointment, action: PayloadAction<ServiceType>) => {
            state.serviceType = action.payload;
        },
        updateService: (state: Appointment, action: PayloadAction<Service>) => {
            state.service = action.payload;
        },
        updateBringingExtensions: (state: Appointment, action: PayloadAction<boolean>) => {
            state.bringingExtensions = action.payload;
        }
    },
});

// Action creators are generated for each case reducer function
export const {
    updateServiceType,
    updateService,
    updateBringingExtensions
} = bookingSlice.actions;

export default bookingSlice.reducer;
