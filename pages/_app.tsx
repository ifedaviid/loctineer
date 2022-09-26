import React from "react";
import type { AppProps } from "next/app";
import { store } from "../store";
import { Provider } from "react-redux";
import { BookingContextProvider } from '../context/BookingContextProvider';
import '../globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <BookingContextProvider>
        <Component {...pageProps} />
      </BookingContextProvider>
    </Provider>
  );
}

export default MyApp;
