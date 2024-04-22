import React from "react";
import "../i18n";
import { useTranslation } from "react-i18next";
import "./CardActions.css";
import ActionButton from "./ActionButton";
import { Link } from "react-router-dom";
import type { ButtonClickHandler } from "../clickHandler";

const CardActions: React.FC<{
  newClick: ButtonClickHandler;
  clearClick: ButtonClickHandler;
  shareClick: ButtonClickHandler;
}> = ({ newClick, clearClick, shareClick }) => {
  const { t } = useTranslation();

  return (
    <div className="CardActions">
      <ActionButton
        text={t("cardActions.new")}
        onClick={newClick}
        activeDuration={100}
      />
      <ActionButton
        text={t("cardActions.clear")}
        onClick={clearClick}
        activeDuration={100}
      />
      <ActionButton
        text={t("cardActions.share")}
        changeText={t("cardActions.copied")}
        onClick={shareClick}
        activeDuration={1500}
      />
      <Link className="QRCodeButton" to="qr_code">
        <div className="QRCodeIcon" />
      </Link>
    </div>
  );
};

export default CardActions;
