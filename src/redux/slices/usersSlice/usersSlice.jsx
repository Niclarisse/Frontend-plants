import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers } from "./usersThunks";

const initialState = {
  fetch_all_users_loading: false,
  all_users: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.fetch_all_users_loading = true;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        const data = action.payload;
        state.fetch_all_users_loading = false;
        state.all_users = data;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        console.log(action.error.message, "error");
        state.fetch_all_users_loading = false;
      });
  },
});

export default usersSlice.reducer;
