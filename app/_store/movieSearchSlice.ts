// features/movieSearchSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MovieSearchState {
  searchParams: {
    sortBy: string;
    year: string;
    includeAdult: boolean;
    genres: string[];
    language: string;
    with_original_language: string;
    voteCountGte: number | "";
    runtimeGte: number | "";
    startDate: Date | null;
    endDate: Date | null;
  };
  movies: any[];
}

const initialState: MovieSearchState = {
  searchParams: {
    sortBy: "popularity.desc",
    year: "",
    includeAdult: false,
    genres: [],
    language: "",
    with_original_language: "",
    voteCountGte: 0,
    runtimeGte: 0,
    startDate: null,
    endDate: null,
  },
  movies: [],
};

const movieSearchSlice = createSlice({
  name: "movieSearch",
  initialState,
  reducers: {
    setSearchParams(
      state,
      action: PayloadAction<Partial<MovieSearchState["searchParams"]>>,
    ) {
      state.searchParams = { ...state.searchParams, ...action.payload };
    },
    setMovies(state, action: PayloadAction<any[]>) {
      state.movies = action.payload;
    },
  },
});

export const { setSearchParams, setMovies } = movieSearchSlice.actions;
export default movieSearchSlice.reducer;
