import { createSlice } from '@reduxjs/toolkit'

interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        decrement: (state) => {
            state.value -= 1
        },
        increment: (state) => {
            state.value += 1
        },
    },
})

export const { actions: counterActions, reducer: counterReducer } = counterSlice
