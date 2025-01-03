import { configureStore } from "@reduxjs/toolkit";
import { api } from "./Api";
import authSlice from "../context/Auth/AuthSlice";
import wishlistSlice from "./Heart/Heart_Slice";
import cartSlice from "./Cart/CartSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    wishlist: wishlistSlice,
    cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
