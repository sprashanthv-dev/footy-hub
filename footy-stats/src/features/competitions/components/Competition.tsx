import React from "react";
import { Link } from "react-router-dom";

import { modCompetitionList } from "../models/modCompetitions";

import styles from "../styles/CompetitionWrapper.module.css";

type competition = {
  info: modCompetitionList;
};

const Competition = ({ info }: competition) => {
  const { emblem, code, name: leagueName, area = null } = info;

  const areaName = area ? area.name : "-";
  const areaCode = area ? area.code : "-";
  const flag = area ? area.flag : null;

  return (
    <Link to={`/${code}`} className={styles.competition}>
      {/* <section className={styles.competition}> */}
      <img src={emblem} alt="League Emblem" width={64} />
      <h2 className={styles.leagueName}>{leagueName}</h2>
      <p>
        {areaName} - {areaCode}
      </p>
      {flag && <img src={flag} alt="Country Flag" width={64} />}
      {/* </section> */}
    </Link>
  );
};

export default Competition;
