import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profileSlice";

const rootReducer = combineReducers({
  profile: profileReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store.getState;
export type AppDispatch = typeof store.dispatch;
