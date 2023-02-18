import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IComment, IInitialStateComments } from "../../types/types";






export const fetchComments = createAsyncThunk<Array<IComment>, number, { rejectValue: string }>(
    'comments/fetchComments',
    async (id, { rejectWithValue }) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

        if(!response.ok) {
            return rejectWithValue('Error load comments...')
        }
        const data = await response.json()
        return data
    }
)

const initialState: IInitialStateComments = {
    comments: [],
    loading: null,
    error: null
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.comments = state.comments.concat(action.payload)
            })
    },
})

export const commentsReducer = commentsSlice.reducer
