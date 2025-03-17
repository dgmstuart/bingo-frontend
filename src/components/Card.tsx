import React from "react";
import useCard from "../hooks/useCard";
import CardActions from "./CardActions";
import Grid from "./Grid";
import MainLayout from "../layouts/MainLayout";
import emojiGrid from "../lib/emojiGrid";
import share from "../lib/share";
import { formatWord } from "../lib/normaliseWord";
import type { CellProps, CellData } from "./Cell";
import type { ButtonClickHandler } from "../clickHandler";

const Card: React.FC<{
  id: string;
  name?: string;
  url: string;
  wordList: string[];
  randomise?: boolean;
  videoListUrl?: string;
}> = ({ id, name, url, wordList, randomise = true, videoListUrl }) => {
  const [cellDataList, toggleStamped, setNewWords, clearAllCells] = useCard(
    id,
    wordList,
    randomise,
  );

  const cellPropsList: CellProps[] = cellDataList.map((cellData, index) => ({
    ...cellData,
    toggleStamped: toggleStamped(index, cellData.stamped),
  }));

  const shareCard: ButtonClickHandler = () => {
    const wordBullets = remainingWords(cellDataList).map((word) => `- ${word}`);
    const message = [
      emojiGrid(cellDataList),
      "Remaining:",
      ...wordBullets,
    ].join("\n");
    share({
      title: `${name} Bingo`,
      text: message,
      url: url,
    });
  };

  const remainingWords = (cellDataList: CellData[]): string[] =>
    cellDataList
      .filter((cellData) => !cellData.stamped)
      .map((cellData) => cellData.word)
      .map(formatWord)
      .sort();

  const headerContent = (
    <CardActions
      newClick={setNewWords}
      clearClick={clearAllCells}
      shareClick={shareCard}
    />
  );
  const body = <Grid cellPropsList={cellPropsList} />;

  return (
    <MainLayout
      name={name}
      headerContent={headerContent}
      body={body}
      videoListUrl={videoListUrl}
    />
  );
};

export default Card;
