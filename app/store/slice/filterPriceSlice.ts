import { typeValueFilter } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: typeValueFilter = {
    value: "all"
};

const filterPrice = createSlice({
    name: "filterPrice",
    initialState,
    reducers: {
        makePrice: (state, action) => {
            state.value = action.payload;
        },
    },
});

export default filterPrice.reducer;

export const { makePrice } = filterPrice.actions;