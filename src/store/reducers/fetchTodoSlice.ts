import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialAsyncStateTodo, ITodo } from "../../types/types";


export const fetchTodos = createAsyncThunk<Array<ITodo>, undefined, {rejectValue: string}>(
    'asyncTodos/fetchTodos',
    async function (_, { rejectWithValue }) {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')

        if (!response.ok) {
            return rejectWithValue('Server Error!!!')
        }

        const data = await response.json()
        return data
    }
)

export const addTodo = createAsyncThunk<ITodo, string, {rejectValue: string}>(
    'asyncTodos/addTodo',
    async function (text, { rejectWithValue }) {

        const todo = {
            title: text,
            userId: 1,
            completed: false
        }

        const response: Response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })

        if (!response.ok) {
            return rejectWithValue('Can\'t add task. Server error!!!')
        }

        return (await response.json()) as ITodo
    }
)


export const toggleTodo = createAsyncThunk<ITodo, number, { rejectValue: string, state: { asyncTodos: initialAsyncStateTodo } }>(
    'asyncTodos/toggleTodo',
    async function (id, { rejectWithValue, getState }) {
        const todo = getState().asyncTodos.todos.find(todo => todo.id === id)

        if (todo) {
            const response: Response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    completed: !todo.completed
                })
            })
    
            if (!response.ok) {
                return rejectWithValue('Can\'t toggle status. Server error.')
            }
            return (await response.json()) as ITodo
        }
        return rejectWithValue('No such todo in the list!')

    }
)

export const removeTodo = createAsyncThunk<number, number, {rejectValue: string}>(
    'asyncTodos/removeTodo',
    async function (id, { rejectWithValue }) {

        const response: Response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'DELETE'
        })

        if (!response.ok) {
            return rejectWithValue('Can\'t add task. Server error!!!')
        }
        return id
    }
)


const initialState: initialAsyncStateTodo = {
    todos: [],
    loading: false,
    error: null,
}

const asyncTodoSlice = createSlice({
    name: 'asyncTodos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload
                state.loading = false
            })
            .addCase(addTodo.pending, (state) => {
                state.error = null
            })
            .addCase(addTodo.fulfilled, (state, action) => {
                state.todos.push(action.payload)
            })
            .addCase(toggleTodo.pending, (state) => {
                state.loading = true
            })
            .addCase(toggleTodo.fulfilled, (state, action) => {
                const toggledTodo = state.todos.find(todo => todo.id === action.payload.id)
                if (toggledTodo) {
                    toggledTodo.completed = action.payload.completed
                }
                state.loading = false
            })
            .addCase(toggleTodo.rejected, (state, action) => {
                state.error = action.payload
            })
            .addCase(removeTodo.fulfilled, (state, action) => {
                console.log(action.payload)
                state.todos = state.todos.filter(todo => todo.id !== action.payload)
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.loading = false
            })
    }
})


export const asyncTodoReducer = asyncTodoSlice.reducer

function isError(action: AnyAction) {
    return action.type.endsWith('rejected')
}