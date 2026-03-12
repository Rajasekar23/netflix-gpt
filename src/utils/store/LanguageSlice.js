import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";



const LanguageSlice = createSlice({

    name : 'language',
    initialState: 'en',
    reducers : {
        useLanguage : (state, action) => {
            return action.payload;
        }
    }

});

export const  { useLanguage } = LanguageSlice.actions;

export default LanguageSlice.reducer;