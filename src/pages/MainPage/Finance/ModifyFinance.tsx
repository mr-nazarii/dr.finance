import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { Send } from "@mui/icons-material";

import React, { useState } from "react";
import GS from "../../../styles/styles";
import AddIncome from "./AddIncome/AddIncome";
import { AddExpense } from "./AddExpense/AddExpense";

const ModifyFinance = (props: any) => {
  const [select, setSelect] = useState("salary");
  const [num, setNum] = useState(0);

  const handleChange = (event: any) => {
    setSelect(event.target.value as any);
  };

  const handleAmountChange = (event: any) => {
    setNum(event.target.value as any);
  };

  const transcript = (boolean: any) => {
    if (boolean) {
      const income = { income: { type: select, amount: num } };
      return income;
    }
    const expenses = { expenses: { type: select, amount: num } };
    return expenses;
  };

  // change style
  // sending data income expense fix
  return (
    <>
      <GS.FinanceWrapper>
        <GS.SectionTitle>
          {props.income ? "Add income" : "Add Expense"}
        </GS.SectionTitle>

        <FormControl
          component="form"
          fullWidth
          onSubmit={(event: any) => {
            event.preventDefault();

            alert(JSON.stringify(transcript(props.income), null, 2));
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
