"use client";

import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/_store/store";
import { setMovies } from "@/app/_store/movieSearchSlice";

function DispatchMovieList({ results }: any) {
  const dispatch = useDispatch<AppDispatch>();
  dispatch(setMovies(results.results));
}

export default DispatchMovieList;
