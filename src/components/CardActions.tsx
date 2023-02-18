import React from "react";
import "./CardActions.css";
import ActionButton from "./ActionButton";
import type { ButtonClickHandler } from "./Card";

const CardActions: React.FC<{
  newClick: ButtonClickHandler;
  clearClick: ButtonClickHandler;
  shareClick: ButtonClickHandler;
}> = ({ newClick, clearClick, shareClick }) => {
  return (
    <div className="CardActions">
      <ActionButton text="New card" onClick={newClick} activeDuration={100} />
      <ActionButton text="Clear" onClick={clearClick} activeDuration={100} />
      <ActionButton
        text="Share"
        changeText="Copied"
        onClick={shareClick}
        activeDuration={1500}
      />
    </div>
  );
};

export default CardActions;
