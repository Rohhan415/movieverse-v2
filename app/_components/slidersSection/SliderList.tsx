// SliderList.tsx
"use client";
import React from "react";
import Slider from "react-slick";
import { StarIcon } from "@heroicons/react/16/solid";
import SliderItem from "./SliderItem";
import { DataType, ProcessedDataItem } from "@/app/_types/types";
import { clipOverview } from "@/app/_utils/textUtils";
import { settings } from "@/app/_components/slidersSection/controller";

export default function SliderList({ data }: { data: DataType }) {
  // Process data to add additional fields for rendering
  const processedData: ProcessedDataItem[] = data?.results.map((item) => {
    const isSeries = "original_name" in item;

    return {
      ...item,
      displayTitle: isSeries ? (item.original_name ?? "") : (item.title ?? ""),
      displayYear: isSeries
        ? (item.first_air_date?.slice(0, 4) ?? "")
        : (item.release_date?.slice(0, 4) ?? ""),
      clippedOverview: clipOverview(item.overview ?? ""),
      formattedVote: (
        <>
          {item.vote_average?.toFixed(1)}{" "}
          <StarIcon className="inline w-4 h-4" /> ({item.vote_count})
        </>
      ),
    };
  }) as ProcessedDataItem[]; // Explicitly cast to ensure type safety

  return (
    <ul className="overflow-hidden mx-auto">
      <Slider {...settings}>
        {processedData?.map((item) => <SliderItem key={item.id} item={item} />)}
      </Slider>
    </ul>
  );
}
