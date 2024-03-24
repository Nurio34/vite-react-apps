import { configureStore } from "@reduxjs/toolkit";
import { componentsReducer } from "./components";

export const store = configureStore({
    reducer: {
        components: componentsReducer,
    },
});
