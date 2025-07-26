import { createSlice } from "@reduxjs/toolkit";

const fontSlice = createSlice({
  name: "font",
  initialState: {
    font: '"Kumbh Sans", sans-serif',
    active: "kumbh sans",
  },
  reducers: {
    toggleFont: (state, action) => {
      switch (action.payload) {
        case "kumbh sans":
          return {
            font: '"Kumbh Sans", sans-serif',
            active: "kumbh sans",
          };
        case "roboto":
          return {
            font: '"Roboto", sans-serif',
            active: "roboto",
          };
        case "space mono":
          return {
            font: '"Space Mono", monospace',
            active: "space mono",
          };
      }
    },
  },
});

export default fontSlice;
export const fontSliceAction = fontSlice.actions;
