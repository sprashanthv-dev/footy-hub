import { z } from "zod";

import { Area } from "@/features/competitions/schemas/competition";
import { Season } from "./competition";

export const CompetitionHistory = z.object({
  area: Area,
  id: z.number(),
  name: z.string(),
  code: z.string(),
  type: z.string(),
  emblem: z.string(),
  currentSeason: Season,
  seasons: z.array(Season),
  lastUpdated: z.string(),
});
