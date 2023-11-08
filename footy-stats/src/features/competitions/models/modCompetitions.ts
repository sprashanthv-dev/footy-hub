import { z } from "zod";
import { Area } from "@/types/shared";

export type modCompetitionList = {
  area: z.infer<typeof Area>;
  code: string;
  emblem: string;
  name: string;
};
