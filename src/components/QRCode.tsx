import React from "react";
import QRCodeImage from "react-qr-code";
import "./QRCode.css";

const QRCode: React.FC = () => {
  return (
    <div className="QRCode">
      <QRCodeImage
        value="https://bit.ly/lindybingocard"
        size={500}
        className="QRCodeImage"
        bgColor="hsla(28, 41%, 95%, 0.7)"
        fgColor="hsla(232, 20%, 1%, 0.8)"
      />
    </div>
  );
};

export default QRCode;
