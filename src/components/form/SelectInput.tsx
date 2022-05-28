import React from "react";
import GS from "../../styles/styles";

const SelectInput = (props: any) => {
  let num = 0;
  return (
    <GS.SelectItem name="currency" id="">
      {props.currency
        ? props.currency.map((curr: any) => {
            if (curr === "USD") {
              return (
                <option key={num} value={curr} defaultChecked>
                  {curr}
                </option>
              );
            }
            num++;
            return (
              <option key={num} value={curr}>
                {curr}
              </option>
            );
          })
        : null}
    </GS.SelectItem>
  );
};

export default SelectInput;
