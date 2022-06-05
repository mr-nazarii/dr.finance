import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import GS from "../../../styles/styles";
import { Send, Savings, AttachMoney, Paid } from "@mui/icons-material";
import { purple } from "@mui/material/colors";
const ModifyFinance = () => {
  const [select, setSelect] = useState();
  const [num, setNum] = useState(0);

  const handleChange = (event: any) => {
    setSelect(event.target.value as any);
  };

  const handleAmountChange = (event: any) => {
    setNum(event.target.value as any);
  };

  // recieve inputs data

  return (
    <>
      <GS.FinanceWrapper>
        <FormControl
          component="form"
          fullWidth
          onSubmit={(event: any) => {
            event.preventDefault();
            const obj = { type: select, amount: num };
            alert(JSON.stringify(obj));
          }}
        >
          <InputLabel id="demo-simple-select-label" color="secondary">
            Type
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={select}
            label="Type"
            onChange={handleChange}
            color="secondary"
            style={{ marginBottom: "15px" }}
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
            value={num}
            onChange={handleAmountChange}
            style={{ marginBottom: "15px" }}
          />

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
