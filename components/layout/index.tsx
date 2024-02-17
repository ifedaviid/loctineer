import React, { useState } from "react";
import Head from "next/head";
import MenuDesktop from "components/layout/menu-desktop";
import MenuMobile from "components/layout/menu-mobile";
import { FacebookMessengerChat } from "components/chat-button";
import styles from "components/layout/index.module.scss";
import { business } from "data/loctineer/index";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const showMobileMenu = (state) => setIsMobileMenuOpen(state);
  const currentYear = new Date().getFullYear();
  const { name, description, facebookPageId } = business;
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>{name}</title>
          <meta name="description" content={description} />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MenuDesktop
          isMobileMenuOpen={isMobileMenuOpen}
          showMobileMenu={showMobileMenu}
        />

        <main>
          {children}
          <FacebookMessengerChat facebookPageId={facebookPageId} />
        </main>

        <footer className={styles.footer}>
          <p>Copyright © {currentYear} {name} - All Rights Reserved.</p>
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
        <MenuMobile isMobileMenuOpen={isMobileMenuOpen} showMobileMenu={showMobileMenu} />
      )}
    </>
  );
};

export default Layout;
