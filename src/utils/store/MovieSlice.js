import { createSlice } from "@reduxjs/toolkit";



const MovieSlice = createSlice({

    name: 'movies',
    initialState: {
        now_playing_movies : null,
        main_movie : null,
        trailer_video : null,
        popular_movies : null
    },
    reducers : {
        addMovie: (state, action) => {
            state.now_playing_movies = action.payload;
        },
        mainMovie: (state, action) => {
            state.main_movie = action.payload;
        },
        trailerVideo: (state, action) => {
            state.trailer_video = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popular_movies = action.payload;

        }
    }
});

export const {addMovie, mainMovie, trailerVideo, addPopularMovies} = MovieSlice.actions;

export default MovieSlice.reducer;
