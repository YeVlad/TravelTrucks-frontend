import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "./filters/slice.js";

import tracksReducer from "./tracks/slice.js";

export const store = configureStore({
  reducer: {
    tracks: tracksReducer,
    filters: filtersReducer,
  },
});
