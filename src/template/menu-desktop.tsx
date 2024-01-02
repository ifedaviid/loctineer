import React from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
import LoctineerLogo from "data/logo";
import styles from "src/template/menu-bar.module.scss";
import { menuOptions } from "./menu-options";

const MenuDesktop = ({ isMobileMenuOpen, showMobileMenu }) => {
  return (
    <div className={styles.menuContainer}>
      <Link href="/">
        <a>
          <LoctineerLogo />
        </a>
      </Link>
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
