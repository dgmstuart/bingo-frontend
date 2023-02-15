import React from "react";
import "./Cell.css";
import classNames from "classnames";
import type { ClickHandler } from "../clickHandler";

export type CellClickHandler = ClickHandler<HTMLTableDataCellElement>;
export type CellData = { word: string; stamped: boolean };
export type CellProps = CellData & { toggleStamped: CellClickHandler };

const Cell: React.FC<CellProps> = ({ word, stamped, toggleStamped }) => {
  const classes = classNames("Cell", { stamped: stamped });

  const htmlSoftHyphen = "&shy;";
  const unicodeSoftHyphen = "\u00ad";
  const normalise = (string: string): string =>
    string.replace(new RegExp(htmlSoftHyphen, "g"), unicodeSoftHyphen);

  return (
    <td role="gridcell" className={classes} onClick={toggleStamped}>
      {normalise(word)}
    </td>
  );
};

export default Cell;
