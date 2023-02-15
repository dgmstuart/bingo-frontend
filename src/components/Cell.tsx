import React from "react";
import "./Cell.css";
import classNames from "classnames";
import normaliseWord from "../lib/normaliseWord";
import type { ClickHandler } from "../clickHandler";

export type CellClickHandler = ClickHandler<HTMLTableDataCellElement>;
export type CellData = { word: string; stamped: boolean };
export type CellProps = CellData & { toggleStamped: CellClickHandler };

const Cell: React.FC<CellProps> = ({ word, stamped, toggleStamped }) => {
  const classes = classNames("Cell", { stamped: stamped });

  return (
    <td role="gridcell" className={classes} onClick={toggleStamped}>
      {normaliseWord(word)}
    </td>
  );
};

export default Cell;
