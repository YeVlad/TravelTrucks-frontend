import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./tracks/slice.js";

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
  },
});
