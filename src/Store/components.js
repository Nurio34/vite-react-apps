import { createSlice } from "@reduxjs/toolkit";

const initState = {
    header: null,
    mainHeight: 0,
};

const components = createSlice({
    name: "components",
    initialState: initState,
    reducers: {
        setHeader: (state, { payload }) => {
            state.header = payload;
        },

        setMainHeight: (state, { payload }) => {
            state.mainHeight = payload;
        },
    },
});

export const componentsReducer = components.reducer;

export const { setHeader, setMainHeight } = components.actions;
