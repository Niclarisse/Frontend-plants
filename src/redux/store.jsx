import { configureStore } from "@reduxjs/toolkit";
import RootReducer from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "medecinal",
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const Store = configureStore({
  reducer: persistedReducer,
});

export const Persistor = persistStore(Store);
