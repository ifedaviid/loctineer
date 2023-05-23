import React from "react";
import type { AppProps } from "next/app";
import { BookingProvider } from "context/booking-state";
import "styles.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BookingProvider>
      <Component {...pageProps} />
    </BookingProvider>
  );
}

export default MyApp;
