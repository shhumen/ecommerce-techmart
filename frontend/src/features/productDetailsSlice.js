import {createSlice} from "@reduxjs/toolkit";
import {fetchProductById} from "./actions/actions";

const initialState = {
    productDetails: {},
    loading: false,
    error: ""
}


const productDetailsSlice = createSlice({
    name: "productDetails",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductById.pending, (state) => ({
                ...state,
                loading: true
            }))
            .addCase(fetchProductById.fulfilled, (state, action) => ({
                ...state,
                loading: false,
                productDetails: action.payload,
                error: "",
            }))
            .addCase(fetchProductById.rejected, (state) => ({
                ...state,
                loading: false,
                error: "Error occurred"
            }))
    }
})

export default productDetailsSlice.reducer

export const selectProductDetails = (state) => state.productDetails