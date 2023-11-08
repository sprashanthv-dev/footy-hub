import {
  SeasonArrayType,
  SeasonType,
} from "@/features/competitions/types/shared";

export type ModCompetitionHistory = {
  id: number;
  name: string;
  code: string;
  emblem: string;
  currentSeason: SeasonType;
  seasons: SeasonArrayType;
};
