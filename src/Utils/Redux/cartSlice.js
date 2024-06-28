import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    items:0,
  },
  reducers:{
    addCart:(state,action)=>{
      state.items+=1;
    }
  }
});


export const{addCart} = cartSlice.actions;
export default cartSlice.reducer;