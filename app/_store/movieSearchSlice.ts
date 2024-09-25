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
    runtimeLte: number | "";
    startDate: Date | null;
    endDate: Date | null;
    region?: string;
    releaseType: number[];
    searchAllReleases: boolean;
    voteAverageGte: number;
    voteAverageLte: number;
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
    runtimeLte: 400,
    startDate: null,
    endDate: null,
    releaseType: [1, 2, 3, 4, 5, 6],
    searchAllReleases: true,
    voteAverageGte: 0, // Default value for voteAverageGte
    voteAverageLte: 10, // Default value for voteAverageLte
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
    setReleaseType: (state, action: PayloadAction<number[]>) => {
      state.searchParams.releaseType = action.payload;
    },
    setSearchAllReleases: (state, action: PayloadAction<boolean>) => {
      state.searchParams.searchAllReleases = action.payload;
    },
    setStartDate: (state, action: PayloadAction<Date | null>) => {
      state.searchParams.startDate = action.payload;
    },
    setEndDate: (state, action: PayloadAction<Date | null>) => {
      state.searchParams.endDate = action.payload;
    },
    setVoteAverageGte: (state, action: PayloadAction<number>) => {
      state.searchParams.voteAverageGte = action.payload;
    },
    setVoteAverageLte: (state, action: PayloadAction<number>) => {
      state.searchParams.voteAverageLte = action.payload;
    },
    setRuntimeGte: (state, action: PayloadAction<number>) => {
      state.searchParams.runtimeGte = action.payload;
    },
    setRuntimeLte: (state, action: PayloadAction<number>) => {
      state.searchParams.runtimeLte = action.payload;
    },
  },
});

export const {
  setSearchParams,
  setMovies,
  setReleaseType,
  setSearchAllReleases,
  setStartDate,
  setEndDate,
  setVoteAverageGte,
  setVoteAverageLte,
} = movieSearchSlice.actions;
export default movieSearchSlice.reducer;
