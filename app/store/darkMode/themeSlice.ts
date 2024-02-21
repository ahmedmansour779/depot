import { ThemeState } from '@/app/types';
import { createSlice } from '@reduxjs/toolkit';
import colors from './colors.json';

const initialState: ThemeState = {
    mode: 'light',
    colors: colors['light'],
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        darkMode: (state) => {
            state.mode = 'dark';
            state.colors = colors[state.mode];
        },
        lightMode: (state) => {
            state.mode = 'light';
            state.colors = colors[state.mode];
        },
    },
});

export const { darkMode, lightMode } = themeSlice.actions;

export default themeSlice.reducer;