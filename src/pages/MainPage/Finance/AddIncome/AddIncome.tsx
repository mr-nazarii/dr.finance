import { Savings, AttachMoney, Paid } from "@mui/icons-material";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { colorVariables } from "../../../../styles/colors";
import { FormAmount, FormSelect } from "../../../../styles/muiStyles";

const AddIncome = (props: any) => {
  return (
    <>
      <InputLabel
        id="demo-simple-select-label"
        style={{ color: `${colorVariables.buttonRegisterColor}` }}
      >
        Type
      </InputLabel>
      <FormSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.select}
        label="Type"
        onChange={props.handleChange}
        style={{ marginBottom: "15px" }}
        defaultValue="salary"
      >
        <MenuItem value={"salary"}>
          <Savings style={{ color: `${colorVariables.buttonRegisterColor}` }} />
          Salary
        </MenuItem>
        <MenuItem value={"deposit"}>
          <AttachMoney
            style={{ color: `${colorVariables.buttonRegisterColor}` }}
          />
          Deposit
        </MenuItem>
        <MenuItem value={"savings"}>
          <Paid style={{ color: `${colorVariables.buttonRegisterColor}` }} />
          Savings
        </MenuItem>
      </FormSelect>

      <FormAmount
        style={{ marginBottom: "15px" }}
        id="outlined-number"
        label="Amount"
        type="number"
        value={props.num}
        onChange={props.handleAmountChange}
      />
    </>
  );
};

export default AddIncome;
