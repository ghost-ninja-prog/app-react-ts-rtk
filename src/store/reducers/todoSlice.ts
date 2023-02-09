import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStateTodo, ITodo } from "../../types/types";


const initialState: initialStateTodo = [
    {
        userId: 1,
        id: 1,
        title: 'default todo',
        completed: false,
    }
]
       


// function generateNumb() {
//     const randomNumb = Math.random.toString().slice(2) + Date.now().toString()
//     console.log(+randomNumb)
//     return +randomNumb
// }



const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => state.concat({userId: Date.now(), id: Date.now(), title: action.payload, completed: false}),
        removeTodo: (state, action: PayloadAction<number>) => state.filter(todo => todo.id !== action.payload),
        toggleTodo: (state, action: PayloadAction<number>): ITodo[] => state.map(todo => ({...todo, completed: todo.id === action.payload ? !todo.completed : todo.completed})),
        editTodo: (state, action: PayloadAction<{id: number, title: string}>) => state.map(todo => ({...todo, title: todo.id === action.payload.id ? action.payload.title : todo.title}))
    }
})

export const {addTodo, removeTodo, toggleTodo, editTodo} = todoSlice.actions

export const todoReducer = todoSlice.reducer