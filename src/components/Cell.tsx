import React from "react";
import "./Cell.css";
import classNames from "classnames";
import normaliseWord from "../lib/normaliseWord";
import type { ClickHandler } from "../clickHandler";
import type { StyledWord } from "../data/config";

export type CellClickHandler = ClickHandler<HTMLTableDataCellElement>;
export type CellData = StyledWord & { stamped: boolean };
export type CellProps = CellData & { toggleStamped: CellClickHandler };

const Cell: React.FC<CellProps> = ({
  word,
  stamped,
  toggleStamped,
  cssClasses,
}) => {
  console.log(cssClasses);
  const classes = classNames("Cell", { stamped: stamped }, cssClasses);

  return (
    <td role="gridcell" className={classes} onClick={toggleStamped}>
      {normaliseWord(word)}
    </td>
  );
};

export default Cell;
