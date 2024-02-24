import { configureStore } from "@reduxjs/toolkit";
import themeSlice from './darkMode/themeSlice';
import userReducer from "./slice/authSlice";
import filterPrice from './slice/filterPriceSlice';
import showForm from "./slice/formSlice";
import translationReducer from './translation/translationSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        showForm: showForm,
        translations: translationReducer,
        theme: themeSlice,
        filterPrice: filterPrice,
    },
});

export default store;