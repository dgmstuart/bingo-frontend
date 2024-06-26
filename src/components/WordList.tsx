import React, { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import "./WordList.css";
import normaliseWord from "../lib/normaliseWord";
import type { WordListGroupData } from "../data/config";

const WordList: React.FC<{ wordList: WordListGroupData[] }> = ({
  wordList,
}) => {
  const { t } = useTranslation();

  return (
    <article className="WordList">
      <h2 className="Content-header">{t("wordList.title")}</h2>
      {wordList.map((group) => WordListGroup(group))}
    </article>
  );
};

const WordListGroup: React.FC<WordListGroupData> = ({
  title,
  description,
  words,
}) => {
  return (
    <section className="WordListGroup" key={title}>
      <h3>{title}</h3>
      {description && (
        <p className="WordListGroup-description">{description}</p>
      )}
      <ul>
        {words.map(({ word, url, emoji, description }) => {
          const normalised = normaliseWord(word);
          return (
            <li key={normalised}>
              <DescribableWord
                Word={LinkableWord({ word: normalised, url: url })}
                emoji={emoji}
                description={description}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

const DescribableWord: React.FC<{
  Word: ReactNode;
  emoji?: string;
  description?: string;
}> = ({ Word, emoji, description }) => {
  return (
    <React.Fragment>
      {Word}
      {emoji && <> {emoji} </>}
      {description && (
        <>
          <> - </>
          <span className="WordList-description">{description}</span>
        </>
      )}
    </React.Fragment>
  );
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
