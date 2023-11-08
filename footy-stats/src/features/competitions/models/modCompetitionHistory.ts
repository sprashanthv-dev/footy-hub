import { TypeOf, z } from "zod";
import { Season } from "../../schemas/competition";

const SeasonArray = z.array(Season);

type SeasonType = TypeOf<typeof Season>;
type SeasonArrayType = TypeOf<typeof SeasonArray>;

export type ModCompetitionHistory = {
  id: number;
  name: string;
  code: string;
  emblem: string;
  currentSeason: SeasonType;
  seasons: SeasonArrayType;
};
