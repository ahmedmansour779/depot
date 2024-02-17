import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    show: "register"
};

const showForm = createSlice({
    name: "showForm",
    initialState,
    reducers: {
        register: (state) => {
            state.show = "register";
        },
        logIn: (state) => {
            state.show = "login";
        },
    },
});

export default showForm.reducer;

export const { logIn, register } = showForm.actions;