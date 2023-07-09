import { CSSProperties } from "react";

export type Spinner = {
  size: number | string;
  color: string;
  loading: boolean;
  cssOverride?: CSSProperties;
  speedMultiplier: number;
};
