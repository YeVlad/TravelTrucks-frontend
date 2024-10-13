import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export const fetchNewTracks = createAsyncThunk(
  "tracks/getNew",
  async (filtres, thunkAPI) => {
    try {
      console.log(filtres);

      const params = new URLSearchParams(filtres).toString();

      const response = await axios.get(`/campers?${params}`);

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
