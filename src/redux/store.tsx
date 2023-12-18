import { configureStore } from "@reduxjs/toolkit";
import {authApiSlice}  from "../redux/slice/authApiSlice";

export const store = configureStore({
  reducer: {
    auth: authApiSlice.reducer,
  },
});
