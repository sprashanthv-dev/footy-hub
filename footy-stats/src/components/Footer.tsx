import React from "react";

import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        Created for the passionate{" "}
        <img src="/ball.gif" width={16} alt="Football logo" /> fans with 💖 by{" "}
        <a
          href="https://github.com/sprashanthv-dev"
          target={"_blank"}
          rel="noreferrer"
        >
          sprashanthv
        </a>
      </p>
    </footer>
  );
};

export default Footer;
