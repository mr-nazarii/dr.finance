import React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";
// import FormControlLabel from "@mui/material/FormControlLabel";
import { Delete } from "@mui/icons-material";
import GS from "../../../styles/styles";

export const TableHeaderRow = (props: any) => {
  return (
    <>
      <TableHead>
        <TableRow>
          <TableCell
            colSpan={7}
            style={{ borderBottom: "none", paddingBottom: "0" }}
          >
            <GS.SectionTitle
              bgColor={props.type === "income" ? "green" : "red"}
              bottom={"0"}
            >
              {props.type === "income" ? "income" : "expenses"}
            </GS.SectionTitle>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell
            style={{ borderBottom: "1px solid black" }}
            padding="checkbox"
          >
            <GS.SectionTitle bottom={"0"}>№</GS.SectionTitle>
          </TableCell>
          <TableCell
            style={{ borderBottom: "1px solid black" }}
            padding="checkbox"
          >
            <GS.SectionTitle bottom={"0"}>Date</GS.SectionTitle>
          </TableCell>
          <TableCell style={{ borderBottom: "1px solid black" }}>
            <GS.SectionTitle bottom={"0"}>Type</GS.SectionTitle>
          </TableCell>
          <TableCell align="left" style={{ borderBottom: "1px solid black" }}>
            <GS.SectionTitle bottom={"0"}>Amount</GS.SectionTitle>
          </TableCell>
          <TableCell
            align="left"
            padding="checkbox"
            style={{ borderBottom: "1px solid black" }}
          >
            <GS.SectionTitle bottom={"0"}>Edit</GS.SectionTitle>
          </TableCell>
          <TableCell
            align="left"
            padding="checkbox"
            style={{ borderBottom: "1px solid black" }}
          >
            <GS.SectionTitle bottom={"0"}>Delete</GS.SectionTitle>
          </TableCell>
        </TableRow>
      </TableHead>
    </>
  );
};
