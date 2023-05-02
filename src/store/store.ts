// import { configureStore } from "@reduxjs/toolkit";
// import { commentsReducer } from "./reducers/commentsSlice";
// import counterReducer from './reducers/counterSlice'
// import { asyncTodoReducer } from "./reducers/fetchTodoSlice";
// import { postsReducer } from "./reducers/postsSlide";
// import { todoReducer } from "./reducers/todoSlice";


// export const store = configureStore({
    //     reducer: {
        //         counter: counterReducer,
        //         todo: todoReducer,
        //         asyncTodos: asyncTodoReducer,
        //         posts: postsReducer,
        //         comments: commentsReducer,
        //     }
        // })
        
        // export type RootState = ReturnType<typeof store.getState>
        
        // export type AppDispatch = typeof store.dispatch
        
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "reduxjs-toolkit-persist";
import storage from 'reduxjs-toolkit-persist/lib/storage'

import { commentsReducer } from "./reducers/commentsSlice";
import { counterReducer } from "./reducers/counterSlice";
import { asyncTodoReducer } from "./reducers/fetchTodoSlice";
import { postsReducer } from "./reducers/postsSlice";
import { todoReducer } from "./reducers/todoSlice";
import { kanbanBoardReducer } from "./reducers/kanbanBoardSlice";


const rootReducer = combineReducers({
    comments: commentsReducer,
    counter: counterReducer,
    asyncTodo: asyncTodoReducer,
    posts: postsReducer,
    todo: todoReducer,
    kanbanBoard: kanbanBoardReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['todo', 'counter', 'kanbanBoard']
}

const _persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: _persistedReducer,
    middleware:  (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})


// export type RootState = ReturnType<typeof store.getState>

export type TypeRootState = ReturnType<typeof rootReducer>


export type AppDispatch = typeof store.dispatch

export const persistor = persistStore(store)