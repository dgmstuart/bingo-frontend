import React from "react";
import { useLoaderData } from "react-router-dom";
import WordList from "./WordList";
import type { Config } from "../data/config";

const DynamicWordList: React.FC = () => {
  const { wordList } = useLoaderData() as Config;

  if (wordList.length > 0) {
    return <WordList wordList={wordList} />;
  }
};

export default DynamicWordList;
