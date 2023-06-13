import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./features/auth/authSlice"
import productReducer from './features/productList/productSlice';

export const store = configureStore({
  reducer: {
    product:productReducer,
    user:authReducer
  },
});