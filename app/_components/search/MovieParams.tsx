"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/app/_store/store";

function MoviesClient() {
  const { searchParams } = useSelector((state: RootState) => state.movieSearch);
  console.log(searchParams);

  const params = {
    sort_by: searchParams.sortBy,
    year: searchParams.year ? Number(searchParams.year) : undefined,
    include_adult: searchParams.includeAdult,
    with_genres: searchParams.genres.join(",") || undefined,
    "vote_count.gte": searchParams.voteCountGte || undefined,
    "with_runtime.gte": searchParams.runtimeGte || undefined,
    "with_runtime.lte": searchParams.runtimeLte || undefined,
    "primary_release_date.gte": searchParams.startDate
      ? searchParams.startDate.toISOString().split("T")[0]
      : undefined,
    "primary_release_date.lte": searchParams.endDate
      ? searchParams.endDate.toISOString().split("T")[0]
      : undefined,
    with_release_type: !searchParams.searchAllReleases
      ? searchParams.releaseType.join("|")
      : undefined,
    region: !searchParams.searchAllReleases
      ? searchParams.region || undefined
      : undefined,
    "vote_average.gte": searchParams.voteAverageGte || undefined,
    "vote_average.lte": searchParams.voteAverageLte || undefined,
    with_original_language: searchParams.with_original_language
      ? searchParams.with_original_language
      : undefined,
  };

  return params;
}

export default MoviesClient;
