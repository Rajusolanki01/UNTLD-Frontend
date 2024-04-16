import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "sonner";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (userData, thunkAPI) => {
    try {
      return await authService.logout(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const deleteUserProfile = createAsyncThunk(
  "auth/delete-profile",
  async (id, thunkAPI) => {
    try {
      return await authService.deleteprofile(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const forgotUserPassword = createAsyncThunk(
  "auth/forgot-password",
  async (userData, thunkAPI) => {
    try {
      return await authService.forgotPassword(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const resetUserPassword = createAsyncThunk(
  "auth/reset-password",
  async (userData, thunkAPI) => {
    try {
      return await authService.resetPassword(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "auth/update-profile",
  async (userData, thunkAPI) => {
    try {
      return await authService.updateprofile(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const getUserProductWishlist = createAsyncThunk(
  "auth/wishlist",
  async (thunkAPI) => {
    try {
      return await authService.getUserWishlist();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const getASingleUser = createAsyncThunk(
  "auth/single-user",
  async (id, thunkAPI) => {
    try {
      return await authService.getSingleUser(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const getUserCart = createAsyncThunk(
  "auth/user-cart",
  async (thunkAPI) => {
    try {
      return await authService.getCart();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const productAddToCart = createAsyncThunk(
  "auth/add-to-cart",
  async (cartData, thunkAPI) => {
    try {
      return await authService.addToCart(cartData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const removeProductFromTheCart = createAsyncThunk(
  "auth/remove-cart-product",
  async (cartItemId, thunkAPI) => {
    try {
      return await authService.removeCartProduct(cartItemId);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const updateProductQuantityFromTheCart = createAsyncThunk(
  "auth/update-product-quantity",
  async (cartDetail, thunkAPI) => {
    try {
      await authService.updateQuantityCartProduct(cartDetail);
      thunkAPI.dispatch(getUserCart());
      return { cartDetail };
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const createTheOrder = createAsyncThunk(
  "auth/create-order",
  async (orderDetail, thunkAPI) => {
    try {
      return await authService.createOrder(orderDetail);
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data.message || error.message);
    }
  }
);

export const getMyOrders = createAsyncThunk(
  "auth/get-my-order",
  async (thunkAPI) => {
    try {
      return await authService.myOrders();
    } catch (error) {
      thunkAPI.rejectWithValue(error.response.data.message || error.message);
    }
  }
);
const authState = {
  user: "",
  wishlist: {},
  userCart: {},
  createUserOrder: {},
  singleUser: "",
  forgotPassword: "",
  myOrders: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  ismessage: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.ismessage = action.error;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.ismessage = action.error;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
      })

      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.ismessage = action.error;
      })
      .addCase(forgotUserPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(forgotUserPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.forgotPassword = action.payload;
      })
      .addCase(forgotUserPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.ismessage = action.error;
      })
      .addCase(resetUserPassword.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resetUserPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        if (state.isSuccess) {
          toast.success("Password Successfully Change");
        }
        state.user = action.payload;
      })
      .addCase(resetUserPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.ismessage = action.error;
      })
      .addCase(getUserProductWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserProductWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.wishlist = action.payload;
      })
      .addCase(getUserProductWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.ismessage = action.error;
      })
      .addCase(getUserCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.userCart = action.payload;
      })
      .addCase(getUserCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.ismessage = action.error;
      })
      .addCase(getASingleUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getASingleUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleUser = action.payload;
      })
      .addCase(getASingleUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.ismessage = action.error;
      })
      .addCase(productAddToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(productAddToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        if (state.isSuccess) {
          toast.success("Product Added To Cart");
        }
        state.userCart = action.payload;
      })
      .addCase(productAddToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.ismessage = action.error;
      })
      .addCase(removeProductFromTheCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeProductFromTheCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        if (state.isSuccess) {
          toast.success("Product Remove");
        }
        state.userCart = state.userCart.filter(
          (item) => item?._id !== action.payload
        );
      })
      .addCase(removeProductFromTheCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.ismessage = action.error;
      })
      .addCase(updateProductQuantityFromTheCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProductQuantityFromTheCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        if (state.isSuccess) {
          toast.success("Update Product Quantity");
        }
        const { cartDetail } = action.payload;
        state.userCart = state.userCart.map((item) =>
          item._id === cartDetail._id
            ? { ...item, quantity: cartDetail.quantity }
            : item
        );
      })
      .addCase(updateProductQuantityFromTheCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.ismessage = action.error;
      })
      .addCase(createTheOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTheOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        if (state.isSuccess) {
          toast.success("Order is Successful");
        }
        state.createUserOrder = action.payload;
      })
      .addCase(createTheOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.ismessage = action.error;
      })
      .addCase(getMyOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMyOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.myOrders = action.payload;
      })
      .addCase(getMyOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.ismessage = action.error;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        if (state.isSuccess) {
          toast.success("Profile Update");
        }
        state.singleUser = action.payload;
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.ismessage = action.error;
      })
      .addCase(deleteUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        if (state.isSuccess) {
          toast.success("Profile Update");
        }
        state.singleUser = action.payload;
      })
      .addCase(deleteUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.ismessage = action.error;
      });
  },
});

export default authSlice.reducer;
