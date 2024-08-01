"use server";

import { MoviesData, SeriesData, TMDbResponse } from "../_types/types";

// Helper function to fetch data from TMDb API
async function fetchFromTMDb<T>(endpoint: string): Promise<TMDbResponse<T>> {
  const apiKey = process.env.TMDB_API_KEY;
  if (!apiKey) {
    throw new Error(
      "API key is missing. Please set TMDB_API_KEY in your environment variables.",
    );
  }

  const url = new URL(`https://api.themoviedb.org/3/${endpoint}`);
  url.searchParams.append("api_key", apiKey);

  try {
    const response = await fetch(url.toString());

    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(
        `Network response was not ok: ${response.statusText}. Details: ${errorDetails}`,
      );
    }
    return await response.json();
  } catch (error) {
    console.error(`Failed to fetch data from TMDb:`, error);
    throw error;
  }
}

// Function to fetch popular movies
export async function getPopularMovies(): Promise<TMDbResponse<MoviesData>> {
  return fetchFromTMDb<MoviesData>("movie/popular");
}

// Function to fetch now playing movies
export async function getNowPlayingMovies(): Promise<TMDbResponse<MoviesData>> {
  return fetchFromTMDb<MoviesData>("movie/upcoming");
}

// Function to fetch popular series
export async function getPopularSeries(): Promise<TMDbResponse<SeriesData>> {
  return fetchFromTMDb<SeriesData>("tv/popular");
}
