import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profileSlice";
import financesReducer from "./reducers/userFinancesSlice";

const rootReducer = combineReducers({
  profile: profileReducer,
  finances: financesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store.getState;
export type AppDispatch = typeof store.dispatch;
