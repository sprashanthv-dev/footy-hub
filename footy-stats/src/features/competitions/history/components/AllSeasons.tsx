import React from "react";

import {
  compHistory,
  compInfo,
  SeasonArrayType,
} from "@/features/competitions/types/shared";

import { prepareCompHistoryInfo } from "@/features/competitions/utils/formatter.utils";
import Season from "@/features/competitions/history/components/Season";

export const AllSeasons = ({ history }: compHistory) => {
  console.log("Competition History ", history);

  let compInfo: compInfo | null = null;
  let seasons: SeasonArrayType | [] = [];

  if (history) {
    const compHistoryInfo = prepareCompHistoryInfo(history);

    compInfo = compHistoryInfo.compInfo;
    seasons = compHistoryInfo.seasons;
  }

  return (
    <div>
      <div className="generalInfo">
        <div className="crestContainer">
          <img src="" alt="" />
        </div>
        <p>League Name</p>
      </div>
      <div className="seasons">
        {seasons.length > 0 ? (
          seasons.map((season) => <Season season={season} key={season.id} />)
        ) : (
          <div> No season info found for competition</div>
        )}
      </div>
      {/* //TODO:  Add css styling for error message */}
    </div>
  );
};
