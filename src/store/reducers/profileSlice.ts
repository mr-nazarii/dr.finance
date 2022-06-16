import { ProfileState } from "./../../components/types/storeTypes/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProfileState = {
  currency: "USD",
  uTocken: "",
  name: "",
  surname: "",
  email: "",
  password: "",
  joinDate: "",
  income: "",
  expenses: "",
  total: 0,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    profileLogedToggle(state: any, action: PayloadAction<string>) {
      state.currency = action.payload;
    },

    profileTokenConfigure(state: any, action: PayloadAction<string>) {
      state.uTocken = action.payload;
    },

    setProfile(state: any, action: PayloadAction<string>) {
      const {
        _id,
        name,
        email,
        password,
        expenses,
        income,
        surname,
        joinDate,
        total,
      }: any = action.payload;

      state.uTocken = _id;
      state.name = name;
      state.email = email;
      state.password = password;
      state.expenses = expenses;
      state.income = income;
      state.surname = surname;
      state.joinDate = joinDate;
      state.total = total;
    },

    deleteExpenseFromState(state: any, action: PayloadAction<any>) {
      state.expenses = action.payload;
    },
  },
});

export const {
  profileLogedToggle,
  profileTokenConfigure,
  setProfile,
  deleteExpenseFromState,
} = profileSlice.actions;

export default profileSlice.reducer;
