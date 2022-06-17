import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

// import FormControlLabel from "@mui/material/FormControlLabel";

import { deleteExpense, deleteIncome } from "../../api/backendAPI";
import { useAppDispatch } from "../../hooks/hooks";
import {
  deleteExpenseFromState,
  deleteIncomeFromState,
} from "../../store/reducers/profileSlice";
import { TableBodyRow } from "./TableElements/TableBodyRow";
import { TableHeaderRow } from "./TableElements/TableHeaderRow";

export const TableInner = (props: any) => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("uToken");
  const [obj, setObj] = useState(null as any);
  const [toggle, setToggle] = useState(false as boolean);

  const deleteRecord = (element: any, type: any) => {
    if (type === "income") {
      deleteIncome(element);

      dispatch(
        deleteIncomeFromState(
          props.items.filter((el: any) => el.date !== +element.income.date)
        )
      );
    } else {
      deleteExpense(element);

      dispatch(
        deleteExpenseFromState(
          props.items.filter((el: any) => el.date !== +element.expenses.date)
        )
      );
    }
  };

  const handleChange = (element: any, type: any) => {
    let newObj;
    if (type === "income") {
      newObj = {
        id: token,
        income: props.items.filter(
          (item: any) => item.date === element.date
        )[0],
      };
      deleteRecord(newObj, type);
    } else {
      newObj = {
        id: token,
        expenses: props.items.filter(
          (item: any) => item.date === element.date
        )[0],
      };

      deleteRecord(newObj, type);
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
        <TableHeaderRow
          toggle={toggle}
          setToggle={setToggle}
          type={props.type}
          obj={obj}
        />

        <TableBodyRow
          handleChange={handleChange}
          items={props.items}
          type={props.type}
          toggle={toggle}
        />
      </Table>
    </TableContainer>
  );
};

export default TableInner;
