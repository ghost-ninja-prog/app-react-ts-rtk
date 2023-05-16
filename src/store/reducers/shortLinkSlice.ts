import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ShortLinkResponseType } from "../../types/types"


export const fetchLink = createAsyncThunk<ShortLinkResponseType, string, { rejectValue: string }>(
    'shortLink/fetchLink',
    async (link, { rejectWithValue }) => {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
        
        if(!response.ok) {
            return rejectWithValue('server Error')
        }
        
        const data = await response.json()
        console.log(data)
        return data
        
    }
)

const initialState = [
        {
            ok: true,
            result: {
                code: "KCveN",
                short_link: "shrtco.de/KCveN",
                full_short_link: "https://shrtco.de/KCveN",
                short_link2: "9qr.de/KCveN",
                full_short_link2: "https://9qr.de/KCveN",
                share_link: "shrtco.de/share/KCveN",
                full_share_link: "https://shrtco.de/share/KCveN",
                original_link: "http://example.org/very/long/link.html"
            }
        }
    ]

const shortLinkSlice = createSlice({
    name: 'shortLink',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchLink.fulfilled, (state, action) => {
                return state = state.concat(action.payload)
            })
    },
})

export const shortLinkReducer = shortLinkSlice.reducer