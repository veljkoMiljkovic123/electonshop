import { createSlice } from '@reduxjs/toolkit'



const productsSlice = createSlice({
    name: 'products',
    initialState:{
        allProducts: [],
    },
    reducers: {
       saveAllProductsAction: (state, action) => {
           console.log(action.payload);
           state.allProducts = action.payload
       } 
    }
})

export const{saveAllProductsAction} = productsSlice.actions
export default productsSlice.reducer