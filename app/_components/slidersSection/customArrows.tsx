import React, { CSSProperties, MouseEventHandler } from "react";
import customArrows from "./customArrows.module.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

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
      <ChevronRightIcon className="w-10 h-10" />
    </div>
  );
}

export function PrevArrow(props: ArrowProps) {
  const { className = "", style, onClick } = props;
  return (
    <div
      className={`${className} ${customArrows["slick-arrow"]} ${customArrows["slick-prev"]}`}
      onClick={onClick}
    >
      <ChevronLeftIcon className="w-10 h-10" />
    </div>
  );
}
