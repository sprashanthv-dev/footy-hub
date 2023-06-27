import React from "react";

import styles from "../styles/CompetitionWrapper.module.css";

const Competition = () => {
  return (
    <div className={styles.competition}>
      <img src="https://crests.football-data.org/ELC.png" alt="League Emblem" />
      <h2>Championship</h2>
      <p>England - </p>
      <img src="https://crests.football-data.org/770.svg" alt="Country Flag" />
    </div>
  );
};

export default Competition;
