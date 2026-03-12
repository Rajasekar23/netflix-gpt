import { configureStore } from "@reduxjs/toolkit";

import LoginSliceReducer from './LoginSlice';

import MovieSliceReducer from './MovieSlice';

import LanguageSliceReducer from './LanguageSlice';

import GptSliceReducer from './GptSlice';



const AppStore = configureStore({

    reducer: {
        user : LoginSliceReducer,
        movies : MovieSliceReducer,
        language : LanguageSliceReducer,
        gptSearch : GptSliceReducer
    }
})

export default AppStore;