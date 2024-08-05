import React from "react";
import classNames from "classnames";

interface TooltipProps {
  message: string;
  visible: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ message, visible }) => {
  return (
    <div
      className={classNames(
        "fixed transform -translate-x-1/2 -translate-y-16 bg-base-gray text-base-white text-sm p-2 shadow-lg  pointer-events-none",
        {
          "opacity-0": !visible,
          "opacity-100": visible,
        },
      )}
    >
      {message}
    </div>
  );
};

export default Tooltip;
