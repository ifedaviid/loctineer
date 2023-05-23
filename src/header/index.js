import React from "react";
import { Twirl as Hamburger } from "hamburger-react";
import Link from "next/link";
import LoctineerDesktopLogo from "src/logo/loctineer-desktop-logo";
import LoctineerMobileLogo from "src/logo/loctineer-mobile-logo";
import styles from "src/header/index.module.scss";

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
