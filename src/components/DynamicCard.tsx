import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import flattenWordList from "../lib/flattenWordList";
import type { WordListData } from "../data/wordList";

const DynamicCard: React.FC = () => {
  const wordList = useLoaderData() as WordListData;

  if (wordList.length > 0) {
    // Card saves the word list to the session, so don't render a card if the
    // word list hasn't loaded yet
    const words = flattenWordList(wordList);
    return <Card wordList={words} />;
  }
};

export default DynamicCard;