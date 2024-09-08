"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/_store/store";
import { getDiscoverMovies } from "@/app/_lib/searchActions";
import { setMovies, setSearchParams } from "@/app/_store/movieSearchSlice";
import LanguagesFilter from "@/app/_components/search/LanguagesFilter";
import { MovieSearchItemProps } from "@/app/_types/types";
import MovieGenres from "@/app/_components/search/MovieGenres";

function MovieSearchItem({ genresResult, languages }: MovieSearchItemProps) {
  // Redux dispatch and state
  const dispatch = useDispatch<AppDispatch>();
  const { searchParams, movies } = useSelector(
    (state: RootState) => state.movieSearch,
  );

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    const params = {
      sort_by: searchParams.sortBy,
      year: searchParams.year ? Number(searchParams.year) : undefined,
      include_adult: searchParams.includeAdult,
      with_genres: searchParams.genres.join(",") || undefined,
      with_original_language: searchParams.with_original_language,
      "vote_count.gte": searchParams.voteCountGte || undefined,
      "with_runtime.gte": searchParams.runtimeGte || undefined,
      "primary_release_date.gte": searchParams.startDate
        ? searchParams.startDate.toISOString().split("T")[0]
        : undefined,
      "primary_release_date.lte": searchParams.endDate
        ? searchParams.endDate.toISOString().split("T")[0]
        : undefined,
    };

    const results = await getDiscoverMovies(params);
    dispatch(setMovies(results.results));
  };

  return (
    <div>
      <form
        className="flex flex-col gap-4 w-[80rem] text-base-gray"
        onSubmit={handleSearch}
      >
        <select
          value={searchParams.sortBy}
          onChange={(e) =>
            dispatch(setSearchParams({ sortBy: e.target.value }))
          }
        >
          <option className="text-base-gray" value="popularity.desc">
            Popularity Descending
          </option>
          <option className="text-base-gray" value="popularity.asc">
            Popularity Ascending
          </option>
        </select>
        <LanguagesFilter languages={languages} />
        <MovieGenres genresResult={genresResult} />
        <button
          className="border-accent-600 border-2 text-base-white"
          type="submit"
        >
          Search
        </button>
      </form>

      <div>
        {movies.length > 0 ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default MovieSearchItem;
