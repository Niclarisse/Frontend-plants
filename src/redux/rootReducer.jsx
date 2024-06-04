import { combineReducers } from "redux";
// import utilsSlice from "./slices/utilsSlice/utilsSlice";

// import usersSlice from "./slices/usersSlice/usersSlice";
import loggedInSlice from "./slices/loggedInSlice/loggedInSlice";
import categorySlice from "./slices/category/categorySlice";
import plantSlice from "./slices/plant/plantSlice";

const RootReducer = combineReducers({
  loggedIn: loggedInSlice,
  category: categorySlice,
  plants: plantSlice,
});

export default RootReducer;
