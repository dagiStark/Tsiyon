import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productList: [],
  isLoading: true,
};

const AdminProductsSlice = createSlice({
  name: "adminProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload.data;
      })
      .addCase(fetchAllProducts.rejected, (state) => {
        state.isLoading = false;
        state.productList = [];
      });
  },
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

export const editProduct = createAsyncThunk(
  "/products/edit-product",
  async ({ formData, id }, { rejectWithValue }) => {
    try {
      const result = await axios.put(
        `http://localhost:5000/api/admin/products/edit/:${id}`,
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

export const deleteProduct = createAsyncThunk(
  "/products/delete-product",
  async (id, { rejectWithValue }) => {
    try {
      const result = await axios.delete(
        `http://localhost:5000/api/admin/products/delete/${id}`
      );
      return result?.message;
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

export default AdminProductsSlice.reducer;
