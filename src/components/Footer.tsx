import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="Footer">
      <ul>
        <li>
          <Link to="/word_list">Full word list</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
