import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";
import fontSlice from "./fontSlice";
import timerSlice from "./timerSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    font: fontSlice.reducer,
    timer: timerSlice.reducer,
  },
});

export default store;
