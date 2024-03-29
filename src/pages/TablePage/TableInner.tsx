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
import ModifyFinance from "../MainPage/Finance/ModifyFinance";
import { Modal } from "@mui/material";

export const TableInner = (props: any) => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem("uToken");
  const [show, setShow] = useState(false as boolean);
  const [obj, setObj] = useState({} as Object);

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

  const giveType = () => {
    if (props.type === "income") {
      return true;
    }
    return false;
  };

  const editType = () => {
    if (props.type === "income") {
      return "income";
    }
    return "expenses";
  };

  return (
    <>
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
          <TableHeaderRow type={props.type} />

          <TableBodyRow
            setShow={setShow}
            show={show}
            handleChange={handleChange}
            items={props.items}
            type={props.type}
            setObj={setObj}
          />
        </Table>
      </TableContainer>
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={show}
        onClose={() => setShow(false)}
      >
        <ModifyFinance
          income={giveType()}
          value={obj}
          setShow={setShow}
          show={show}
          edit={editType()}
        />
      </Modal>
    </>
  );
};

export default TableInner;
