import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  movies: JSON.parse(localStorage.getItem("movies")) || [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload);
      localStorage.setItem("movies", JSON.stringify(state.movies));
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id != action.payload.id
      );
      localStorage.setItem("movies", JSON.stringify(state.movies));
    },
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
