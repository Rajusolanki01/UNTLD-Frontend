import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/user/userSlice";
import productReducer from "../feature/product/productSlice";
import blogReducer from "../feature/blog/blogSlice";
import contactReducer from "../feature/contact/contactSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    blog: blogReducer,
    contact: contactReducer,
  },
});

export default store;
