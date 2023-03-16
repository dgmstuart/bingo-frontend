import React from "react";
import qrCode from "../images/qrCode.png";
import "./QRCode.css";

const QRCode: React.FC = () => {
  return (
    <img
      src={qrCode}
      className="QRCode"
      alt="QR code for Team Lindy Bingo card"
    />
  );
};

export default QRCode;
