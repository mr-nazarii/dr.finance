import React from "react";
import { colorVariables } from "../../../styles/colors";
import GS from "../../../styles/styles";
import { ChevronRight, ChevronLeft } from "@mui/icons-material/";

export const PieHeader = (props: any) => {
  return (
    <div className="d-flex justify-content-center align-items-center gap-2">
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
        className="py-1 px-4 m-0"
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
