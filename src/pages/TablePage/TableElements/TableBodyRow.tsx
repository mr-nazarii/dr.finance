import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import GS from "../../../styles/styles";
import Checkbox from "@mui/material/Checkbox";
// import FormControlLabel from "@mui/material/FormControlLabel";
import { Edit, Delete } from "@mui/icons-material";
import { colorVariables } from "../../../styles/colors";

export const TableBodyRow = (props: any) => {
  let num = 1;

  const getDate = (date: any) => {
    const data = new Date(date);
    const string = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}  ${data.getHours()}:${data.getMinutes()}`;
    return string;
  };

  return (
    <>
      <TableBody>
        {props.items
          ? props.items.map((item: any) => (
              <TableRow
                key={item.date}
                id={item.date}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:nth-of-type(even)": { backgroundColor: "gainsboro" },
                }}
              >
                <TableCell align="center" component="th" scope="row">
                  {num++}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  <GS.SectionTitle
                    bgColor={colorVariables.black}
                    color={colorVariables.white}
                    bottom="0"
                    fSize="16px"
                  >
                    {getDate(item.date)}
                  </GS.SectionTitle>
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {item.type}
                </TableCell>

                {props.type === "income" ? (
                  <TableCell
                    style={{ color: "green", fontWeight: "bold" }}
                    align="center"
                  >
                    + ${item.amount}
                  </TableCell>
                ) : (
                  <TableCell
                    style={{ color: "red", fontWeight: "bold" }}
                    align="center"
                  >
                    - ${item.amount}
                  </TableCell>
                )}

                <TableCell align="right">
                  <Edit />
                </TableCell>
                <TableCell align="right">
                  <Delete
                    onClick={() => props.handleChange(item, props.type)}
                  />
                </TableCell>
              </TableRow>
            ))
          : null}
      </TableBody>
    </>
  );
};
