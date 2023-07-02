import { z } from "zod";

import { Competitions } from "../models/competitions";
import { modCompetitionList } from "../models/modCompetitions";

export const formatCompetitionsList = (
  response: z.infer<typeof Competitions>
): modCompetitionList[] => {
  const competitions = response.competitions || [];

  return competitions.map((competition): modCompetitionList => {
    const { area: areaInfo, code, emblem, name } = competition;
    return { area: { ...areaInfo }, code, emblem, name };
  });
};
