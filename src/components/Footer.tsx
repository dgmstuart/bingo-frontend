import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import classNames from "classnames";

const Footer: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <footer className={classNames("Footer", className)}>
      <ul>
        <li>
          <Link to="word_list">Full word list</Link>
        </li>
        <li>
          <a
            href="https://www.youtube.com/playlist?list=PLgsIo5h4KQoYzMCvcuBFTy7-qW8VgsFpT"
            className="external"
          >
            Full video list
          </a>
        </li>
        <li>
          <a
            href="https://dgmstuart.github.io/blog/2022/02/18/building-a-bingo-app-in-react/"
            className="external"
          >
            About
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
