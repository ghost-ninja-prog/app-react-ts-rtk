import { createSlice } from "@reduxjs/toolkit";
// import { RootState } from "../store";


type CounterState = {
    value: number
}

const initialState: CounterState = {
    value: 0,
}


const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        }
    }
})


export const {increment, decrement} = counterSlice.actions

// export const selectCounter = (state: RootState) => state.counter

export const counterReducer = counterSlice.reducer