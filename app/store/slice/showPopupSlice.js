import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    show: false
};

const showPopup = createSlice({
    name: "showPopup",
    initialState,
    reducers: {
        show: (state) => {
            state.show = true;
        },
        hidden: (state) => {
            state.show = false;
        },
    },
});

export default showPopup.reducer;

export const { show, hidden } = showPopup.actions;