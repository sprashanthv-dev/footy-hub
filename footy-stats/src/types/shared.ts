import { CSSProperties } from "react";

import { z } from "zod";

export type Spinner = {
  size: number | string;
  color: string;
  loading: boolean;
  cssOverride?: CSSProperties;
  speedMultiplier: number;
};

export const Area = z.object({
  id: z.number(),
  name: z.string(),
  code: z.string(),
  flag: z.string().nullable(),
});
