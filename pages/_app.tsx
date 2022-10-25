import React from "react";
import type { AppProps } from "next/app";
import { GlobalStateProvider } from '../context/global-state-provider';
import '../styles.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStateProvider>
      <Component {...pageProps} />
    </GlobalStateProvider>
  );
}

export default MyApp;
