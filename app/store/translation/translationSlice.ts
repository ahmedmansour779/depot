// translationSlice.js
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import translations from './translations.json';

const initialState = {
    language: 'ar',
    translations: translations['ar'],
};

export const translation = createSlice({
    name: 'translation',
    initialState,
    reducers: {
        setLanguage: (state, action: PayloadAction<"ar" | "en">) => {
            state.language = action.payload;
            state.translations = translations[action.payload];
        },
    },
});

export const { setLanguage } = translation.actions;

export default translation.reducer;