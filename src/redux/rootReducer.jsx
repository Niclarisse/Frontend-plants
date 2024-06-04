import { combineReducers } from "redux";
// import utilsSlice from "./slices/utilsSlice/utilsSlice";

// import usersSlice from "./slices/usersSlice/usersSlice";
import loggedInSlice from "./slices/loggedInSlice/loggedInSlice";
import categorySlice from "./slices/category/categorySlice";
import plantSlice from "./slices/plant/plantSlice";
import usersSlice from "./slices/usersSlice/usersSlice";

const RootReducer = combineReducers({
  loggedIn: loggedInSlice,
  category: categorySlice,
  plants: plantSlice,
  users: usersSlice,
});

export default RootReducer;
