import { AnyAction, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost, IPostsInitialState } from "../../types/types";


export const fetchPosts = createAsyncThunk<Array<IPost>, undefined, { rejectValue: string }>(
    'posts/fetchPosts',
    async (_, { rejectWithValue }) => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        
        if(!response.ok) {
            return rejectWithValue('server Error')
        }
        
        const data = await response.json()
        return data
        
    }
)

export const deletePost = createAsyncThunk<number, number, { rejectValue: string }>(
    'posts/deletePost',
    async (id, { rejectWithValue }) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

        if(!response.ok) {
            return rejectWithValue('server Error')
        }
        return id
    }
)

const initialState: IPostsInitialState = {
    posts: [],
    loading: null,
    error: null,
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.posts = action.payload
                state.loading = false
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.error = action.payload
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.posts = state.posts.filter(post => post.id !== action.payload)
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.loading = false
            })
    }
})


export const postsReducer = postsSlice.reducer

function isError(action: AnyAction) {
    return action.type.endsWith('rejected')
}