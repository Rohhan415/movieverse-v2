// Define a common interface for shared fields
export interface Media {
  adult: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface Series extends Media {
  origin_country?: string[];
  original_name?: string;
  first_air_date?: string;
  name?: string;
}

// Extend Movie and Series from Media
export interface Movie extends Media {}

export interface SeriesData extends MediaData<Series> {}

// Define a generic type for TMDb responses
export type TMDbResponse<T> = T;

// Define a common interface for shared fields in data
export interface MediaData<ItemType> {
  results: ItemType[];
  total_pages: number;
  total_results: number;
}

// Update MoviesData and SeriesData interfaces to extend from MediaData
export interface MoviesData extends MediaData<Movie> {}

export interface SeriesData extends MediaData<Series> {}
