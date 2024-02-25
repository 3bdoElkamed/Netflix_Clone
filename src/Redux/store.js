import { configureStore } from "@reduxjs/toolkit";
import MovieSlice from "./movieSlice";
export const store = configureStore({
  reducer: {
    movie: MovieSlice,
  },
});
