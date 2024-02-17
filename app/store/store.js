import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/authSlice";
import showForm from "./slice/formSlice";
import showPopup from "./slice/showPopupSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        showForm: showForm,
        showPopup: showPopup
    },
});

export default store;