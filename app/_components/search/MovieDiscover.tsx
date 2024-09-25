"use server";

import "react-datepicker/dist/react-datepicker.css";
import {
  getConfigurationCountries,
  getConfigurationDetails,
  getConfigurationLanguages,
  getMovieGenres,
} from "@/app/_lib/searchActions";
import Movies from "@/app/_components/search/Movies";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";

async function MovieDiscover() {
  const genres = await getMovieGenres();
  const languages = await getConfigurationLanguages();
  const countries = await getConfigurationCountries();
  const details = await getConfigurationDetails();

  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Movies
          countries={countries}
          genresResult={genres}
          languages={languages}
        />
      </Suspense>
    </>
  );
}

export default MovieDiscover;
