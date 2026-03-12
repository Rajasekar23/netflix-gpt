import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({


    name: 'Gpt Toogle',
    initialState : {
        toggle : false
    },
    reducers : {
        toggleGptSearch : (state, action) => {
            state.toggle = !state.toggle;
        }
    }


})

export const { toggleGptSearch } = GptSlice.actions;

export default GptSlice.reducer;



