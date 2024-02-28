import React, { useState } from "react";
import Head from "next/head";
import MenuBar from "components/layout/menu-bar";
import MenuBarDrawer from "components/layout/menu-bar-drawer";
import { FacebookMessengerChat } from "components/chat-button";
import styles from "components/layout/index.module.scss";
import { Business } from "types";

interface Props {
  business: Business;
  children: React.ReactNode;
}

const Layout = ({ business, children }: Props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const showDrawer = (state) => setIsDrawerOpen(state);
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
        <MenuBar
          isDrawerOpen={isDrawerOpen}
          showDrawer={showDrawer}
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
      {isDrawerOpen && (
        <MenuBarDrawer isDrawerOpen={isDrawerOpen} showDrawer={showDrawer} />
      )}
    </>
  );
};

export default Layout;
