// 1 import two things
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { registerUser } from "./userService.js";

// 2 create your initialState
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  userLoading: false,
  userSuccess: false,
  userError: false,
  userMessage: "",
};

// 5 call the service between initialState , global State
export const regUserdata = createAsyncThunk(
  "registerUser_redux",
  async (userData, thunkAPI) => {
    try {
      return await registerUser(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.error);
    }
  }
);

// 3 create slice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userReset: (state) => {
      state.userLoading = false;
      state.userError = false;
      state.userMessage = "";
      state.userSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(regUserdata.pending, (state, action) => {
        state.userLoading = true;
      })
      .addCase(regUserdata.rejected, (state, action) => {
        state.userError = true;
        state.userMessage = action.payload;
      })
      .addCase(regUserdata.fulfilled, (state, action) => {
        state.userLoading = false;
        state.userSuccess = true;
        state.user = action.payload;
      });
  },
});

// 4 export the slice
export default userSlice.reducer;
export const { userReset } = userSlice.actions;
