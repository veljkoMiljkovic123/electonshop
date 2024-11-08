// src/store/productsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [], // Lista svih proizvoda
  currentCategory: "allProducts", // Početna kategorija
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    saveAllProductsAction: (state, action) => {
      state.allProducts = action.payload; // Ažuriranje liste proizvoda
    },
    setNewCategoryAction: (state, action) => {
      state.currentCategory = action.payload; // Postavljanje nove kategorije
    },
  },
});

export const { saveAllProductsAction, setNewCategoryAction } =
  productsSlice.actions;
export default productsSlice.reducer;
