import { createSlice } from "@reduxjs/toolkit";
const breadcrumbSlice = createSlice({
    name: 'breadcrumbSlice',
    initialState: {
        breadcrumb: ['Главная:/'],
    },
    reducers: {
        addBread(state, action) {
            state.breadcrumb.push(action.payload)
        },
        removeBread(state, action) {
            console.log(action.payload)
            state.breadcrumb.length = 1
        }
    }
})

export const { addBread, removeBread } = breadcrumbSlice.actions
export default breadcrumbSlice.reducer