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
                state.loading = false
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                console.log(action.payload)
                state.error = action.payload
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