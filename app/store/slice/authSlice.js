import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    name: "",
    isAdmin: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.isLoggedIn = true;
            state.name = action.payload.name;
            state.isAdmin = action.payload.isAdmin;
        },
        logOut: (state) => {
            state.isLoggedIn = false;
            state.name = null;
        },
    },
});

export default userSlice.reducer;

export const { logIn, logOut } = userSlice.actions;