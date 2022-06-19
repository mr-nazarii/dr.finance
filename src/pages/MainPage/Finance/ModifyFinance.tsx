import { Button, FormControl } from "@mui/material";
import { Send, Close } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import GS from "../../../styles/styles";
import AddIncome from "./AddIncome/AddIncome";
import { AddExpense } from "./AddExpense/AddExpense";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/hooks";
import {
  addExpensesTranscript,
  addIncomeTranscript,
  editIncome,
} from "../../../api/backendAPI";
import { loadUser } from "../../../store/loadUser";
import { editIncomeState } from "../../../store/reducers/profileSlice";

const ModifyFinance = (props: any) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("uToken");

  const standardValue = () => {
    if (props.value) {
      console.log(props.value);
      return props.value.type;
    }
    return "";
  };

  const standardAmount = () => {
    if (props.value) {
      return props.value.amount;
    }
    return "";
  };

  const [num, setNum] = useState(standardAmount());

  const [select, setSelect] = useState(standardValue());

  const handleChange = (event: any) => {
    setSelect(event.target.value as any);
  };

  const handleAmountChange = (event: any) => {
    setNum(event.target.value as any);
  };

  useEffect(() => {
    if (token === null) {
      navigate("/login");
    }
  });

  const transcript = async (boolean: any) => {
    if (boolean) {
      const income = {
        id: token,
        income: { date: new Date().getTime(), type: select, amount: num },
      };

      await addIncomeTranscript(income);
      loadUser(dispatch, token, "income", income);
      loadUser(dispatch, token, "setUser");

      return income;
    }
    const expenses = {
      id: token,
      expenses: { date: new Date().getTime(), type: select, amount: num },
    };

    await addExpensesTranscript(expenses);
    loadUser(dispatch, token, "expense", expenses);
    loadUser(dispatch, token, "setUser");

    return expenses;
  };

  return (
    <>
      <GS.FinanceWrapper>
        <GS.SectionTitle>
          {props.income ? "Add income" : "Add Expense"}
          <GS.CloseButton onClick={() => props.setShow(!props.show)}>
            <Close style={{ color: "red" }} />
          </GS.CloseButton>
        </GS.SectionTitle>

        <FormControl
          component="form"
          fullWidth
          onSubmit={(event: any) => {
            event.preventDefault();

            if (!select || !num) {
              return;
            } else if (props.edit === "income") {
              const income = {
                id: token,
                income: {
                  date: props.value.date,
                  type: select,
                  amount: num,
                },
              };

              console.log(income);

              editIncome(income);
              dispatch(editIncomeState(income));
            } else if (props.edit === "expenses") {
            } else {
              transcript(props.income);

              setSelect("");
              setNum("");
            }
          }}
        >
          {props.income ? (
            <AddIncome
              select={select}
              handleChange={handleChange}
              handleAmountChange={handleAmountChange}
              num={num}
            />
          ) : (
            <AddExpense
              select={select}
              handleChange={handleChange}
              handleAmountChange={handleAmountChange}
              num={num}
            />
          )}

          <Button
            type="submit"
            color="secondary"
            variant="contained"
            endIcon={<Send />}
          >
            ADD
          </Button>
        </FormControl>
      </GS.FinanceWrapper>
    </>
  );
};

export default ModifyFinance;
