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
import AddIncome from "./AddIncome";

const ModifyFinance = (props: any) => {
  const [select, setSelect] = useState();
  const [num, setNum] = useState(0);

  const handleChange = (event: any) => {
    setSelect(event.target.value as any);
  };

  const handleAmountChange = (event: any) => {
    setNum(event.target.value as any);
  };

  // recieve inputs data
  // change style
  // maybe utilize formik for convinence (think through both forms (can the form with formik be dynamic as a template))
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

            const obj = { income: { type: select, amount: num } };
            alert(JSON.stringify(obj, null, 2));
          }}
        >
          {props.income ? (
            <AddIncome
              select={select}
              handleChange={handleChange}
              handleAmountChange={handleAmountChange}
              num={num}
            />
          ) : null}

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
