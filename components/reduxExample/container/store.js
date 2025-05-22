import {configureStore} from "@reduxjs/toolkit";
import {expenselide} from "./expenseslide.js";

export const store = configureStore({
    reducer:{
        MYExpense:expenselide.reducer,
    },
})