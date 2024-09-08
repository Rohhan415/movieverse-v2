"use server";

import { fetchFromTMDb } from "@/app/_lib/actions";
import {
  Actor,
  Movie,
  MoviesData,
  SeriesData,
  SeriesDetails,
  TMDbResponse,
} from "@/app/_types/types";

// TMDb Fetch Functions
export async function getPopularMovies(): Promise<TMDbResponse<MoviesData>> {
  return fetchFromTMDb<MoviesData>("movie/popular");
}

export async function getNowPlayingMovies(): Promise<TMDbResponse<MoviesData>> {
  return fetchFromTMDb<MoviesData>("movie/upcoming");
}

export async function getPopularSeries(): Promise<TMDbResponse<SeriesData>> {
  return fetchFromTMDb<SeriesData>("tv/popular");
}

export async function getTopRatedSeries(): Promise<TMDbResponse<SeriesData>> {
  return fetchFromTMDb<SeriesData>("tv/top_rated");
}

export async function getMovieDetails(
  id: string,
): Promise<TMDbResponse<Movie>> {
  return fetchFromTMDb<Movie>(`movie/${id}`);
}

export async function getSeriesDetails(
  id: string,
): Promise<TMDbResponse<SeriesDetails>> {
  return fetchFromTMDb<SeriesDetails>(`tv/${id}`);
}

export async function getSeriesImages(
  id: string,
): Promise<TMDbResponse<SeriesDetails>> {
  return fetchFromTMDb<SeriesDetails>(`tv/${id}/images`);
}

export async function getPopularPersons(): Promise<{ results: Actor[] }> {
  const data = await fetchFromTMDb<{ results: Actor[] }>("person/popular");
  return { results: data.results };
}
