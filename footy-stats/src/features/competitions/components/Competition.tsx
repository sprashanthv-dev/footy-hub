import React from "react";

import { modCompetitionList } from "../models/modCompetitions";

import styles from "../styles/CompetitionWrapper.module.css";

type competition = {
  info: modCompetitionList;
};

const Competition = ({ info }: competition) => {
  const { emblem, name: leagueName, area = null } = info;

  const areaName = area ? area.name : "-";
  const areaCode = area ? area.code : "-";
  const flag = area ? area.flag : null;

  return (
    <div className={styles.competition}>
      <img src={emblem} alt="League Emblem" width={64} />
      <h2>{leagueName}</h2>
      <p>
        {areaName} - {areaCode}
      </p>
      {flag && <img src={flag} alt="Country Flag" width={64} />}
    </div>
  );
};

export default Competition;
