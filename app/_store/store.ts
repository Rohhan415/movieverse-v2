// store.ts
import { configureStore } from "@reduxjs/toolkit";

import tooltipReducer from "./slice"; // Import the tooltip reducer

export const store = configureStore({
  reducer: {
    tooltip: tooltipReducer, // Add the tooltip reducer to the store
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
