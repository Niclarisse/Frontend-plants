import { createSlice } from "@reduxjs/toolkit";
import { fetchCategory, fetchSingleCategory } from "./categoryThunks";

const initialState = {
  is_category_loading: false,
  is_categories_loading: false,
  category: {},
  categories: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.is_categories_loading = true;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        const data = action.payload;
        state.is_categories_loading = false;
        state.categories = data;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        console.log(action.error.message, "error");
        state.is_categories_loading = false;
      })
      .addCase(fetchSingleCategory.pending, (state) => {
        state.is_category_loading = true;
      })
      .addCase(fetchSingleCategory.fulfilled, (state, action) => {
        const data = action.payload;
        state.is_category_loading = false;
        state.category = data;
      })
      .addCase(fetchSingleCategory.rejected, (state, action) => {
        console.log(action.error.message, "error");
        state.is_category_loading = false;
      });
  },
});

export default categorySlice.reducer;
