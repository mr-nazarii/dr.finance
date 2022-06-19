import { MenuItem, Select } from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { profileLogedToggle } from "../../store/reducers/profileSlice";

const SelectInput = (props: any) => {
  const currency = useAppSelector((state) => state.profile.currency);
  const dispatch = useAppDispatch();
  let num = 0;
  return (
    <Select
      name="currency"
      id=""
      onChange={(event: any) =>
        dispatch(profileLogedToggle(event.target.value))
      }
      defaultValue={"USD"}
      label="Currency"
    >
      {props.currency
        ? props.currency.map((curr: any) => {
            if (curr === currency) {
              return (
                <MenuItem key={num++} value={curr} defaultChecked>
                  {curr}
                </MenuItem>
              );
            }
            num++;
            return (
              <MenuItem key={num++} value={curr}>
                {curr}
              </MenuItem>
            );
          })
        : null}
    </Select>
  );
};

export default SelectInput;
