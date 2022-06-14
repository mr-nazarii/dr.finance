import { createSlice } from "@reduxjs/toolkit";
import { IncomeState } from "../../components/types/storeTypes/types";

const initialState: IncomeState = {
  salary: 0,
  deposit: 0,
  savings: 0,
};

const incomeSlice = createSlice({
  name: "income",
  initialState: initialState,
  reducers: {
    setIncomes(state: any, action: any) {
      action.payload.map((el: any) => {
        if (el.type === "salary") {
          state.salary += +el.amount;
        }
        if (el.type === "deposit") {
          state.deposit += +el.amount;
        }
        if (el.type === "savings") {
          state.savings += +el.amount;
        }
        return "succsess";
      });
    },

    setIncome(state: any, action: any) {
      if (action.payload.income.type === "salary") {
        state.salary += +action.payload.income.amount;
      }
      if (action.payload.income.type === "deposit") {
        state.deposit += +action.payload.income.amount;
      }
      if (action.payload.income.type === "savings") {
        state.savings += +action.payload.income.amount;
      }
    },
  },
});

export const { setIncomes, setIncome } = incomeSlice.actions;

export default incomeSlice.reducer;
