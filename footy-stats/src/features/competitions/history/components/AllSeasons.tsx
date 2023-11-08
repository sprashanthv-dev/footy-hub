import React from "react";

import { ModCompetitionHistory } from "@/features/competitions/models/modCompetitionHistory";

type compHistory = {
  history: ModCompetitionHistory | null;
};

export const AllSeasons = ({ history }: compHistory) => {
  console.log("Competition History ", history);

  return <h1>All Seasons component</h1>;
};
