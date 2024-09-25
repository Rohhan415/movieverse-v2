// Common Media Interface for Movies and Series
export interface Media {
  adult: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id: number;
  original_language?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string; // For movies
  vote_average?: number;
  vote_count?: number;
}

// Movie-Specific Interface
export interface Movie extends Media {
  original_title?: string;
  video?: boolean;
}

// Series-Specific Interface
export interface Series extends Media {
  name?: string; // Series name
  original_name?: string;
  origin_country?: string[];
  first_air_date?: string;
}

// Series Details Interface Extending Series
export interface SeriesDetails extends Series {
  created_by: {
    id: number;
    name: string;
    gender: number;
    profile_path: string;
  }[];
  episode_run_time: number[];
  genres: { id: number; name: string }[];
  homepage: string;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    season_number: number;
    still_path: string;
  };
  networks: {
    id: number;
    name: string;
    logo_path: string;
    origin_country: string;
  }[];
  next_episode_to_air: null | {
    id: number;
    name: string;
    overview: string;
    vote_average: number;
    vote_count: number;
    air_date: string;
    episode_number: number;
    season_number: number;
    still_path: string;
  };
  number_of_episodes: number;
  number_of_seasons: number;
  production_companies: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  production_countries: { iso_3166_1: string; name: string }[];
  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
  }[];
  spoken_languages: { english_name: string; iso_639_1: string; name: string }[];
  status: string;
  tagline: string;
  type: string;
  backdrops: string[];
}

// Generic TMDb Response Type
export type TMDbResponse<T> = T;

// Generic Interface for Media Data with Pagination
export interface MediaData<ItemType> {
  results: ItemType[];
  total_pages: number;
  total_results: number;
}

// Movie Data Type Extending MediaData
export interface MoviesData extends MediaData<Movie> {}

// Series Data Type Extending MediaData
export interface SeriesData extends MediaData<Series> {}

// Processed Data Item Interface for UI Consumption
export interface ProcessedDataItem {
  id: number;
  displayTitle: string;
  displayYear: string;
  clippedOverview: string;
  formattedVote: JSX.Element;
  poster_path?: string;
  adult: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  original_language?: string;
  overview?: string;
  popularity?: number;
  release_date?: string;
  title?: string;
  vote_average?: number;
  vote_count?: number;
}

// KnownFor Media Interface Used in Actor Interface
interface KnownForMedia extends Media {
  name?: string; // For TV shows
  original_name?: string; // For TV shows
  title?: string; // For movies
  original_title?: string; // For movies
  media_type: "tv" | "movie";
  first_air_date?: string; // For TV shows
  release_date?: string; // For movies
  origin_country?: string[]; // For TV shows
  video?: boolean; // For movies
}

// Actor Interface
export interface Actor {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  known_for: KnownForMedia[];
  displayTitle: string;
  displayYear: string;
  clippedOverview: string;
  formattedVote: JSX.Element;
  poster_path: string;
}

export interface MovieSearchItemProps {
  genresResult: { genres: { id: number; name: string }[] };
  languages: { iso_639_1: string; english_name: string }[];
  countries: {
    iso_3166_1: string;
    english_name: string;
    native_name: string;
  }[];
}
