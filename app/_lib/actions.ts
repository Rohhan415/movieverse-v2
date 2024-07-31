"use server";

import {MoviesData} from "../_types/types";

// Function to fetch popular movies from The Movie Database (TMDb) API
export async function getPopularMovies(): Promise<MoviesData> {
  // Retrieve the API key from environment variables
  const apiKey = process.env.TMDB_API_KEY;
  if (!apiKey) {
    // Throw an error if the API key is missing
    throw new Error(
      "API key is missing. Please set TMDB_API_KEY in your environment variables."
    );
  }

  // Construct the URL for the API request
  const url = new URL("https://api.themoviedb.org/3/movie/popular");
  url.searchParams.append("api_key", apiKey);

  try {
    // Make the API request
    const response = await fetch(url.toString());
    if (!response.ok) {
      // If the response is not ok, read the error details and throw an error
      const errorDetails = await response.text();
      throw new Error(
        `Network response was not ok: ${response.statusText}. Details: ${errorDetails}`
      );
    }

    // Parse the JSON response
    return await response.json();
  } catch (error) {
    // Log any errors that occur during the fetch operation
    console.error("Failed to fetch popular movies:", error);
    // Rethrow the error to be handled by the caller
    throw error;
  }
}

export async function getNowPlayingMovies(){
    const apiKey = process.env.TMDB_API_KEY;
    if (!apiKey) {
        throw new Error(
        "API key is missing. Please set TMDB_API_KEY in your environment variables."
        );
    }

    const url = new URL("https://api.themoviedb.org/3/movie/upcoming");
    url.searchParams.append("api_key", apiKey);

    try {
        const response = await fetch(url.toString());
        if (!response.ok) {
        const errorDetails = await response.text();
          console.error(`Network response was not ok: ${response.statusText}. Details: ${errorDetails}`);
          return
        }
        console.log(response, 'sss')

      return await response.json();
    } catch (error) {
        console.error("Failed to fetch now playing movies:", error);
        throw error;
    }
}
