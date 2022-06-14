import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profileSlice";
import expensesReducer from "./reducers/expensesSlice";
import incomeReducer from "./reducers/incomeSlice";

const rootReducer = combineReducers({
  profile: profileReducer,
  expenses: expensesReducer,
  income: incomeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store.getState;
export type AppDispatch = typeof store.dispatch;
