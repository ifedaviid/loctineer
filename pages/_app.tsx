import React from "react";
import type { AppProps } from "next/app";
import { store } from "../store";
import { Provider } from "react-redux";
import '../globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
