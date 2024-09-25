"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/_store/store";
import { getDiscoverMovies } from "@/app/_lib/searchActions";
import { setMovies } from "@/app/_store/movieSearchSlice";
import LanguagesFilter from "@/app/_components/search/LanguagesFilter";
import { MovieSearchItemProps } from "@/app/_types/types";
import MovieGenres from "@/app/_components/search/MovieGenres";
import MovieSort from "@/app/_components/search/MovieSort";
import MovieReleaseDates from "@/app/_components/search/MovieReleaseDates";
import MovieIncludeAdult from "@/app/_components/search/MovieIncludeAdult";
import UserScoreSlider from "@/app/_components/search/MovieVoteAverage";
import MovieRuntime from "@/app/_components/search/MovieRuntime";
import MovieList from "@/app/_components/search/MovieList";

function MovieSearchItem({
  genresResult,
  languages,
  countries,
}: MovieSearchItemProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { searchParams, movies } = useSelector(
    (state: RootState) => state.movieSearch,
  );

  console.log(countries);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

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
      // Only include `with_release_type` and `region` if `searchAllReleases` is false
      with_release_type: !searchParams.searchAllReleases
        ? searchParams.releaseType.join("|")
        : undefined,
      region: !searchParams.searchAllReleases
        ? searchParams.region || undefined
        : undefined,
      "vote_average.gte": searchParams.voteAverageGte || undefined,
      "vote_average.lte": searchParams.voteAverageLte || undefined,
      // Conditionally include `with_original_language` only if it's set
      with_original_language: searchParams.with_original_language
        ? searchParams.with_original_language
        : undefined,
    };

    const results = await getDiscoverMovies(params);
    dispatch(setMovies(results.results));
  };

  return (
    <div className="grid grid-cols-5 ">
      <form
        className="flex flex-col gap-4  text-base-gray col-span-1"
        onSubmit={handleSearch}
      >
        <MovieSort />
        <LanguagesFilter languages={languages} />
        <MovieGenres genresResult={genresResult} />
        <MovieReleaseDates countries={countries} />
        <UserScoreSlider />
        <MovieRuntime />
        <MovieIncludeAdult />
        <button
          className="border-accent-600 border-2 text-base-white"
          type="submit"
        >
          Search
        </button>
      </form>
      <div className="col-span-4">
        <MovieList />
      </div>
    </div>
  );
}

export default MovieSearchItem;
