import React from "react";
import "../i18n";
import { useTranslation } from "react-i18next";
import "./Footer.css";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Footer: React.FC<{ className?: string }> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <footer className={classNames("Footer", className)}>
      <ul>
        <li>
          <Link to="word_list">{t("footer.wordList")}</Link>
        </li>
        <li>
          <a
            href="https://www.youtube.com/playlist?list=PLgsIo5h4KQoYzMCvcuBFTy7-qW8VgsFpT"
            className="external"
          >
            {t("footer.videoList")}
          </a>
        </li>
        <li>
          <a
            href="https://dgmstuart.github.io/blog/2022/02/18/building-a-bingo-app-in-react/"
            className="external"
          >
            {t("footer.about")}
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
