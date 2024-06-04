import api from "../../../components/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCategory = createAsyncThunk("fetchCategory", async () => {
  try {
    const response = await api.get("/category");
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
});

export const fetchSingleCategory = createAsyncThunk(
  "fetchSingleCategory",
  async (id) => {
    try {
      const response = await api.get(`/category/${id}`);
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  }
);
