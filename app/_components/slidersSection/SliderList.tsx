"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { MoviesData, SeriesData } from "@/app/_types/types";
import { NextArrow } from "@/app/_components/customArrows";

type DataType = MoviesData | SeriesData;

export default function SliderList({ data }: { data: DataType }) {
  // @ts-ignore
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    centerMode: true,
    className: "display: flex; justify-content: center;",
    nextArrow: <NextArrow />,
    prevArrow: <NextArrow />,
  };

  const processedData = data?.results.map((item) => {
    const isSeries = "original_name" in item;
    return {
      ...item,
      displayTitle: isSeries ? (item.original_name ?? "") : (item.title ?? ""),
      displayYear: isSeries
        ? (item.first_air_date?.slice(0, 4) ?? "")
        : (item.release_date?.slice(0, 4) ?? ""),
    };
  });

  return (
    <ul className="overflow-hidden max-w-full mx-auto px-8">
      <Slider {...settings}>
        {processedData?.map((item) => (
          <li key={item.id} className="relative w-full !flex justify-center">
            <div className="w-64  overflow-hidden flex flex-col items-center">
              <Image
                width="260"
                height="390"
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.displayTitle}
                title={item.displayTitle}
                className="object-cover w-full h-[390px]"
              />
              <h3 className="text-shade-200 mt-1  w-full">
                {item.displayTitle} | <span>{item.displayYear}</span>
              </h3>
            </div>
          </li>
        ))}
      </Slider>
    </ul>
  );
}
