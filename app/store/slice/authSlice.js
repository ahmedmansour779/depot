import { createSlice } from '@reduxjs/toolkit';

// const email = localStorage.getItem('email');
// const password = localStorage.getItem('password');
// const isAdmin = localStorage.getItem('isAdmin');

const initialState = {
    id: "",
    isLoggedIn: false,
    name: "",
    isAdmin: false,
    washList: []
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