import React from "react";
import Head from "next/head";
import styles from "./layout.module.scss";
import Header from "./header";

interface Props {
  variant?: string;
  children: React.ReactNode;
}

const Layout = ({ variant, children }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loctineer Bookings</title>
        <meta name="description" content="Ottawa Braider & Loctician" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={variant}>{children}</main>

      <footer className={styles.footer}>
        <p>Copyright © 2022 Loctineer Ottawa - All Rights Reserved.</p>
        <p>
          Designed & Developed by {' '}
          <a
            href="https://ifedaviid.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            IfeDaviid
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
