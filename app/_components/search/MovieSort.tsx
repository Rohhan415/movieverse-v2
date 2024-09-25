"use client";
import React from "react";
import { setSearchParams } from "@/app/_store/movieSearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/_store/store";

function MovieSort() {
  const { searchParams } = useSelector((state: RootState) => state.movieSearch);
  const dispatch = useDispatch<AppDispatch>();

  const sortOptions = [
    { value: "popularity.desc", label: "Popularity Descending" },
    { value: "popularity.asc", label: "Popularity Ascending" },
    { value: "vote_average.desc", label: "Rating Descending" },
    { value: "vote_average.asc", label: "Rating Ascending" },
    { value: "primary_release_date.desc", label: "Release Date Descending" },
    { value: "primary_release_date.asc", label: "Release Date Ascending" },
    { value: "title.asc", label: "Title (Z-A)" },
    { value: "title.desc", label: "Title (A-Z)" },
  ];

  return (
    <select
      value={searchParams.sortBy}
      onChange={(e) => dispatch(setSearchParams({ sortBy: e.target.value }))}
    >
      {sortOptions.map((option) => (
        <option
          key={option.value}
          className="text-base-gray"
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default MovieSort;
