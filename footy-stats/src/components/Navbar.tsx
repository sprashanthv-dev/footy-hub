import React from "react";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navItems}>
        <li className={`${styles.navItem} ${styles.brandLogo}`}>
          <img src="/field.png" alt="App Branding Logo" width="64" />
        </li>
        <li className={styles.navItem}>Competitions & Leagues</li>
        <li className={styles.navItem}>Live Matches</li>
        <li className={styles.navItem}>Teams</li>
        <li className={styles.navItem}>About Me</li>
      </ul>
    </nav>
  );
};

export default Navbar;
