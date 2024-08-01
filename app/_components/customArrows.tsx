import React, { CSSProperties, MouseEventHandler } from "react";
import customArrows from "./customArrows.module.css";

interface ArrowProps {
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export function NextArrow(props: ArrowProps) {
  const { className = "", style, onClick } = props;
  return (
    <div
      className={`${className} ${customArrows["slick-arrow"]} ${customArrows["slick-next"]}`}
      onClick={onClick}
    >
      <svg
        data-slot="icon"
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        ></path>
      </svg>
    </div>
  );
}
