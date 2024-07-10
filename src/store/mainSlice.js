import { createSlice } from "@reduxjs/toolkit";
const mainSlice = createSlice({
    name: 'mainSlice',
    initialState: {
        favourites: [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7],
        breadcrumb: ['Главная:/', 'Помощь:/help'],
        favourites2: [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 71, 2, 3, 4, 5, 6, 7],
    },
    reducers: {
        info(state, action) {
            console.log(state)
            console.log(action)
            console.log(state.favourites)
        },
    }
})

export const { info } = mainSlice.actions
export default mainSlice.reducer