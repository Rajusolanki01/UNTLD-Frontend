import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { blogService } from "./blogService";

export const getAllblogs = createAsyncThunk(
  "blog/get-all-blogs",
  async (thunkAPI) => {
    try {
      return await blogService.getblogs();
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

export const getSingleblog = createAsyncThunk(
  "blog/get-single-blogs",
  async (id, thunkAPI) => {
    try {
      return await blogService.getablog(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

const blogState = {
  blogs: [],
  singleBlog: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  ismessage: "",
};

export const blogSlice = createSlice({
  name: "blog",
  initialState: blogState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllblogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllblogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blogs = action.payload;
      })
      .addCase(getAllblogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.ismessage = action.error;
      })
      .addCase(getSingleblog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleblog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.singleBlog = action.payload;
      })
      .addCase(getSingleblog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.ismessage = action.error;
      });
  },
});

export default blogSlice.reducer;
