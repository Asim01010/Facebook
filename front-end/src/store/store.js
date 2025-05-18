// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/auth_users/userSlice";

export const store = configureStore({
  reducer: {
    auth: userSlice,
  },
});
