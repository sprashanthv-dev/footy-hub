import { z } from "zod";
import { Area } from "@/features/competitions/schemas/competition";

export type modCompetitionList = {
  area: z.infer<typeof Area>;
  code: string;
  emblem: string;
  name: string;
};
