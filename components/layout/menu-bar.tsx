import React from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
import LoctineerLogo from "data/loctineer/logo";
import styles from "components/layout/menu-bar.module.scss";
import { nav } from "./pages";

const MenuDesktop = ({ isMobileMenuOpen, showMobileMenu }) => {
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
          onToggle={() => showMobileMenu(true)}
          toggled={isMobileMenuOpen}
        />
      </div>
    </div >
  );
};

export default MenuDesktop;
