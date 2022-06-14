import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserFinancesState } from "./../../components/types/storeTypes/types";

const initialState: UserFinancesState = {
  bills: 0,
  car: 0,
  clothes: 0,
  comunication: 0,
  eatingPlace: 0,
  entertainment: 0,
  food: 0,
  gifts: 0,
  health: 0,
  house: 0,
  pets: 0,
  sports: 0,
  taxi: 0,
  transport: 0,
};

const userFinancesSlice = createSlice({
  name: "userFinances",
  initialState: initialState,
  reducers: {
    setFinances(state: any, action: any) {
      action.payload.map((el: any) => {
        if (el.type === "bills") {
          state.bills += +el.amount;
        }
        if (el.type === "car") {
          state.car += +el.amount;
        }
        if (el.type === "clothes") {
          state.clothes += +el.amount;
        }
        if (el.type === "comunication") {
          state.comunication += +el.amount;
        }
        if (el.type === "eatingPlace") {
          state.eatingPlace += +el.amount;
        }
        if (el.type === "entertainment") {
          state.entertainment += +el.amount;
        }
        if (el.type === "food") {
          state.food += +el.amount;
        }
        if (el.type === "gifts") {
          state.gifts += +el.amount;
        }
        if (el.type === "health") {
          state.health += +el.amount;
        }
        if (el.type === "house") {
          state.house += +el.amount;
        }
        if (el.type === "pets") {
          state.pets += +el.amount;
        }
        if (el.type === "sports") {
          state.sports += +el.amount;
        }
        if (el.type === "taxi") {
          state.taxi += +el.amount;
        }
        if (el.type === "transport") {
          state.transport += +el.amount;
        }
      });
    },

    setFinance(state: any, action: any) {
      if (action.payload.expenses.type === "bills") {
        state.bills += +action.payload.expenses.amount;
      }
      if (action.payload.expenses.type === "car") {
        state.car += +action.payload.expenses.amount;
      }
      if (action.payload.expenses.type === "clothes") {
        state.clothes += +action.payload.expenses.amount;
      }
      if (action.payload.expenses.type === "comunication") {
        state.comunication += +action.payload.expenses.amount;
      }
      if (action.payload.expenses.type === "eatingPlace") {
        state.eatingPlace += +action.payload.expenses.amount;
      }
      if (action.payload.expenses.type === "entertainment") {
        state.entertainment += +action.payload.expenses.amount;
      }
      if (action.payload.expenses.type === "food") {
        state.food += +action.payload.expenses.amount;
      }
      if (action.payload.expenses.type === "gifts") {
        state.gifts += +action.payload.expenses.amount;
      }
      if (action.payload.expenses.type === "health") {
        state.health += +action.payload.expenses.amount;
      }
      if (action.payload.expenses.type === "house") {
        state.house += +action.payload.expenses.amount;
      }
      if (action.payload.expenses.type === "pets") {
        state.pets += +action.payload.expenses.amount;
      }
      if (action.payload.expenses.type === "sports") {
        state.sports += +action.payload.expenses.amount;
      }
      if (action.payload.expenses.type === "taxi") {
        state.taxi += +action.payload.expenses.amount;
      }
      if (action.payload.expenses.type === "transport") {
        state.transport += +action.payload.expenses.amount;
      }
    },
  },
});

export const { setFinances, setFinance } = userFinancesSlice.actions;

export default userFinancesSlice.reducer;
