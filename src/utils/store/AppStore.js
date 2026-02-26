import { configureStore } from "@reduxjs/toolkit";

import LoginSliceReducer from './LoginSlice'



const AppStore = configureStore({

    reducer: {
        user : LoginSliceReducer
    }
})

export default AppStore;