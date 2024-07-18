import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categories/categoriesSlice";
import newProductsSlice from "./newProducts/newProductsSlice";
import transactionsSlice from "./Transactions/transactionsSlice";

export default configureStore({
    reducer: {
        categories: categoriesSlice,
        newProducts: newProductsSlice,
        newTransaction: transactionsSlice
    },
});