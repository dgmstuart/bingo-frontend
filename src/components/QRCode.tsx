import React from "react";
import { useLoaderData } from "react-router-dom";
import QRCodeImage from "react-qr-code";
import "./QRCode.css";
import type { Config } from "../data/config";

const QRCode: React.FC = () => {
  const { url } = useLoaderData() as Config;

  return (
    <div className="QRCode">
      <QRCodeImage
        value={url}
        size={500}
        className="QRCodeImage"
        bgColor="hsla(28, 41%, 95%, 0.7)"
        fgColor="hsla(232, 20%, 1%, 0.8)"
      />
    </div>
  );
};

export default QRCode;
