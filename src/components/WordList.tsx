import React, { ReactNode } from "react";
import "./WordList.css";
import normaliseWord from "../lib/normaliseWord";
import { Link } from "react-router-dom";
import Footer from "./Footer";

type WordData = { word: string; url?: string; description?: string };
export type WordListGroupData = { title: string; words: WordData[] };

const WordList: React.FC<{ wordList: WordListGroupData[] }> = ({
  wordList,
}) => {
  return (
    <div className="WordList">
      <header className="WordList-header">
        <h1>Team Lindy Bingo</h1>
        <h2>Full word list</h2>
        <div className="WordList-actions">
          <Link to="/bingo-frontend">Back</Link>
        </div>
      </header>

      {wordList.map((group) => WordListGroup(group))}

      <Footer />
    </div>
  );
};

const WordListGroup: React.FC<WordListGroupData> = ({ title, words }) => {
  return (
    <section className="WordList-words" key={title}>
      <h3>{title}</h3>
      <ul>
        {words.map(({ word, url, description }) => {
          const normalised = normaliseWord(word);
          return (
            <li key={normalised}>
              <DescribableWord
                Word={LinkableWord({ word: normalised, url: url })}
                description={description}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const DescribableWord: React.FC<{ Word: ReactNode; description?: string }> = ({
  Word,
  description,
}) => {
  if (description) {
    return (
      <React.Fragment>
        {Word} - <span className="WordList-description">{description}</span>
      </React.Fragment>
    );
  } else {
    return <React.Fragment>{Word}</React.Fragment>;
  }
};

const LinkableWord: React.FC<{ word: string; url?: string }> = ({
  word,
  url,
}) => {
  if (url) {
    return (
      <a href={url} className="external">
        {word}
      </a>
    );
  } else {
    return <React.Fragment>{word}</React.Fragment>;
  }
};

export default WordList;
