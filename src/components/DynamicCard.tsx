import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import flattenWordList from "../lib/flattenWordList";
import type { KeyedConfig } from "../loaders/configLoaders";

const DynamicCard: React.FC = () => {
  const { id, name, url, wordList, videoListUrl } =
    useLoaderData() as KeyedConfig;

  if (wordList.length > 0) {
    // Card saves the word list to the session, so don't render a card if the
    // word list hasn't loaded yet
    const words = flattenWordList(wordList);
    return (
      <Card
        wordList={words}
        name={name}
        url={url}
        id={id}
        videoListUrl={videoListUrl}
      />
    );
  }
};

export default DynamicCard;
