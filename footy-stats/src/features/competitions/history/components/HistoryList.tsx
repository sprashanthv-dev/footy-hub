import React from "react";
import { useParams } from "react-router-dom";
import {
  useQuery,
  DefinedQueryObserverResult,
  QueryObserverLoadingErrorResult,
} from "@tanstack/react-query";

import { z } from "zod";

import Spinner from "@/components/Spinner";
import { CompetitionHistory } from "@/features/schemas/competitionHistory";
import { formatCompetitionHistory } from "@/features/competitions/utils/formatter.utils";

import { AllSeasons } from "./AllSeasons";
import { ModCompetitionHistory } from "../../models/modCompetitionHistory";

import fetchCompetitionHistory from "../fetchers/fetchCompetitionHistory";

export const HistoryList = () => {
  const { code: id } = useParams();

  const competitionHistory = useQuery(
    ["competition-history"],
    fetchCompetitionHistory
  );

  let formattedResponse: ModCompetitionHistory | null = null;

  if (!competitionHistory.isLoading) {
    try {
      const validatedResponse = validateSchema(competitionHistory, id);
      formattedResponse = formatCompetitionHistory(validatedResponse);
    } catch (error: unknown) {
      console.log(error);
    }
  } else {
    return <Spinner loading={true} />;
  }

  return (
    <div>
      <p>Competition History List Page</p>
      <AllSeasons history={formattedResponse} />
    </div>
  );
};

const validateSchema = (
  competitionHistory: // eslint-disable-next-line @typescript-eslint/no-explicit-any
  | DefinedQueryObserverResult<any, unknown>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    | QueryObserverLoadingErrorResult<any, unknown>,
  id: string | undefined
) => {
  type compHistoryResponse = z.infer<typeof CompetitionHistory>;
  let validationResult: compHistoryResponse;

  const isValid = CompetitionHistory.safeParse(competitionHistory.data);

  if (isValid.success) {
    validationResult = competitionHistory.data;
  } else {
    console.log(isValid.error.message);
    throw new Error(
      `Error in validating in competition history schema for competition -> ${id}`
    );
  }

  return validationResult;
};
