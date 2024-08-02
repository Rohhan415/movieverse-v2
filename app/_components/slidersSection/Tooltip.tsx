// Tooltip.tsx
import React from "react";

interface TooltipProps {
  message: string;
  visible: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ message, visible }) => (
  <div
    className={`absolute bottom-10 right-0 bg-gray-800 text-white text-xs rounded px-2 py-1 shadow-md transition-opacity duration-300 ${
      visible ? "opacity-100" : "opacity-0"
    }`}
  >
    {message}
  </div>
);

export default Tooltip;
