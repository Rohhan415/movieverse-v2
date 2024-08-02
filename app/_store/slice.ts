// features/tooltipSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TooltipState {
  hoveredIcon: string | null;
}

const initialState: TooltipState = {
  hoveredIcon: null,
};

const tooltipSlice = createSlice({
  name: "tooltip",
  initialState,
  reducers: {
    setHoveredIcon: (state, action: PayloadAction<string | null>) => {
      state.hoveredIcon = action.payload;
    },
  },
});

export const { setHoveredIcon } = tooltipSlice.actions;
export default tooltipSlice.reducer;
