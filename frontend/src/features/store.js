import {configureStore} from "@reduxjs/toolkit";
import productSlice from './productSlice'
import categoriesSlice from "./categorySlice";
import cartSlice, {getTotals} from './cartSlice'
import productDetailsSlice from "./productDetailsSlice";
import {productsApi} from "./productsApi";
import {fetchCategories, fetchProductById, fetchProducts} from "./actions/actions";

export const store = configureStore({
    reducer: {
        products: productSlice,
        categories: categoriesSlice,
        productDetails: productDetailsSlice,
        cart: cartSlice,
        [productsApi.reducerPath]:
        productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productsApi.middleware)
    }
})

store.dispatch(fetchProducts())
store.dispatch(fetchCategories())
store.dispatch(fetchProductById())
store.dispatch(getTotals())