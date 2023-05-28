import React from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
import LoctineerDesktopLogo from "data/branding/loctineer-desktop-logo";
import LoctineerMobileLogo from "data/branding/loctineer-mobile-logo";
import styles from "src/template/menu-bar.module.scss";
import MenuDesktop from "src/template/menu-desktop";

const Menu = ({ isMobileMenuOpen, showMobileMenu }) => {
  return (
    <div className={styles.menuContainer}>
      {/* Desktop Navigation */}
      <div>
        <Link href="/">
          <a>
            <LoctineerDesktopLogo />
          </a>
        </Link>
        <MenuDesktop />
      </div>
      {/* Mobile Navigation */}
      <div>
        <Hamburger
          onToggle={() => showMobileMenu(true)}
          toggled={isMobileMenuOpen}
        />
        <Link href="/">
          <a>
            <LoctineerMobileLogo />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
