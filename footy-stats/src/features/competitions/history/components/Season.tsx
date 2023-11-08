import React from "react";

import { SeasonType } from "@/features/competitions/types/shared";

type eachSeason = {
  season: SeasonType;
};

const Season = ({ season }: eachSeason) => {
  return (
    <div>
      <div className="crest">
        <img src="" alt="" />
      </div>
      <p>Club Name (Abbreviation)</p>
      <p>More Info</p> {/* //TODO: Change to a link to call standings API */}
    </div>
  );
};

export default Season;
