import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: { color: "#f87070", active: "red" },
  reducers: {
    toggleTheme: (state, action) => {
      switch (action.payload) {
        case "red":
          return {
            color: "#f87070",
            active: "red",
          };
        case "cyan":
          return {
            color: "#70f3f8",
            active: "cyan",
          };
        case "purple":
          return {
            color: "#d881f8",
            active: "purple",
          };
        default:
          return state;
      }
    },
  },
});
export default themeSlice;
export const themeSliceAction = themeSlice.actions;
