import { configureStore } from "@reduxjs/toolkit";
import { commentsReducer } from "./reducers/commentsSlice";
import counterReducer from './reducers/counterSlice'
import { asyncTodoReducer } from "./reducers/fetchTodoSlice";
import { postsReducer } from "./reducers/postsSlide";
import { todoReducer } from "./reducers/todoSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer,
        asyncTodos: asyncTodoReducer,
        posts: postsReducer,
        comments: commentsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch