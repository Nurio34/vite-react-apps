import { configureStore } from "@reduxjs/toolkit";
import { componentsReducer } from "./components";
import { quizReducer } from "./quiz";

export const store = configureStore({
    reducer: {
        components: componentsReducer,
        quiz: quizReducer,
    },
});
