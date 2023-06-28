import { Competitions } from "../models/competitions";
import { Area } from "../models/competition";
import { z } from "zod";

type modCompetitionList = {
  area: z.infer<typeof Area>;
  code: string;
  emblem: string;
  name: string;
};

export const formatCompetitionsList = (
  response: z.infer<typeof Competitions>
): modCompetitionList[] => {
  const competitions = response.competitions;

  return competitions.map((competition): modCompetitionList => {
    const { area: areaInfo, code, emblem, name } = competition;
    return { area: { ...areaInfo }, code, emblem, name };
  });
};
