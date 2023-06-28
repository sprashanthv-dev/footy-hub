import React from "react";
import {
  // eslint-disable-next-line import/named
  DefinedQueryObserverResult,
  // eslint-disable-next-line import/named
  QueryObserverLoadingErrorResult,
  useQuery,
} from "@tanstack/react-query";

import { z } from "zod";

import { Competitions } from "../models/competitions";
import fetchCompetitions from "../fetchers/fetchCompetitions";
import { formatCompetitionsList } from "../utils/formatter.utils";

import styles from "../styles/CompetitionWrapper.module.css";

export const CompetitionWrapper = () => {
  const competitions = useQuery(["competitions-list"], fetchCompetitions);

  if (!competitions.isLoading) {
    const competitionList = validateSchema(competitions);
    console.log(formatCompetitionsList(competitionList));
  }

  return (
    <div className={styles.container}>
      <h2>Competitions and Leagues</h2>
      <section className={styles.competitions}></section>
    </div>
  );
};

const validateSchema = (
  competitions: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | DefinedQueryObserverResult<any, unknown>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | QueryObserverLoadingErrorResult<any, unknown>
) => {
  type competitionListApi = z.infer<typeof Competitions>;

  let competitionList: competitionListApi;
  const validationResult = Competitions.safeParse(competitions.data);

  if (validationResult.success) {
    competitionList = validationResult.data;
  } else {
    throw new Error("Error in validating competition list schema");
  }

  return competitionList;
};
