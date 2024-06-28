import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";
import cartReducer from "./cartSlice";



const appStore = configureStore(
  {
    reducer:{
      toggle: toggleReducer,
      cart: cartReducer,
     
     
     
    }
  }
);

export default appStore;


