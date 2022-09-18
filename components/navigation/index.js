import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import styles from "./index.module.scss";
import { Twirl as Hamburger } from "hamburger-react";
import Button from "../button";
import Link from "next/link";

const NavigationBar = () => {
  // The default value is 'blue', it will be used during pre-rendering and the first render in the browser (hydration)
  const [isMobileView, setIsMobileView] = useState(false);
  // During hydration `useEffect` is called. `window` is available in `useEffect`. In this case because we know we're in the browser checking for window is not needed. If you need to read something from window that is fine.
  // By calling `setColor` in `useEffect` a render is triggered after hydrating, this causes the "browser specific" value to be available. In this case 'red'.
  useEffect(() => setIsMobileView(isMobile), []);
  // As color is a state passed as a prop there is no mismatch between what was rendered server-side vs what was rendered in the first render. After useEffect runs the color is set to 'red'
  return (
    <div className={styles.menuContainer}>
      <h1 className={styles.title}>
        Loctineer <br />
        <Link href="/"> Bookings</Link>
      </h1>
      <div className={styles.topRightMenu}>
        <div>
          <p>{`Not sure what's best for you?`}</p>
          <Button variant="primary" onClick={() => setBookingInProgress(true)}>
            Try our Help Wizard
          </Button>
        </div>
        <Hamburger />
      </div>
    </div>
  );
};

export default NavigationBar;
