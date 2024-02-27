import React from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
import LoctineerLogo from "./logo";
import styles from "components/layout/menu-bar.module.scss";
import { pages } from "./pages";

const MenuDesktop = ({ isDrawerOpen, showDrawer }) => {
  return (
    <div className={styles.menuContainer}>
      <Link href="/">
        <LoctineerLogo />
      </Link>
      <ul>
        {pages.map((page, idx) => {
          if (!page.disabled)
            return (
              <li key={idx}>
                <Link href={page.url} legacyBehavior>{page.name}</Link>
              </li>
            );
        })}
      </ul>
      <div className={styles.navIcon}>
        <Hamburger
          onToggle={() => showDrawer(true)}
          toggled={isDrawerOpen}
        />
      </div>
    </div >
  );
};

export default MenuDesktop;
