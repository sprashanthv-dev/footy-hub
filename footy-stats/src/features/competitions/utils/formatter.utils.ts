import { z } from "zod";

import { CompetitionHistory } from "@/features/schemas/competitionHistory";
import { Competitions } from "@/features/schemas/competitions";

import { modCompetitionList } from "@/features/competitions/models/modCompetitions";
import { ModCompetitionHistory } from "@/features/competitions/models/modCompetitionHistory";

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
