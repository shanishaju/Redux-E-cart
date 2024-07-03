import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState:[],

    reducers:{
        // add to wishlist function
        addToWishlist: (state, actions) => {
            state.push(actions.payload)
        },

        // remove from wishlist function
        removeFromWishlist: (state, actions) => {
           return state.filter(item => item.id != actions.payload)
        },

        
    }
        
})

export const{addToWishlist,removeFromWishlist} = wishlistSlice.actions

export default wishlistSlice.reducer