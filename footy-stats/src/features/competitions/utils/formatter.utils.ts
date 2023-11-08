import { z } from "zod";

import { CompetitionHistory } from "@/features/competitions/schemas/competitionHistory";
import { Competitions } from "@/features/competitions/schemas/competitions";

import { modCompetitionList } from "@/features/competitions/models/modCompetitions";
import { ModCompetitionHistory } from "@/features/competitions/models/modCompetitionHistory";

import {
  compInfo,
  SeasonArrayType,
} from "@/features/competitions/types/shared";

export const formatCompetitionsList = (
  response: z.infer<typeof Competitions>
): modCompetitionList[] => {
  const competitions = response.competitions || [];

  return competitions.map((competition): modCompetitionList => {
    const { area: areaInfo, code, emblem, name } = competition;
    return { area: { ...areaInfo }, code, emblem, name };
  });
};

export const formatCompetitionHistory = (
  res: z.infer<typeof CompetitionHistory>
): ModCompetitionHistory => {
  return {
    id: res.id,
    name: res.name,
    code: res.code,
    emblem: res.emblem,
    currentSeason: res.currentSeason,
    seasons: res.seasons,
  };
};

const getCompetitionBaseInfo = (input: ModCompetitionHistory): compInfo => {
  return {
    id: input.id,
    name: input.name,
    code: input.code,
    emblem: input.emblem,
    currentSeason: input.currentSeason,
  };
};

export const prepareCompHistoryInfo = (history: ModCompetitionHistory) => {
  const competitionInfo: compInfo | null = history
    ? getCompetitionBaseInfo(history)
    : null;
  let seasons: SeasonArrayType | [] =
    history && competitionInfo ? history.seasons : [];

  if (competitionInfo != null && seasons != null) {
    seasons = seasons.filter(
      (season) => season.id !== competitionInfo.currentSeason.id
    );
  }

  return {
    compInfo: competitionInfo,
    seasons,
  };
};
