import { createSlice } from "@reduxjs/toolkit";

export const homeSlice = createSlice({
  name: "home",
  initialState: {
    url: {}, // url of movies's & poster pic
    genres: {}, // categoris of movies like comedy, action
  },

  reducers: {
    getApiConfiguration: (state, action) => {
      state.url = action.payload;
    },
    getGenre: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { getApiConfiguration, getGenre } = homeSlice.actions;
export default homeSlice.reducer;
