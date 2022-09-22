import React from "react";
import {
  Train,
  LocalTaxi,
  SportsHandball,
  Pets,
  House,
  LocalHospital,
  Redeem,
  Fastfood,
  SportsEsports,
  Dining,
  Call,
  Checkroom,
  DirectionsCar,
  MoneyOff,
} from "@mui/icons-material";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { FormAmountTemp, FormSelectTemp } from "../../../../styles/muiStyles";

export const AddExpense = (props: any) => {
  return (
    <>
      {" "}
      <InputLabel id="demo-simple-select-label" color="secondary">
        Type
      </InputLabel>
      <FormSelectTemp
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.select}
        label="Type"
        onChange={props.handleChange}
        color="secondary"
        style={{ marginBottom: "15px" }}
        defaultValue="bills"
      >
        <MenuItem value={"bills"}>
          <MoneyOff style={{ color: "red" }} />
          Bills
        </MenuItem>
        <MenuItem value={"car"}>
          <DirectionsCar style={{ color: "red" }} />
          Car
        </MenuItem>
        <MenuItem value={"clothes"}>
          <Checkroom style={{ color: "red" }} />
          Clothes
        </MenuItem>
        <MenuItem value={"comunication"}>
          <Call style={{ color: "red" }} />
          Comunication
        </MenuItem>
        <MenuItem value={"eatingPlace"}>
          <Dining style={{ color: "red" }} />
          Eating place
        </MenuItem>
        <MenuItem value={"entertainment"}>
          <SportsEsports style={{ color: "red" }} />
          Entertainment
        </MenuItem>
        <MenuItem value={"food"}>
          <Fastfood style={{ color: "red" }} />
          Food
        </MenuItem>
        <MenuItem value={"gifts"}>
          <Redeem style={{ color: "red" }} />
          Gifts
        </MenuItem>
        <MenuItem value={"health"}>
          <LocalHospital style={{ color: "red" }} />
          Health
        </MenuItem>
        <MenuItem value={"house"}>
          <House style={{ color: "red" }} />
          House
        </MenuItem>
        <MenuItem value={"pets"}>
          <Pets style={{ color: "red" }} />
          Pets
        </MenuItem>
        <MenuItem value={"sports"}>
          <SportsHandball style={{ color: "red" }} />
          Sports
        </MenuItem>

        <MenuItem value={"Taxi"}>
          <LocalTaxi style={{ color: "red" }} />
          taxi
        </MenuItem>
        <MenuItem value={"transport"}>
          <Train style={{ color: "red" }} />
          transport
        </MenuItem>
      </FormSelectTemp>
      <FormAmountTemp
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
