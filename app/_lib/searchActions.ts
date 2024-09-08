"use server";

import { fetchFromTMDb } from "@/app/_lib/actions";

type DiscoverMoviesParams = {
  certification?: string;
  "certification.gte"?: string;
  "certification.lte"?: string;
  certification_country?: string;
  include_adult?: boolean;
  include_video?: boolean;
  language?: string;
  page?: number;
  primary_release_year?: number;
  "primary_release_date.gte"?: string;
  "primary_release_date.lte"?: string;
  region?: string;
  "release_date.gte"?: string;
  "release_date.lte"?: string;
  sort_by?: string;
  "vote_average.gte"?: number;
  "vote_average.lte"?: number;
  "vote_count.gte"?: number;
  "vote_count.lte"?: number;
  watch_region?: string;
  with_cast?: string;
  with_companies?: string;
  with_crew?: string;
  with_genres?: string;
  with_keywords?: string;
  with_origin_country?: string;
  with_original_language?: string;
  with_people?: string;
  with_release_type?: string;
  "with_runtime.gte"?: number;
  "with_runtime.lte"?: number;
  with_watch_monetization_types?: string;
  with_watch_providers?: string;
  without_companies?: string;
  without_genres?: string;
  without_keywords?: string;
  without_watch_providers?: string;
  year?: number;
};

export async function getDiscoverMovies(params?: DiscoverMoviesParams) {
  // Convert params object to URLSearchParams format
  const searchParams = new URLSearchParams();

  console.log(params, "params"); // Log params

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        if (key === "with_original_language") {
          // Debugging log
        }
        searchParams.append(key, value.toString());
      }
    });
  }

  console.log(searchParams.toString(), "searchParams"); // Log final search params

  // Call the fetch function using the constructed query string
  const endpoint = `discover/movie?${searchParams.toString()}`;

  console.log(endpoint, "endpoint");

  return fetchFromTMDb<any>(endpoint);
}

export async function getMovieGenres() {
  return fetchFromTMDb<any>("genre/movie/list");
}

export async function getMovieLanguages() {
  return fetchFromTMDb<any>("configuration/languages");
}
