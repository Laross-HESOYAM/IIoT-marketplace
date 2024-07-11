import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../Utils/Api";
export const getCard = createAsyncThunk('categories/getCard', async (_, thunkAPI) => {
    try {
        const res = await axios(`${BASE_URL}/categories`)
        return res.data
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error)
    }
})

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: {
        card: [],
        isLoading: false
    },
    extraReducers: (builder) => {
        // builder.addCase(getCard.pending, (state) => {
        //     state.isLoading = true
        // });
        builder.addCase(getCard.fulfilled, (state, { payload }) => {
            state.card = payload
            state.isLoading = false
        });
        // builder.addCase(getCard.rejected, (state) => {
        //     state.isLoading = false
        //     console.log('error - rejected')
        // })
    },
})

// export const { addBread, removeBread } = categoriesSlice.actions
export default categoriesSlice.reducer