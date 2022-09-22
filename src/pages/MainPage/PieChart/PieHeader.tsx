import React from "react";
import { colorVariables } from "../../../styles/colors";
import GS from "../../../styles/styles";
import { ChevronRight, ChevronLeft } from "@mui/icons-material/";

export const PieHeader = (props: any) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <ChevronLeft
        style={{ color: "black" }}
        onClick={() => {
          if (props.page === 0) {
            props.setPage(2);
          } else if (props.page === 1) {
            props.setPage(0);
          } else if (props.page === 2) {
            props.setPage(1);
          }
        }}
        fontSize="large"
      />

      <GS.SectionTitle
        bgColor={colorVariables.black}
        color={colorVariables.white}
      >
        {props.page === 0
          ? "Expenses Chart"
          : props.page === 1
          ? "Income Chart"
          : "Total Chart"}
      </GS.SectionTitle>
      <ChevronRight
        style={{ color: "black" }}
        onClick={() => {
          if (props.page === 0) {
            props.setPage(1);
          } else if (props.page === 1) {
            props.setPage(2);
          } else if (props.page === 2) {
            props.setPage(0);
          }
        }}
        fontSize="large"
      />
    </div>
  );
};
