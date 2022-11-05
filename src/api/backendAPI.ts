import axios from "axios";

export const createUser = async (newUser: any) => {
  try {
    const user = await axios.post(
      "https://testrepodrfinance.herokuapp.com/account/create",
      newUser
    );
    console.log(user);
  } catch (error: any) {
    if (error.response.data === undefined) {
      return error;
    }

    return error.response;
  }
};

export const loginUser = async (newUser: any) => {
  try {
    const user = await axios.post(
      "https://testrepodrfinance.herokuapp.com/account/login",
      newUser
    );
    return user.data.accessTocken;
  } catch (error: any) {
    if (error.response.data === undefined) {
      return error;
    }

    return error.response;
  }
};

export const addIncomeTranscript = async (newIncome: any) => {
  try {
    const user = await axios.put(
      "https://testrepodrfinance.herokuapp.com/account/income",

      newIncome,
      {
        headers: {
          Authorization: "Bearer " + newIncome.id,
        },
      }
    );

    console.log(user.data);
    return user.data;
  } catch (error: any) {
    console.log(error.response);
    return error.response;
  }
};

export const addExpensesTranscript = async (newIncome: any) => {
  try {
    const user = await axios.put(
      "https://testrepodrfinance.herokuapp.com/account/expenses",
      newIncome,
      {
        headers: {
          Authorization: "Bearer " + newIncome.id,
        },
      }
    );
    console.log(user.data);
    return user.data;
  } catch (error: any) {
    console.log(error.response);
    return error.response;
  }
};

export const findUserbyId = async (newIncome: any) => {
  try {
    const user = await axios.get(
      `https://testrepodrfinance.herokuapp.com/account?id=${newIncome}`
    );
    return user.data;
  } catch (error: any) {
    return error.response;
  }
};

export const deleteExpense = async (item: any) => {
  try {
    console.log(JSON.stringify(item, null, 2));
    const user = await axios.put(
      `https://testrepodrfinance.herokuapp.com/account/delete/expense`,
      item,
      {
        headers: {
          Authorization: "Bearer " + item.id,
        },
      }
    );
    return user.data;
  } catch (error: any) {
    return error.response;
  }
};

export const deleteIncome = async (item: any) => {
  try {
    console.log(JSON.stringify(item, null, 2));
    const user = await axios.put(
      `https://testrepodrfinance.herokuapp.com/account/delete/income`,
      item,
      {
        headers: {
          Authorization: "Bearer " + item.id,
        },
      }
    );
    return user.data;
  } catch (error: any) {
    return error.response;
  }
};

export const editIncome = async (item: any) => {
  try {
    console.log(JSON.stringify(item, null, 2));
    const user = await axios.put(
      `https://testrepodrfinance.herokuapp.com/account/edit/income`,
      item,
      {
        headers: {
          Authorization: "Bearer " + item.id,
        },
      }
    );
    return user.data;
  } catch (error: any) {
    return error.response;
  }
};

export const editExpense = async (item: any) => {
  try {
    console.log(JSON.stringify(item, null, 2));
    const user = await axios.put(
      `https://testrepodrfinance.herokuapp.com/account/edit/expense`,
      item,
      {
        headers: {
          Authorization: "Bearer " + item.id,
        },
      }
    );
    return user.data;
  } catch (error: any) {
    return error.response;
  }
};
