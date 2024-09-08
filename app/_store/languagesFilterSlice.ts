// redux/languageSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LanguageState {
  dropdownOpen: boolean;
  input: string;
}

const initialState: LanguageState = {
  dropdownOpen: false,
  input: "",
};

const languageSlice = createSlice({
  name: "languageFilter",
  initialState,
  reducers: {
    toggleDropdown: (state) => {
      state.dropdownOpen = !state.dropdownOpen;
    },
    setInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload;
    },
    closeDropdown: (state) => {
      state.dropdownOpen = false;
    },
  },
});

export const { toggleDropdown, setInput, closeDropdown } =
  languageSlice.actions;

export default languageSlice.reducer;
