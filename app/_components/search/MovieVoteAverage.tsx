"use client";
import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/_store/store";
import { setSearchParams } from "@/app/_store/movieSearchSlice";

const UserScoreSlider = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { voteAverageGte, voteAverageLte } = useSelector(
    (state: RootState) => state.movieSearch.searchParams,
  );

  // Set default range values (as floats)
  const [voteAverage, setVoteAverage] = useState<[number, number]>([
    voteAverageGte || 0.0,
    voteAverageLte || 10.0,
  ]);

  // Updated handleSliderChange to account for both number and number[] types
  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setVoteAverage([value[0], value[1]]);
      dispatch(
        setSearchParams({
          voteAverageGte: value[0],
          voteAverageLte: value[1],
        }),
      );
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-base-white">User Score</label>
      <div className="flex items-center justify-between">
        <span className="text-base-white">{voteAverage[0].toFixed(1)}</span>
        <span className="text-base-white">{voteAverage[1].toFixed(1)}</span>
      </div>
      <Slider
        range
        min={0.0}
        max={10.0}
        step={0.5}
        value={voteAverage}
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

export default UserScoreSlider;
