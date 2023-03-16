import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/HomeSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
});
