import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import fontSlice from "./fontSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    font: fontSlice.reducer,
  },
});

export default store;
