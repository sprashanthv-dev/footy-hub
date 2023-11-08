import { z } from "zod";

import { Area } from "@/types/shared";

const Winner = z.object({
  id: z.number(),
  name: z.string(),
  shortName: z.string(),
  tla: z.string(),
  crest: z.string(),
  address: z.string(),
  website: z.string(),
  founded: z.number(),
  clubColors: z.string(),
  venue: z.string(),
  lastUpdated: z.string(),
});

export const Season = z.object({
  id: z.number(),
  startDate: z.string(),
  endDate: z.string(),
  currentMatchday: z.number().nullable(),
  winner: Winner.nullable(),
});

export const Competition = z.object({
  id: z.number(),
  area: Area,
  name: z.string(),
  code: z.string(),
  type: z.string(),
  emblem: z.string(),
  plan: z.string(),
  currentSeason: Season.nullable(),
  numberOfAvailableSeasons: z.number(),
  lastUpdated: z.string(),
});
