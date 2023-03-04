import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "../redux/slices/HomeSlice";

export const store = configureStore({
  reducer: {
    home: homeSlice,
  },
});
