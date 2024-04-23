import React from "react";
import useCard from "../hooks/useCard";
import CardActions from "./CardActions";
import Grid from "./Grid";
import MainLayout from "../layouts/MainLayout";
import emojiGrid from "../lib/emojiGrid";
import share from "../lib/share";
import type { CellProps } from "./Cell";
import type { ButtonClickHandler } from "../clickHandler";

const Card: React.FC<{
  id: string;
  name?: string;
  url: string;
  wordList: string[];
  videoListUrl?: string;
}> = ({ id, name, url, wordList, videoListUrl }) => {
  const [cellDataList, toggleStamped, setNewWords, clearAllCells] = useCard(
    id,
    wordList,
  );

  const cellPropsList: CellProps[] = cellDataList.map((cellData, index) => ({
    ...cellData,
    toggleStamped: toggleStamped(index, cellData.stamped),
  }));

  const shareCard: ButtonClickHandler = () => {
    const message = emojiGrid(cellDataList);
    share({
      title: `${name} Bingo`,
      text: message,
      url: url,
    });
  };

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
