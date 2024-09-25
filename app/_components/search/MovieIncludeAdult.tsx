"use client";
import React from "react";
import { setSearchParams } from "@/app/_store/movieSearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/_store/store";

function MovieIncludeAdult() {
  const dispatch = useDispatch<AppDispatch>();
  const { searchParams } = useSelector((state: RootState) => state.movieSearch);
  return (
    <label className="flex items-center gap-2 text-base-white">
      <input
        type="checkbox"
        checked={searchParams.includeAdult}
        onChange={(e) =>
          dispatch(setSearchParams({ includeAdult: e.target.checked }))
        }
      />
      Include Adult
    </label>
  );
}

export default MovieIncludeAdult;
