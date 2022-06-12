import { findUserbyId } from "../api/backendAPI";
import { setProfile } from "./reducers/profileSlice";

export const loadUser = async (loader: any, token: string | null) => {
  const user = await findUserbyId(token);

  loader(setProfile(user));
};
