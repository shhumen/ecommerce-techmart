import {createSlice} from "@reduxjs/toolkit";
import {fetchCategories} from "./actions/actions";

const initialState = {
    categories: [],
    loading: false,
    status: ""
}


const categoriesSlice = createSlice({
    name: "categories",
    initialState: initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = "pending"
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = "success"
                state.categories = action.payload
            })
            .addCase(fetchCategories.rejected, (state) => {
                state.status = "rejected"
            })
    }

})

export default categoriesSlice.reducer




// export const fetchCategories = createAsyncThunk(
//     "categories/fetchCategories",
//     async () => {
//         try {
//             const response = await axios.get("http://localhost:8000/products/categories");
//             return response.data;
//         } catch (error) {
//             return error;
//         }
//     }
// );
