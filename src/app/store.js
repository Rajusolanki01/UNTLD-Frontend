import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/user/userSlice";
import productReducer from "../feature/product/productSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
});

export default store;
