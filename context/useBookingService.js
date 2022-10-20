import React from "react";
import { GlobalStateContext } from "./global-state-provider";

export const useBookingService = () => React.useContext(GlobalStateContext);
