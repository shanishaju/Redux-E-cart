import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slice/wishlistSlice";




 export const store = configureStore({
    reducer: {
        wishlistReducer : wishlistSlice
    }
})

export default store