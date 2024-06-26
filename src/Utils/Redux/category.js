import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice(
  {
    name: "category",
    initialState: {
          getcategory:null,
    },
    reducers:{
      addCategory:(state,action) =>{
        state.getcategory = action.payload;
      }
    }
  }
)

export const {addCategory} = categorySlice.actions;
export default categorySlice.reducer;