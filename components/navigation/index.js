import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { Twirl as Hamburger } from "hamburger-react";
import Button from "../button";
import Link from "next/link";
import LoctineerDesktopLogo from "../logo/loctineer-desktop-logo";
import LoctineerMobileLogo from "../logo/loctineer-mobile-logo";
import styles from "./index.module.scss";

const NavigationBar = () => {
  const router = useRouter();
  // The default value is 'blue', it will be used during pre-rendering and the first render in the browser (hydration)
  const [isMobileView, setIsMobileView] = useState(false);
  // During hydration `useEffect` is called. `window` is available in `useEffect`. In this case because we know we're in the browser checking for window is not needed. If you need to read something from window that is fine.
  // By calling `setColor` in `useEffect` a render is triggered after hydrating, this causes the "browser specific" value to be available. In this case 'red'.
  useEffect(() => setIsMobileView(isMobile), []);
  // As color is a state passed as a prop there is no mismatch between what was rendered server-side vs what was rendered in the first render. After useEffect runs the color is set to 'red'

  const renderMenuList = () => (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/">Services</Link>
      </li>
      <li>
        <Link href="/">Contact Us</Link>
      </li>
    </ul>
  );

  return (
    <div className={styles.menuContainer}>
      {/* Desktop Navigation */}
      <div>
        <LoctineerDesktopLogo />
        {renderMenuList()}
      </div>
      {/* Mobile Navigation */}
      <div>
        <LoctineerMobileLogo />
        <Hamburger />
      </div>
    </div>
  );
};

export default NavigationBar;
