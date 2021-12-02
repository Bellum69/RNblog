import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
//import { logger } from "redux-logger/src";
import AsyncStorage from "@react-native-async-storage/async-storage";
import mainReducer from "./reducers/mainSlice";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["mainReducer"],
};

const rootReducer = combineReducers({
  mainReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
