// src/store/productsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [], // Lista svih proizvoda
  currentCategory: "allProducts", // Početna kategorija
};

const productsSlice = createSlice({
<<<<<<< HEAD
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
=======
    name: 'products',
    initialState:{
        allProducts: [],
        currentCategory:'allProducts'
    },
    reducers: {
       saveAllProductsAction: (state, action) => {
           console.log(action.payload);
           state.allProducts = action.payload
       },
       setNewCategory:(state,action) => {
        state.currentCategory = action.payload
       }
    }
})

export const{saveAllProductsAction,setNewCategory} = productsSlice.actions
export default productsSlice.reducer
>>>>>>> c683fde2d71bb2d1353d798a1229566d6a152c5c
