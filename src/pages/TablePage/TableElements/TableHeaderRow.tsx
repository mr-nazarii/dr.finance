import React from "react";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import FormControlLabel from "@mui/material/FormControlLabel";
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
            <GS.TableHeader>№</GS.TableHeader>
          </TableCell>
          <TableCell
            style={{ borderBottom: "1px solid black" }}
            padding="checkbox"
          >
            <GS.TableHeader>Date</GS.TableHeader>
          </TableCell>
          <TableCell style={{ borderBottom: "1px solid black" }}>
            <GS.TableHeader>Type</GS.TableHeader>
          </TableCell>
          <TableCell align="left" style={{ borderBottom: "1px solid black" }}>
            <GS.TableHeader>Amount</GS.TableHeader>
          </TableCell>
          <TableCell
            align="left"
            padding="checkbox"
            style={{ borderBottom: "1px solid black" }}
          >
            <GS.TableHeader>Edit</GS.TableHeader>
          </TableCell>
          <TableCell
            align="left"
            padding="checkbox"
            style={{ borderBottom: "1px solid black" }}
          >
            <GS.TableHeader>Delete</GS.TableHeader>
          </TableCell>
        </TableRow>
      </TableHead>
    </>
  );
};
