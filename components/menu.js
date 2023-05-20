import React from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
import LoctineerDesktopLogo from "./logo/loctineer-desktop-logo";
import LoctineerMobileLogo from "./logo/loctineer-mobile-logo";
import styles from "./menu.module.scss";

const Header = ({ isMobileMenuOpen, showMobileMenu }) => {
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

export default Header;
