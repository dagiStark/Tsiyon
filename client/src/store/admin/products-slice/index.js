import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null,
};

const AdminProductsSlice = createSlice({
  name: "adminProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export const addNewProduct = createAsyncThunk(
  "/products/add-new-product",
  async (formData, { rejectWithValue }) => {
    try {
      const result = await axios.post(
        "http://localhost:5000/api/admin/products/add",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return result?.data;
    } catch (error) {
      // Check if the error response contains data
      if (error.response && error.response.data) {
        // Return a specific error message from the server
        return rejectWithValue(error.response.data);
      } else {
        // Return a general error message
        return rejectWithValue("An error occurred while adding the product.");
      }
    }
  }
);

export const fetchAllProducts = createAsyncThunk(
  "/products/fetch-all-products",
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.get(
        "http://localhost:5000/api/admin/products/get"
      );
      return result?.data;
    } catch (error) {
      // Check if the error response contains data
      if (error.response && error.response.data) {
        // Return a specific error message from the server
        return rejectWithValue(error.response.data);
      } else {
        // Return a general error message
        return rejectWithValue("An error occurred while adding the product.");
      }
    }
  }
);
