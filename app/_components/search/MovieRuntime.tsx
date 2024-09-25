"use client";
import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/_store/store";
import { setSearchParams } from "@/app/_store/movieSearchSlice";

const MovieRuntime = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { runtimeGte, runtimeLte } = useSelector(
    (state: RootState) => state.movieSearch.searchParams,
  );

  // Set default range values (as floats)
  const [runtime, setRuntime] = useState<[number, number]>([
    runtimeGte || 0,
    runtimeLte || 400,
  ]);

  // Updated handleSliderChange to account for both number and number[] types
  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setRuntime([value[0], value[1]]);
      dispatch(
        setSearchParams({
          runtimeGte: value[0],
          runtimeLte: value[1],
        }),
      );
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-base-white">Movie Runtime (minutes)</label>
      <div className="flex items-center justify-between">
        <span className="text-base-white">{runtime[0].toFixed(0)} min</span>
        <span className="text-base-white">{runtime[1].toFixed(0)} min</span>
      </div>
      <Slider
        range
        min={0}
        max={400}
        step={1}
        value={runtime}
        onChange={handleSliderChange}
        allowCross={false}
        dots={false}
        styles={{
          handle: {
            backgroundColor: "#f5f5f5",
            borderColor: "#f5f5f5",
          },
          track: {
            backgroundColor: "orange",
          },
          rail: { backgroundColor: "white" },
        }}
      />
    </div>
  );
};

export default MovieRuntime;
