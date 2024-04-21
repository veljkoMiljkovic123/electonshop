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

export default store