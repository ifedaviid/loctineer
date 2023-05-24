import React, { useState } from "react";
import Head from "next/head";
import Drawer from "@mui/material/Drawer";
import styles from "src/layout/menu.module.scss";
import Menu from "src/layout/menu";
import MobileNavBar from "src/layout/mobile-nav-bar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const showMobileMenu = (state) => setIsMobileMenuOpen(state);
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Loctineer Bookings</title>
          <meta name="description" content="Ottawa Braider & Loctician" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Menu
          isMobileMenuOpen={isMobileMenuOpen}
          showMobileMenu={showMobileMenu}
        />

        <main>{children}</main>

        <footer className={styles.footer}>
          <p>Copyright © 2022 Loctineer Ottawa - All Rights Reserved.</p>
          <p>
            Designed & Developed by{" "}
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
      {isMobileMenuOpen && (
        <Drawer
          anchor={"right"}
          open={isMobileMenuOpen}
          onClose={() => showMobileMenu(false)}
        >
          <MobileNavBar showMobileMenu={showMobileMenu} />
        </Drawer>
      )}
    </>
  );
};

export default Layout;
