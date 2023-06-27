import { z } from 'zod';

const Area = z.object({
  id: z.number(),
  name: z.string(),
  code: z.string(),
  flag: z.string()
})

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
  lastUpdated: z.date()
})

const CurrentSeason = z.object({
  id: z.number(),
  startDate: z.date(),
  endDate: z.date(),
  currentMatchDay: z.number(),
  winner: Winner || z.null()
})

export const Competition = z.object({
  id: z.number(),
  area: Area,
  name: z.string(),
  code: z.string(),
  type: z.string(),
  emblem: z.string(),
  plan: z.string(),
  currentSeason: CurrentSeason,
  numberOfAvailableSeasons: z.number(),
  lastUpdated: z.date()
})