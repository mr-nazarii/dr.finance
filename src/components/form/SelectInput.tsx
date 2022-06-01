import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { profileLogedToggle } from "../../store/reducers/profileSlice";
import GS from "../../styles/styles";

const SelectInput = (props: any) => {
  const currency = useAppSelector((state) => state.profile.currency);
  const dispatch = useAppDispatch();
  let num = 0;
  return (
    <GS.SelectItem
      name="currency"
      id=""
      onChange={(e) => dispatch(profileLogedToggle(e.target.value))}
    >
      {props.currency
        ? props.currency.map((curr: any) => {
            if (curr === currency) {
              return (
                <option key={num++} value={curr} defaultChecked>
                  {curr}
                </option>
              );
            }
            num++;
            return (
              <option key={num++} value={curr}>
                {curr}
              </option>
            );
          })
        : null}
    </GS.SelectItem>
  );
};

export default SelectInput;
