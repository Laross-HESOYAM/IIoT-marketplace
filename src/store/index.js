import { configureStore } from "@reduxjs/toolkit";
import mainSliceReducer from "./mainSlice";
import breadCrumAdd from './breadcrumbSlice';
export default configureStore({
    reducer: {
        favouritesReducer: mainSliceReducer,
        breadAdd: breadCrumAdd
    },
});