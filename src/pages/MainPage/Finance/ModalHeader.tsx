import React from "react";
import GS from "../../../styles/styles";
import { Close } from "@mui/icons-material";
import { colorVariables } from "../../../styles/colors";

export const ModalHeader = (props: any) => {
  return (
    <div className="d-flex justify-content-center">
      <GS.SectionTitle
        color={`${colorVariables.white}`}
        bgColor={`${colorVariables.black}`}
        className="px-3"
      >
        {props.income ? "Income" : "Expense"}
      </GS.SectionTitle>
    </div>
  );
};
