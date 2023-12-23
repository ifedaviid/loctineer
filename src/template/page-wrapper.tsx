import React, { useState } from "react";
import Head from "next/head";
import Drawer from "@mui/material/Drawer";
import Menu from "src/template/menu-bar";
import MenuMobile from "src/template/menu-mobile";
import { FacebookMessengerChat } from "src/components/chat-button";
import styles from "src/template/page-wrapper.module.scss";

interface Props {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const showMobileMenu = (state) => setIsMobileMenuOpen(state);
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Loctineer</title>
          <meta name="description" content="Locs & Braiding Specialist in Ottawa" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Menu
          isMobileMenuOpen={isMobileMenuOpen}
          showMobileMenu={showMobileMenu}
        />

        <main>
          {children}
          <FacebookMessengerChat />
        </main>

        <footer className={styles.footer}>
          <p>Copyright © {currentYear} Loctineer - All Rights Reserved.</p>
          <p className={styles.siteAuthor}>
            Made by{" "}
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
          anchor="right"
          open={isMobileMenuOpen}
          onClose={() => showMobileMenu(false)}
        >
          <MenuMobile showMobileMenu={showMobileMenu} />
        </Drawer>
      )}
    </>
  );
};

export default PageWrapper;
