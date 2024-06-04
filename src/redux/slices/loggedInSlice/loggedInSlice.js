import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggeduser: {},
  token: {},
  loading: false,
};

const loggedInUserSlice = createSlice({
  name: "loggedIn",
  initialState,
  reducers: {
    setLoggedInUser: (state, action) => {
      state.loggeduser = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    resetLoggedInUser: (state, action) => {
      state.loggeduser = {};
    },
  },
});

export const { setLoggedInUser, resetLoggedInUser, setToken } =
  loggedInUserSlice.actions;

export default loggedInUserSlice.reducer;
