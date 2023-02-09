import { ActionCreatorWithPayload, AsyncThunk } from "@reduxjs/toolkit";

export interface ITodo {
    userId?: number 
    id: number;
    title: string;
    completed: boolean;
}

export type initialStateTodo = ITodo[]

export type initialAsyncStateTodo = {
    todos: ITodo[];
    loading: boolean;
    error: null | string | undefined;
}

export interface ITodoProps {
    id: number
    title: string
    completed: boolean
    loading?: boolean
    toggleTodo: ActionCreatorWithPayload<number, "todo/toggleTodo"> | AsyncThunk<ITodo, number, { rejectValue: string; state: { asyncTodos: initialAsyncStateTodo }}>
    removeTodo: ActionCreatorWithPayload<number, "todo/removeTodo"> | AsyncThunk<number, number, { rejectValue: string;}>
}

export interface ITodoInputPlusProps {
    addTodo: AsyncThunk<ITodo, string, {rejectValue: string}>
}