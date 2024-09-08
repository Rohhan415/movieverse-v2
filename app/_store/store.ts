// store.ts
import { configureStore } from "@reduxjs/toolkit";

import tooltipReducer from "./slice";
import movieSearchReducer from "./movieSearchSlice";
import languageFilterReducer from "./languagesFilterSlice";

export const store = configureStore({
  reducer: {
    tooltip: tooltipReducer,
    movieSearch: movieSearchReducer,
    languageFilter: languageFilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
