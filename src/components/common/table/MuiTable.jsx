import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const MuiTable = ({ data, columns, type }) => {
  const calculateTotal = (price, amount) => price * amount;

  const formatTime = (time) => {
    const date = new Date(time);
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    const second = date.getSeconds().toString().padStart(2, "0");
    return `${hour}:${minute}:${second}`;
  };

  return (
    <TableContainer component={Paper} sx={{ height: "100%" }}>
      <Table stickyHeader sx={{ height: "100%" }}>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index} sx={{ padding: 0 }}>
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              <TableCell sx={{ padding: 0 }}>{row.price}</TableCell>
              <TableCell sx={{ padding: 0 }}>{row.amount}</TableCell>
              <TableCell sx={{ padding: 0 }}>
                {type === "total"
                  ? calculateTotal(row.price, row.amount)
                  : formatTime(row["time"])}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MuiTable;
