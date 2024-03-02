import { createSlice } from '@reduxjs/toolkit';

// const email = localStorage.getItem('email');
// const password = localStorage.getItem('password');
// const isAdmin = localStorage.getItem('isAdmin');

const initialState = {
    id: "",
    isLoggedIn: false,
    name: "",
    isAdmin: false,
    wishListNumbers: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logIn: (state, action) => {
            state.isLoggedIn = true;
            state.name = action.payload.name;
            state.isAdmin = action.payload.isAdmin;
            state.wishListNumbers = action.payload.wishList.length;
            state.id = action.payload.id;
        },
        logOut: (state) => {
            state.isLoggedIn = false;
            state.name = null;
            state.id = "";
            state.isAdmin = false;
            state.wishListNumbers = null;
        },
        addTowishListNumber: (state, action) => {
            state.wishListNumbers = action.payload
        }
    },
});

export default userSlice.reducer;

export const { logIn, logOut, addTowishListNumber } = userSlice.actions;