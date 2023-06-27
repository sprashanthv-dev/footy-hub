import { z } from "zod";

import { Competition } from './competition';

const Filter = z.object({
  client: z.string()
})

export const Competitions = z.object({
  count: z.number(),
  filters: Filter,
  competitions: Competition
})