"use server";

import { TMDbResponse } from "../_types/types"; // Helper function to fetch data from TMDb API

// Helper function to fetch data from TMDb API
export async function fetchFromTMDb<T>(
  endpoint: string,
): Promise<TMDbResponse<T>> {
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
