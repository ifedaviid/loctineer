import React from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
import LoctineerDesktopLogo from "src/layout/loctineer-desktop-logo";
import LoctineerMobileLogo from "src/layout/loctineer-mobile-logo";
import styles from "src/layout/menu.module.scss";

const Menu = ({ isMobileMenuOpen, showMobileMenu }) => {
  const renderNavigationMenu = () => (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Services</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Contact Us</a>
        </Link>
      </li>
    </ul>
  );

  return (
    <div className={styles.menuContainer}>
      {/* Desktop Navigation */}
      <div>
        <Link href="/">
          <a>
            <LoctineerDesktopLogo />
          </a>
        </Link>
        {renderNavigationMenu()}
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
