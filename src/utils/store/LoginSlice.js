import { createSlice } from "@reduxjs/toolkit";


const LoginSlice = createSlice({

    name: 'login',
    initialState: null,
    reducers : {
        addUser: (state, action) => {

            return action.payload;
        },
        removeUser: (state, action) => {
            return [];
        }
    }
})

export const { addUser, removeUser } = LoginSlice.actions;

export default LoginSlice.reducer;