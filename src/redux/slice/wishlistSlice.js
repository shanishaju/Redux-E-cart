import { createSlice } from "@reduxjs/toolkit"




const wishlistSlice = createSlice({
    name:'wishlistSlice',
    initialState:[],
    reducers:{
        // add to wishlist
        addToWishlist:(state , actions)=>{
            state.push(actions.payload)
        },
        // remove from wish list
        removeFromWishlist:()=>{}
    }
})


export const {addToWishlist , removeFromWishlist} = wishlistSlice.actions

export default wishlistSlice.reducer