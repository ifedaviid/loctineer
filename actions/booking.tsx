import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BookingState {
    interest: string;
    service: string;
    style: string;
}

const initialState: BookingState = {
    interest: null,
    service: null,
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
        updateInterest: (state: BookingState, action: PayloadAction<string>) => {
            state.interest = action.payload;
        },
        updateService: (state: BookingState, action: PayloadAction<string>) => {
            state.service = action.payload;
        },
        updateStyle: (state: BookingState, action: PayloadAction<string>) => {
            state.style = action.payload;
        }
    },
});

// Action creators are generated for each case reducer function

export const {
    updateInterest,
    updateService,
    updateStyle
} = bookingSlice.actions;

export default bookingSlice.reducer;
