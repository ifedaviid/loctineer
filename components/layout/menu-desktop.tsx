import React from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
import LoctineerLogo from "data/loctineer/logo";
import styles from "components/layout/menu-desktop.module.scss";
import { menuOptions } from "./menu-options";

const MenuDesktop = ({ isMobileMenuOpen, showMobileMenu }) => {
  return (
    <div className={styles.menuContainer}>
      <Link href="/">

        <LoctineerLogo />

      </Link>
      <ul>
        {menuOptions.map((menuOption, idx) => {
          if (!menuOption.disabled)
            return (
              <li key={idx}>
                <Link href={menuOption.url} legacyBehavior>{menuOption.name}</Link>
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
