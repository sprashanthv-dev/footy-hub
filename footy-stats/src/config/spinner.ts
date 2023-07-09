import { Spinner } from "../types/shared";

export const spinnerConfig: Spinner = {
  loading: true,
  color: "#8eac50",
  speedMultiplier: 1.5,
  cssOverride: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  size: 60,
};
