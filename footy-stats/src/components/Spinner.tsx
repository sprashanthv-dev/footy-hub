import React from "react";
import { HashLoader } from "react-spinners";
import { spinnerConfig } from "@/config/spinner";

type spinnerProps = {
  loading: boolean;
};

const Spinner = ({ loading }: spinnerProps) => {
  spinnerConfig.loading = loading;
  return (
    <div>
      <HashLoader {...spinnerConfig}></HashLoader>
    </div>
  );
};

export default Spinner;
