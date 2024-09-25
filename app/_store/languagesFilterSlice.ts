// redux/languageFilterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DropdownState {
  [key: string]: {
    dropdownOpen: boolean;
    input: string;
  };
}

const initialState: DropdownState = {};

const languageFilterSlice = createSlice({
  name: "dropdownFilter",
  initialState,
  reducers: {
    toggleDropdown: (state, action: PayloadAction<string>) => {
      const key = action.payload;
      state[key] = {
        ...state[key],
        dropdownOpen: !state[key]?.dropdownOpen,
        input: state[key]?.input || "",
      };
    },
    setInput: (
      state,
      action: PayloadAction<{ key: string; input: string }>,
    ) => {
      const { key, input } = action.payload;
      state[key] = {
        ...state[key],
        input,
      };
    },
    closeDropdown: (state, action: PayloadAction<string>) => {
      const key = action.payload;
      if (state[key]) {
        state[key].dropdownOpen = false;
      }
    },
    resetInput: (state, action: PayloadAction<string>) => {
      const key = action.payload;
      if (state[key]) {
        state[key].input = "";
      }
    },
  },
});

export const { toggleDropdown, setInput, closeDropdown, resetInput } =
  languageFilterSlice.actions;

export default languageFilterSlice.reducer;
