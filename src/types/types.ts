import { AsyncThunk } from "@reduxjs/toolkit";

export interface ITodo {
    userId?: number 
    id: string;
    title: string;
    completed: boolean;
}

export type initialStateTodo = ITodo[]

export type initialAsyncStateTodo = {
    todos: ITodo[];
    loading: boolean;
    error: null | string;
}

export interface ITodoProps {
    id: string
    title: string
    completed: boolean
    loading?: boolean
    toggleTodo: AsyncThunk<ITodo, string, { rejectValue: string; state: { asyncTodos: initialAsyncStateTodo }}>
}

export interface ITodoInputPlusProps {
    addTodo: AsyncThunk<ITodo, string, {rejectValue: string}>
}