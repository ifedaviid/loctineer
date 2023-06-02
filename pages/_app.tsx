import React from "react";
import type { AppProps } from "next/app";
import { BookingProvider } from "src/booking/booking-state";
import "src/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BookingProvider>
      <Component {...pageProps} />
    </BookingProvider>
  );
}

export default MyApp;
