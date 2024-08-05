"use client";

import { TailSpin } from "react-loader-spinner";

function Spinner() {
  return (
    <div className="flex justify-center h-full  items-center">
      <TailSpin color="#ff5900" />
    </div>
  );
}

export default Spinner;
