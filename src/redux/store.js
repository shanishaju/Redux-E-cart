import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slice/wishlistSlice";
import cartSlice from "./slice/cartSlice";

export const store = configureStore({
    reducer:{
        wishlistReducer:wishlistSlice,
        cartlistReducer:cartSlice
    }
})

export default store