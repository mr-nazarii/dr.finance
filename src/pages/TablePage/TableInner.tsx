import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import GS from "../../styles/styles";

export const TableInner = (props: any) => {
  let num = 1;
  return (
    <TableContainer
      component={Paper}
      style={{ width: "80%", borderRadius: "10px" }}
    >
      <Table
        sx={{
          minWidth: 220,
          borderCollapse: "separate",
          borderSpacing: "0px 4px",
          textTransform: "capitalize",
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              colSpan={3}
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
            <TableCell style={{ borderBottom: "1px solid black" }}>
              <GS.SectionTitle bottom={"0"}>Type</GS.SectionTitle>
            </TableCell>
            <TableCell align="left" style={{ borderBottom: "1px solid black" }}>
              <GS.SectionTitle bottom={"0"}>Amount</GS.SectionTitle>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.items.map((item: any) => (
            <TableRow
              key={item.type}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {num++}
              </TableCell>
              <TableCell align="center" component="th" scope="row">
                {item.type}
              </TableCell>
              <TableCell align="center">${item.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableInner;
