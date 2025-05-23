import { configureStore } from '@reduxjs/toolkit'
import buttonSlice from "./buttonSlice.js";

export const store = configureStore ({
reducer:{
YourExpense:buttonSlice
}

});