import React from "react";
import {
  // eslint-disable-next-line import/named
  DefinedQueryObserverResult,
  // eslint-disable-next-line import/named
  QueryObserverLoadingErrorResult,
  useQuery,
} from "@tanstack/react-query";

import { z } from "zod";

import fetchCompetitions from "../fetchers/fetchCompetitions";

import { Competitions } from "../models/competitions";
import { modCompetitionList } from "../models/modCompetitions";

import { formatCompetitionsList } from "../utils/formatter.utils";

import Spinner from "../../../components/Spinner";
import CompetitionList from "../components/CompetitionList";

import styles from "../styles/CompetitionWrapper.module.css";

export const CompetitionWrapper = () => {
  const competitions = useQuery(["competitions-list"], fetchCompetitions);
  let modCompetitions: modCompetitionList[] = [];

  if (!competitions.isLoading) {
    const competitionList = validateSchema(competitions);
    modCompetitions = formatCompetitionsList(competitionList);
  } else {
    return <Spinner loading={true} />;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Competitions and Leagues</h2>
      <section className={styles.competitions}>
        {Object.keys(modCompetitions).length && (
          <CompetitionList competitions={modCompetitions} />
        )}
      </section>
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
