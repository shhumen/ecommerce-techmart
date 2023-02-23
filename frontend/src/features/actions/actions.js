import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const base_URL = 'http://localhost:8000'


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts', async () => {
        try {
            const response = await axios.get(`${base_URL}/products`)
            return response.data

        } catch (err) {
            return err
        }
    }
)

export const fetchCategories = createAsyncThunk(
    "categories/fetchCategories",
    async () => {
        try {
            const response = await axios.get(`${base_URL}/products/categories`);
            return response.data;
        } catch (error) {
            return error;
        }
    }
);

export const fetchProductById = createAsyncThunk(
    "productDetails/fetchProductById",
    async (id) => {
        try {
            const response = await axios.get(`${base_URL}/products/${id}`)
            return response.data
        } catch (err) {
            return err
        }
    }
)