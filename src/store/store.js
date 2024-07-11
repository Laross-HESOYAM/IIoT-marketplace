import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import newProductsSlice from "./newProducts/newProductsSlice";

export default configureStore({
    reducer: {
        categories: categoriesSlice,
        newProducts: newProductsSlice
    },
});