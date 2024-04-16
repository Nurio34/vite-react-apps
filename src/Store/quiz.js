import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = {
    category: "",
    difficulty: "",
    type: "",
    amount: "10",
    score: 0,
    amountSetting: "api.php?&amount=10",
    categorySetting: "",
    difficultySetting: "",
    typeSetting: "",
};

const quiz = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setDifficulty: (state, action) => {
            state.difficulty = action.payload;
        },
        setType: (state, action) => {
            state.type = action.payload;
        },
        setAmount: (state, action) => {
            state.amount = action.payload;
        },
        setScore: (state) => {
            console.log("ok");
            state.score = state.score + 1;
        },
        resetGame: (state) => {
            return initialState;
        },

        setCategorySetting: (state, action) => {
            state.categorySetting = action.payload
                ? `&category=${action.payload}`
                : "";
        },
        setDifficultySetting: (state, action) => {
            state.difficultySetting = action.payload
                ? `&difficulty=${action.payload}`
                : "";
        },
        setTypeSetting: (state, action) => {
            state.typeSetting = action.payload ? `&type=${action.payload}` : "";
        },
        setAmountSetting: (state, action) => {
            state.amountSetting = action.payload
                ? `api.php?&amount=${action.payload}`
                : "";
        },
    },
});

export const quizReducer = quiz.reducer;

export const {
    setCategory,
    setDifficulty,
    setType,
    setAmount,
    setScore,
    resetGame,
    setCategorySetting,
    setDifficultySetting,
    setTypeSetting,
    setAmountSetting,
    setSettings,
} = quiz.actions;
