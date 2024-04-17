import React from "react";
import Card from "./Card";
import useWordListFromUrl from "../hooks/useWordListFromUrl";
import flattenWordList from "../lib/flattenWordList";

const DynamicCard: React.FC = () => {
  const wordList = useWordListFromUrl();

  if (wordList.length > 0) {
    // Card saves the word list to the session, so don't render a card if the
    // word list hasn't loaded yet
    const words = flattenWordList(wordList);
    return <Card wordList={words} />;
  }
};

export default DynamicCard;
