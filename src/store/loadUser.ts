import { findUserbyId } from "../api/backendAPI";
import { setProfile } from "./reducers/profileSlice";
import { setFinance, setFinances } from "./reducers/userFinancesSlice";

export const loadUser = async (
  loader: any,
  token: string | null,
  set: boolean = false,
  object: any = {}
) => {
  const user = await findUserbyId(token);

  console.log(user);

  loader(setProfile(user));

  if (set) {
    loader(setFinances(user.expenses));
  } else {
    loader(setFinance(object));
  }
};
