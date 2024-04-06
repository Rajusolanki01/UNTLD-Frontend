import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { contactService } from "./contactService";

export const contactEnquiry = createAsyncThunk(
  "contact/create-contact-enquiry",
  async (contactData, thunkAPI) => {
    console.log(contactData);
    try {
      return await contactService.createContactEnquiry(contactData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response.data.message || error.message
      );
    }
  }
);

const contactState = {
  contact: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  ismessage: "",
};

export const contactSlice = createSlice({
  name: "contact",
  initialState: contactState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(contactEnquiry.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(contactEnquiry.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.contact = action.payload;
      })
      .addCase(contactEnquiry.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.ismessage = action.error;
      });
  },
});

export default contactSlice.reducer;
