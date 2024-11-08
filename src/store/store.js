<<<<<<< HEAD
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
=======
import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './productsSlice'
import cartSlice from './cartSlice'
import favoriteSlice from './FavoriteSlice'

const store = configureStore({
    reducer: {
        productStore: productsSlice,
        cartStore:cartSlice,
        favoriteStore:favoriteSlice
    }
})
>>>>>>> c683fde2d71bb2d1353d798a1229566d6a152c5c

export default store;
