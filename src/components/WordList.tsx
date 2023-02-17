import React from "react";
import "./WordList.css";
import normaliseWord from "../lib/normaliseWord";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const WordList: React.FC<{ wordList: string[] }> = ({ wordList }) => {
  return (
    <div className="WordList">
      <header className="WordList-header">
        <h1>Team Lindy Bingo</h1>
        <h2>Full word list</h2>
        <div className="WordList-actions">
          <Link to="/bingo-frontend">Back</Link>
        </div>
      </header>

      <ul className="WordList-words">
        {wordList.map((word) => (
          <li key={word}>{normaliseWord(word)}</li>
        ))}
      </ul>

      <Footer />
    </div>
  );
};

export default WordList;
