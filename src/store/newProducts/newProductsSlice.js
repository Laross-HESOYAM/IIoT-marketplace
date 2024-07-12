import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../Utils/Api";
export const getNewCard = createAsyncThunk('newProducts/getNewCard', async (_, thunkAPI) => {
    try {
        const res = await axios(`${BASE_URL}/products`)
        return res.data
    } catch (error) {
        console.log(error)
        return thunkAPI.rejectWithValue(error)
    }
})

const newProductsSlice = createSlice({
    name: 'newProducts',
    initialState: {
        card: [],
        // filtered: [],
        isLoading: false
    },
    extraReducers: (builder) => {
        // builder.addCase(getNewCard.pending, (state) => {
        //     state.isLoading = true
        // });
        builder.addCase(getNewCard.fulfilled, (state, { payload }) => {
            state.card = payload
            state.isLoading = false
        });
        // builder.addCase(getNewCard.rejected, (state) => {
        //     state.isLoading = false
        //     console.log('error - rejected')
        // })
    },
    reducers: () => {

    },
})

// export const { addBread, removeBread } = newProductsSlice.actions
export default newProductsSlice.reducer