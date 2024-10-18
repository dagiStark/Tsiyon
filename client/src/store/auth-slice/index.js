import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
        state.isLoading = true
    }).addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = null
        state.isAuthenticated = false
    }).addCase(registerUser.rejected, (state) => {
        state.isLoading = false
        state.user = null
        state.isAuthenticated = false
    }).addCase(loginUser.pending, (state) => {
        state.isLoading = true
    }).addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.user = action.payload
        state.isAuthenticated = true
    }).addCase(loginUser.rejected, (state) => {
        state.isLoading = false
        state.user = null
        state.isAuthenticated = false
    })
  }
});



export const registerUser = createAsyncThunk(
  "/auth/register",

  async (formData, { rejectWithValue }) => {
    if(formData.password !== formData.confirmPassword){
        return rejectWithValue('Passwords do not match')
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        formData,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue("An error occurred while registering the user.");
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "/auth/login",

  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue("An error occurred while registering the user.");
      }
    }
  }
);




export const { setUser } = authSlice.actions;
export default authSlice.reducer;
