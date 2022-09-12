import React, { useState } from "react";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
import styles from "./mobile-menu.module.scss";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.mobileMenu}>
      <Menu>
        <Link href="/locs">
          <a>Instagram</a>
        </Link>
        <Link href="/braids-and-twists">
          <a>Facebook</a>
        </Link>
        <Link href="/consultation">
          <a>Snapchat</a>
        </Link>
        <Link href="/locs">
          <a>Instagram</a>
        </Link>
        <Link href="/braids-and-twists">
          <a>Facebook</a>
        </Link>
      </Menu>
    </div>
  );
};

export default MobileMenu;
