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
    editTodo: ActionCreatorWithPayload<{id: number, title: string}, "todo/editTodo"> | AsyncThunk<ITodo, {id: number, title: string}, { rejectValue: string; state: { asyncTodos: initialAsyncStateTodo }}>
}

export interface ITodoInputPlusProps {
    addTodo: AsyncThunk<ITodo, string, {rejectValue: string}> | ActionCreatorWithPayload<string, "todo/addTodo">
}

export interface IPost {
    userId: number
    id: number
    title: string
    body: string
}

export interface IPostsInitialState {
    posts: IPost[]
    loading: null | boolean
    error: null | string | undefined
}