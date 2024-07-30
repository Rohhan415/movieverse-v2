"use client";

import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../../_lib/actions";

export function usePopularMovies() {
  // Use useQuery to fetch popular movies
  const {
    data: moviesData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });

  if (error) console.error(error.message);

  return { moviesData, isLoading };
}
