import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: "dark" },
  reducers: {
    changeTheme: (state) => {
      state.value = state.value === "light" ? "dark" : "light";
    },
  },
});
export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
