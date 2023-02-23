import {createSlice} from "@reduxjs/toolkit";
import {fetchProducts} from "./actions/actions";

const initialState = {
    items: [],
    status: null,
    error: null
}


// export const fetchProducts = createAsyncThunk(
//     'products/productFetch', async () => {
//         const response = await axios.get("http://localhost:8000/products")
//         return response?.data
//     }
// )

const productSlice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "pending"
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "success"
                state.items = action.payload
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = "rejected"
            })
    }

})

export default productSlice.reducer