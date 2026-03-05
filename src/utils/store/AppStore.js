import { configureStore } from "@reduxjs/toolkit";

import LoginSliceReducer from './LoginSlice';

import MovieSliceReducer from './MovieSlice';



const AppStore = configureStore({

    reducer: {
        user : LoginSliceReducer,
        movies : MovieSliceReducer
    }
})

export default AppStore;