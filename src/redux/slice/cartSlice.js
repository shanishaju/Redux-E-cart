import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers:{
        // add to cartlist function
        addtoCartList:(state,action) =>{
            state.push(action.payload)
        },

        // remove from cartlist function
        removeFromCartList:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }
})

export const{addtoCartList,removeFromCartList} = cartSlice.actions
export default cartSlice.reducer