"use server";

import "react-datepicker/dist/react-datepicker.css";
import { getMovieGenres, getMovieLanguages } from "@/app/_lib/searchActions";
import MovieSearchItem from "@/app/_components/search/MovieSearchItem";

async function MovieDiscover() {
  const genres = await getMovieGenres();
  const languages = await getMovieLanguages();

  return <MovieSearchItem genresResult={genres} languages={languages} />;
}

export default MovieDiscover;
