import axios from "axios";

export const createUser = async (newUser: any) => {
  try {
    const user = await axios.post(
      "http://localhost:5000/account/create",
      newUser
    );
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (newUser: any) => {
  try {
    const user = await axios.post(
      "http://localhost:5000/account/login",
      newUser
    );
    return user.data.accountDetails;
  } catch (error: any) {
    return error.response;
  }
};
