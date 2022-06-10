import axios from "axios";

export const createUser = async (newUser: any) => {
  try {
    console.log("====================================");
    console.log(newUser);
    console.log("====================================");
    const user = await axios.post(
      "http://localhost:5000/account/create",
      newUser
    );
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};
