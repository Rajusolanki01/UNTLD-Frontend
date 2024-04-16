import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { productService } from "./productService";
import { toast } from "sonner";

export const getAllProducts = createAsyncThunk(
  "product/get-all-products",
  async (data, thunkAPI) => {
    try {
      return await productService.getProducts(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const getASingleProducts = createAsyncThunk(
  "product/get-single-products",
  async (productId, thunkAPI) => {
    try {
      return await productService.getSingleProduct(productId);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const addProductWishlist = createAsyncThunk(
  "product/add-to-wishlist",
  async (productId, thunkAPI) => {
    try {
      return await productService.addToWishlist(productId);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const addRatingToProduct = createAsyncThunk(
  "product/add-rating",
  async (ratingData, thunkAPI) => {
    try {
      await productService.rating(ratingData);
      thunkAPI.dispatch(getASingleProducts);
      return ratingData;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

const productState = {
  product: [],
  addToWishlist: {},
  singleProduct: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  ismessage: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState: productState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.ismessage = action.error;
      })
      .addCase(getASingleProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getASingleProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleProduct = action.payload;
      })
      .addCase(getASingleProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.ismessage = action.error;
      })
      .addCase(addProductWishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addProductWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.addToWishlist = action.payload;
        state.ismessage = "Success Product added to wishlist";
      })
      .addCase(addProductWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.ismessage = action.error;
      })
      .addCase(addRatingToProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addRatingToProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.ratigns = action.payload;
        if (state.isSuccess) {
          toast.success("Review Add");
        }
        state.ismessage = "Rating Added Successfully";
      })
      .addCase(addRatingToProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.ismessage = action.error;
      });
  },
});

export default productSlice.reducer;
