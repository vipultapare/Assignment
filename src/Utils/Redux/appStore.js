import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./toggleSlice";
import categoryReducer from './category';

const appStore = configureStore(
  {
    reducer:{
      toggle: toggleReducer,
      category: categoryReducer,
    }
  }
);

export default appStore;


