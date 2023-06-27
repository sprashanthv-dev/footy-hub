import React from "react";

import styles from "../styles/CompetitionWrapper.module.css";

export const CompetitionWrapper = () => {
  return (
    <div className={styles.container}>
      <h2>Competitions and Leagues</h2>
      <section className={styles.competitions}></section>
    </div>
  );
};
