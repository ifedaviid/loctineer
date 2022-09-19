import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Service {
    name: string;
    appointmentType: string; // appointment type i.e. installation or maintenance because its already a child of either locs or braids.
    canUseExtensions: boolean;
}
export interface ServiceCategory {
    name: string;
    services: Array<Service>;
}
export interface BookingInfo {
    category: string;
    service: Service;
    extensionUsage: boolean;
}

const initialState: BookingInfo = {
    category: null,
    service: null,
    extensionUsage: null
};

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes.

export const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        //update service category
        updateServiceCategory: (state: BookingInfo, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
        updateService: (state: BookingInfo, action: PayloadAction<Service>) => {
            state.service = action.payload;
        },
        updateExtensionUsage: (state: BookingInfo, action: PayloadAction<boolean>) => {
            state.extensionUsage = action.payload;
        }
    },
});

// Action creators are generated for each case reducer function

export const {
    updateServiceCategory,
    updateService,
    updateExtensionUsage
} = bookingSlice.actions;

export default bookingSlice.reducer;
