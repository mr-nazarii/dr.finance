import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import GS from "../../styles/styles";
import Checkbox from "@mui/material/Checkbox";
// import FormControlLabel from "@mui/material/FormControlLabel";
import { Delete, Edit } from "@mui/icons-material";
import { colorVariables } from "../../styles/colors";
import { deleteExpense } from "../../api/backendAPI";
import { useAppDispatch } from "../../hooks/hooks";
import { deleteExpenseFromState } from "../../store/reducers/profileSlice";

export const TableInner = (props: any) => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("uToken");
  const [obj, setObj] = useState(null as any);
  let num = 1;

  const getDate = (date: any) => {
    const data = new Date(date);
    const string = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}  ${data.getHours()}:${data.getMinutes()}`;
    return string;
  };

  const deleteRecord = (element: any) => {
    deleteExpense(element);
    dispatch(
      deleteExpenseFromState(
        props.items.filter((el: any) => el.date !== +element.expenses.date)
      )
      // also delete decrement the amount after deleting
    );
  };

  const handleChange = (event: any, element: any) => {
    let newObj = {
      id: token,
      expenses: props.items.filter(
        (item: any) => item.date === element.date
      )[0],
    };

    if (event.target.checked) {
      setObj(newObj);
    }
  };

  return (
    <TableContainer
      component={Paper}
      style={{ width: "80%", borderRadius: "10px", zIndex: 1 }}
    >
      <Table
        sx={{
          minWidth: 220,
          borderCollapse: "separate",
          borderSpacing: "0px 4px",
          textTransform: "capitalize",
        }}
        stickyHeader
        aria-label="sticky table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              colSpan={6}
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
              <Checkbox />
            </TableCell>
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
              align="right"
              style={{ borderBottom: "1px solid black" }}
            >
              <Delete onClick={() => deleteRecord(obj)} />
            </TableCell>
          </TableRow>
        </TableHead>
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
                    <Checkbox onChange={(e) => handleChange(e, item)} />
                  </TableCell>
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
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableInner;
