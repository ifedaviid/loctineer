import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BookingState {
    service: string;
    serviceType: string;
    style: string;
}

const initialState: BookingState = {
    service: null,
    serviceType: null,
    style: null
};

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes.

export const bookingSlice = createSlice({
    name: "booking",
    initialState,
    reducers: {
        setService: (state: BookingState, action: PayloadAction<string>) => {
            state.service = action.payload;
        },
        setServiceType: (state: BookingState, action: PayloadAction<string>) => {
            state.serviceType = action.payload;
        },
        setStyle: (state: BookingState, action: PayloadAction<string>) => {
            state.style = action.payload;
        }
    },
});

// Action creators are generated for each case reducer function

export const {
    setService,
    setServiceType,
    setStyle
} = bookingSlice.actions;

export default bookingSlice.reducer;
