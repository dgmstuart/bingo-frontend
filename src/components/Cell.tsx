import React from "react";
import "./Cell.css";
import classNames from "classnames";
import { CellProps } from "../App";

const Cell: React.FC<CellProps> = ({ word, stamped, setStamped }) => {
  const toggleStamped = () => {
    setStamped(!stamped);
  };

  var classes = classNames("Cell", { stamped: stamped });

  return (
    <td role="gridcell" className={classes} onClick={toggleStamped}>
      {word}
    </td>
  );
};

export default Cell;
