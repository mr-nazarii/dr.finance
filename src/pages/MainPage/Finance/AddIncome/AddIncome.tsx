import { Savings, AttachMoney, Paid } from "@mui/icons-material";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";

const AddIncome = (props: any) => {
  return (
    <>
      <InputLabel id="demo-simple-select-label" color="secondary">
        Type
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.select}
        label="Type"
        onChange={props.handleChange}
        color="secondary"
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
      </Select>

      <TextField
        color="secondary"
        id="outlined-number"
        label="Amount"
        type="number"
        value={props.num}
        onChange={props.handleAmountChange}
        style={{ marginBottom: "15px" }}
      />
    </>
  );
};

export default AddIncome;
