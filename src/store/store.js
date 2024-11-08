// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";
import favoriteSlice from "./favoriteSlice";

const store = configureStore({
  reducer: {
    productStore: productsSlice, // Povezivanje productsSlice sa store-om
    cartStore: cartSlice, // Povezivanje cartSlice sa store-om
    favoriteStore: favoriteSlice, // Povezivanje favoriteSlice sa store-om
  },
});

export default store;
