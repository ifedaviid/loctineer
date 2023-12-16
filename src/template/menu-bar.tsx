import React from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
import LoctineerDesktopLogo from "data/branding/loctineer-desktop-logo";
import styles from "src/template/menu-bar.module.scss";
import { menuOptions } from "./menu-options";

const Menu = ({ isMobileMenuOpen, showMobileMenu }) => {
  return (
    <div className={styles.menuContainer}>
      <Link href="/">
        <a>
          <LoctineerDesktopLogo />
        </a>
      </Link>
      <div className={styles.navIcon}>
        <Hamburger
          onToggle={() => showMobileMenu(true)}
          toggled={isMobileMenuOpen}
        />
      </div>
      <ul>
        {menuOptions.map((menuOption, idx) => {
          if (!menuOption.disabled)
            return (
              <li key={idx}>
                <Link href={menuOption.url}>{menuOption.name}</Link>
              </li>
            );
        })}
      </ul>
    </div >
  );
};

export default Menu;
