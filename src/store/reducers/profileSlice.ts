import { ProfileState } from "./../../components/types/storeTypes/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProfileState = {
  currency: "USD",
  uTocken: "",
  name: "",
  string: "",
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
        id,
        name,
        email,
        password,
        expenses,
        income,
        surname,
        joinDate,
        total,
      }: any = action.payload;

      state.id = id;
      state.name = name;
      state.email = email;
      state.password = password;
      state.expenses = expenses;
      state.income = income;
      state.surname = surname;
      state.joinDate = joinDate;
      state.total = total;
    },
  },
});

export const { profileLogedToggle, profileTokenConfigure, setProfile } =
  profileSlice.actions;

export default profileSlice.reducer;
