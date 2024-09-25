"use server";

import React from "react";
import { getDiscoverMovies } from "@/app/_lib/searchActions";
import MoviesParams from "@/app/_components/search/MovieParams"; // Import MoviesParams
import MovieList from "@/app/_components/search/MovieList";
import MovieSort from "@/app/_components/search/MovieSort";
import LanguagesFilter from "@/app/_components/search/LanguagesFilter";
import MovieGenres from "@/app/_components/search/MovieGenres";
import MovieReleaseDates from "@/app/_components/search/MovieReleaseDates";
import UserScoreSlider from "@/app/_components/search/MovieVoteAverage";
import MovieRuntime from "@/app/_components/search/MovieRuntime";
import MovieIncludeAdult from "@/app/_components/search/MovieIncludeAdult";
import { MovieSearchItemProps } from "@/app/_types/types";

async function Movies({
  genresResult,
  languages,
  countries,
}: MovieSearchItemProps) {
  const params = MoviesParams(); // Use MoviesParams to get the parameters
  const results = await getDiscoverMovies(params);

  return (
    <div className="grid grid-cols-5 ">
      <form className="flex flex-col gap-4  text-base-gray col-span-1">
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

export default Movies;
