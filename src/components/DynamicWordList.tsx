import React from "react";
import WordList from "./WordList";
import useWordListFromUrl from "../hooks/useWordListFromUrl";

const DynamicWordList: React.FC = () => {
  const wordList = useWordListFromUrl();

  if (wordList.length > 0) {
    return <WordList wordList={wordList} />;
  }
};

export default DynamicWordList;
