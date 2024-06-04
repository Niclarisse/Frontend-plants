import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPlants,
  fetchSinglePlant,
  fetchPlantByCategories,
  fetchCart,
  deleteCart,
} from "./plantThunks";

const initialState = {
  is_plant_loading: false,
  is_plants_loading: false,
  plant: {},
  allplants: [],
  singlePlant: {},
  plantCategory: {},
  cartItems: {},
};

const plantsSlice = createSlice({
  name: "plants",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlants.pending, (state) => {
        state.is_plants_loading = true;
      })
      .addCase(fetchPlants.fulfilled, (state, action) => {
        const data = action.payload;
        state.is_plants_loading = false;
        state.allplants = data;
      })
      .addCase(fetchPlants.rejected, (state, action) => {
        console.log(action.error.message, "error");
        state.is_plants_loading = false;
      })
      .addCase(fetchSinglePlant.pending, (state) => {
        state.is_plant_loading = true;
      })
      .addCase(fetchSinglePlant.fulfilled, (state, action) => {
        const data = action.payload;
        state.is_plant_loading = false;
        state.plant = data;
      })
      .addCase(fetchSinglePlant.rejected, (state, action) => {
        console.log(action.error.message, "error");
        state.is_plant_loading = false;
      })
      .addCase(fetchPlantByCategories.pending, (state) => {
        state.is_plant_loading = true;
      })
      .addCase(fetchPlantByCategories.fulfilled, (state, action) => {
        const data = action.payload;
        state.is_plant_loading = false;
        state.plantCategory = data;
        console.log(data, "dataaaaaaa");
      })
      .addCase(fetchPlantByCategories.rejected, (state, action) => {
        console.log(action.error.message, "error");
        state.is_plant_loading = false;
      })
      .addCase(fetchCart.pending, (state) => {
        state.is_plant_loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        const data = action.payload;
        state.is_plant_loading = false;
        state.cartItems = data;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        console.log(action.error.message, "error");
        state.is_plant_loading = false;
      })
      .addCase(deleteCart.pending, (state) => {
        state.is_plant_loading = true;
      })
      .addCase(deleteCart.fulfilled, (state, action) => {
        const data = action.payload;
        state.is_plant_loading = false;
        state.cartItems = data;
      })
      .addCase(deleteCart.rejected, (state, action) => {
        console.log(action.error.message, "error");
        state.is_plant_loading = false;
      });
  },
});

export default plantsSlice.reducer;
