import {createSlice} from "@reduxjs/toolkit";

const buttonSlice = createSlice({
    name:"tooMuch",
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value += 1
        },decrement:(state)=>{state.value -= 1},
        incrementBy:(state,action)=>{
            state.value += action.payload
        },

    }
})
export const {increment,decrement,incrementBy} = buttonSlice.actions;
export default buttonSlice.reducer;
export const incrementAsync = (amount) => dispatch => {
    setTimeout(dispatch(incrementBy(amount)),1000)
}