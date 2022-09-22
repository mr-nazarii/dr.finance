import React from "react";
import GS from "../../../styles/styles";
import { Close } from "@mui/icons-material";

export const ModalHeader = (props: any) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        position: "relative",
      }}
    >
      <GS.SectionTitle>
        {props.income ? "Add income" : "Add Expense"}
      </GS.SectionTitle>

      <Close
        onClick={() => props.setShow(!props.show)}
        style={{
          color: "red",
          position: "absolute",
          right: "-10px",
          top: "-5px",
        }}
      />
    </div>
  );
};
