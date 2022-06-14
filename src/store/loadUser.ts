import { findUserbyId } from "../api/backendAPI";
import { setProfile } from "./reducers/profileSlice";
import { setExpenses, setExpense } from "./reducers/expensesSlice";
import { setIncome, setIncomes } from "./reducers/incomeSlice";

export const loadUser = async (
  loader: any,
  token: string | null,
  set: string,
  object: any = {}
) => {
  const user = await findUserbyId(token);

  if (set === "expenses") {
    loader(setExpenses(user.expenses));
  } else if (set === "expense") {
    loader(setExpense(object));
  } else if (set === "incomes") {
    loader(setIncomes(user.income));
  } else if (set === "income") {
    loader(setIncome(object));
  } else {
    loader(setProfile(user));
  }
};
