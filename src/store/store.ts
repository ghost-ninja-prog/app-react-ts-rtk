import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './reducers/counterSlice'
import { asyncTodoReducer } from "./reducers/fetchTodoSlice";
import { todoReducer } from "./reducers/todoSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        asyncTodos: asyncTodoReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch