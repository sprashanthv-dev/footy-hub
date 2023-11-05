import React from "react";

import { Competition } from "./Competition";

import { modCompetitionList } from "../models/modCompetitions";

import styles from "../styles/CompetitionWrapper.module.css";

type listProps = {
  competitions: modCompetitionList[];
};

export const CompetitionList = ({ competitions }: listProps) => {
  return (
    <div className={styles.competitionList}>
      {competitions.map((competition) => (
        <Competition info={competition} key={competition.code} />
      ))}
    </div>
  );
};
