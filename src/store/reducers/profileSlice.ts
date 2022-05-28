import { ProfileState } from "./../../components/types/storeTypes/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ProfileState = {
  currency: "USD",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    profileLogedToggle(state: any, action: PayloadAction<string>) {
      state.currency = action.payload;
    },
  },
});

export const { profileLogedToggle } = profileSlice.actions;

export default profileSlice.reducer;
