import api from "../../../components/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllUsers = createAsyncThunk("fetchAllUsers", async () => {
  try {
    const response = await api.get("/user/all-users");
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
});
