import React, { useState } from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import GS from "../../../styles/styles";
// import FormControlLabel from "@mui/material/FormControlLabel";
import { Edit, Delete } from "@mui/icons-material";
import { colorVariables } from "../../../styles/colors";
import { TableFooter, TablePagination } from "@mui/material";
import { TablePaginationActions } from "./TablePaginationActions";

export const TableBodyRow = (props: any) => {
  let num = 1;

  const getDate = (date: any) => {
    const data = new Date(date);
    const string = `${data.getDate()}/${data.getMonth()}/${data.getFullYear()}  ${data.getHours()}:${data.getMinutes()}`;
    return string;
  };

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows: any =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - props.items.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableBody>
        {props.items &&
          (rowsPerPage > 0
            ? props.items.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : props.items
          ).map((item: any) => (
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
                <Edit
                  onClick={() => {
                    props.setShow(!props.show);
                    props.setObj({
                      type: item.type,
                      amount: item.amount,
                      date: item.date,
                    });
                  }}
                />
              </TableCell>
              <TableCell align="right">
                <Delete onClick={() => props.handleChange(item, props.type)} />
              </TableCell>
            </TableRow>
          ))}
        {emptyRows > 0 && (
          <TableRow style={{ height: 53 * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )}
      </TableBody>

      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
            colSpan={3}
            count={props.items.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: {
                "aria-label": "rows per page",
              },
              native: true,
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          />
        </TableRow>
      </TableFooter>
    </>
  );
};
