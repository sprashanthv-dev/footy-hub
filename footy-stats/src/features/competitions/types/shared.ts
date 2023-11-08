import { TypeOf, z } from "zod";

import { Season } from "@/features/competitions/schemas/competition";
import { ModCompetitionHistory } from "@/features/competitions/models/modCompetitionHistory";

export const SeasonArray = z.array(Season);
export type SeasonType = TypeOf<typeof Season>;
export type SeasonArrayType = TypeOf<typeof SeasonArray>;

export type compHistory = {
  history: ModCompetitionHistory | null;
};

export type compInfo = {
  id: number;
  name: string;
  code: string;
  emblem: string;
  currentSeason: SeasonType;
};
