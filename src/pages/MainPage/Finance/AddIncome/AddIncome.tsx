import { Savings, AttachMoney, Paid } from "@mui/icons-material";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { FormAmount, FormSelect } from "../../../../styles/muiStyles";

const AddIncome = (props: any) => {
  return (
    <>
      <InputLabel id="demo-simple-select-label" style={{ color: "green" }}>
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
          <Savings style={{ color: "green" }} />
          Salary
        </MenuItem>
        <MenuItem value={"deposit"}>
          <AttachMoney style={{ color: "green" }} />
          Deposit
        </MenuItem>
        <MenuItem value={"savings"}>
          <Paid style={{ color: "green" }} />
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
