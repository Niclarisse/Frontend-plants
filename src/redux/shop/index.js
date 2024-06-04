import { createSlice } from "@reduxjs/toolkit";

const shopSlice=createSlice({
    name:"shop",
    initialState:{
        new:null,
        allPlants:null,
        singlePlant:null,
        isFetching:false
    },
    reducers:{
        setIsFetching(state,action){
            state.isFetching=action.payload;
        },
        setNew(state,action){
            state.new=action.payload;
        },
        setAllPlants(state,action){
            state.allPlants=action.payload;
        },
        setSinglePlant(state,action){
            state.singlePlant=action.payload;
        },
    }
})
export const shopAction=shopSlice.actions;

export default shopSlice.reducer;