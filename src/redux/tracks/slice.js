import { createSlice } from "@reduxjs/toolkit";
import { fetchNewTracks } from "./operations";

const filtersSlice = createSlice({
  name: "tracks",
  initialState: {
    items: [],
    isLoading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewTracks.pending, (state) => {
        state.isLoading = true;
        state.items = [];
      })
      .addCase(fetchNewTracks.fulfilled, (state, action) => {
        state.error = null;
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchNewTracks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// export const {
//   fetchingEventsInProgress,
//   fetchingEventsSuccess,
//   fetchingEventsError,
// } = filtersSlice.actions;

export default filtersSlice.reducer;
