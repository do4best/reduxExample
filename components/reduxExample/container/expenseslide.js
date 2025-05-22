import {createSlice} from "@reduxjs/toolkit";

export const expenselide = createSlice({
    name: "expenseslide",
    initialState:{
        income:2000,
        expenseList:[]
    },
    reducers:{
        addExpense:(currentState,action)=>{
            currentState.expenseList.push(action.payload)
        },
        setIncomeAction:((currentState,action)=>{
            currentState.income = action.payload
        })
    }
})
export const {addExpense,setIncomeAction} = expenselide.actions;