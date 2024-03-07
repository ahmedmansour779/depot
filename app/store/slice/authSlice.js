import { createSlice } from '@reduxjs/toolkit';

// const email = localStorage.getItem('email');
// const password = localStorage.getItem('password');
// const isAdmin = localStorage.getItem('isAdmin');

export const initialState = {
    id: "",
    isLoggedIn: false,
    name: "",
    isAdmin: false,
    wishListNumbers: null,
    cartListNumbers: null,
    cartEvent: false,
    cart: []
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
            state.cartListNumbers = action.payload.cart.length;
            state.id = action.payload.id;
        },
        logOut: (state) => {
            state.id = "";
            state.isLoggedIn = false;
            state.name = "";
            state.isAdmin = false;
            state.wishListNumbers = null;
            state.cartListNumbers = null;
        },
        addToWishListNumber: (state, action) => {
            state.wishListNumbers = action.payload
        },
        addToCartNumber: (state) => {
            state.cartEvent = !state.cartEvent
        },
    },
});

export default userSlice.reducer;

export const { logIn, logOut, addToWishListNumber, addToCartNumber } = userSlice.actions;