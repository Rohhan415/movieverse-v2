"use client";

import React from "react";
import Slider from "react-slick";
import SliderItem from "./SliderItem";
import { settingsActors } from "@/app/_components/slidersSection/controller";
import { Actor } from "@/app/_types/types";

interface SliderListProps {
  data: { results: Actor[] };
}

const SliderList: React.FC<SliderListProps> = ({ data }) => {
  return (
    <ul className="overflow-hidden  mx-auto">
      <Slider {...settingsActors}>
        {data.results.map((actor) => (
          <SliderItem key={actor.id} actor={actor} />
        ))}
      </Slider>
    </ul>
  );
};

export default SliderList;
