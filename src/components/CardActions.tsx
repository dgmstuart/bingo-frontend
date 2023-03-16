import React from "react";
import "./CardActions.css";
import ActionButton from "./ActionButton";
import { Link } from "react-router-dom";
import qrCodeIcon from "../images/qrCodeIcon.svg";
import type { ButtonClickHandler } from "../clickHandler";

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
      <Link className="QRCodeButton" to="/bingo-frontend/qr_code">
        <img src={qrCodeIcon} alt="QR code Icon" />
      </Link>
    </div>
  );
};

export default CardActions;
