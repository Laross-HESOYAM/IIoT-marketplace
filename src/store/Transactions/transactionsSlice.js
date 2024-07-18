import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// import { BASE_URL } from "../../Utils/Api";
// export const getNewCard = createAsyncThunk('newProducts/getNewCard', async (_, thunkAPI) => {
//     try {
//         const res = await axios(`${BASE_URL}/products`)
//         return res.data
//     } catch (error) {
//         console.log(error)
//         return thunkAPI.rejectWithValue(error)
//     }
// })

const transactionsSlice = createSlice({
    name: 'newTransaction',
    initialState: {
        cardTransaction: [{
            data: '27.06.2024', user: 'Павел Петров', type: 'primary', product: [
                'Сверло Арт 01292000', 'Сверло Арт 01292001', 'Сверло Арт 01292002', 'Сверло Арт 01292003'
            ]
        }, {
            data: '28.06.2024', user: 'Павел Петров', type: 'conversation', product: [
                'Текст запроса',
            ]
        }, {
            data: '23.06.2024', user: 'Павел Петров', type: 'agreement', product: [
                'Сверло Арт 01292000', 'Сверло Арт 01292001', 'Сверло Арт 01292002', 'Сверло Арт 01292003'
            ]
        }, {
            data: '25.06.2024', user: 'Павел Петров', type: 'agreement', product: [
                'Сверло Арт 01292100', 'Сверло Арт 01292101', 'Сверло Арт 01292002', 'Сверло Арт 01292003'
            ]
        }],
        // filtered: [],
        isLoading: false
    },
    extraReducers: (builder) => {

    },
    reducers: () => {

    },
})

// export const { addBread, removeBread } = newProductsSlice.actions
export default transactionsSlice.reducer