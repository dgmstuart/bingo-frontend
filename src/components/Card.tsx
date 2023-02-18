import React from "react";
import useCard from "../hooks/useCard";
import CardActions from "./CardActions";
import Grid from "./Grid";
import MainLayout from "../layouts/MainLayout";
import emojiGrid from "../lib/emojiGrid";
import share from "../lib/share";
import type { CellProps } from "./Cell";
import type { ButtonClickHandler } from "../clickHandler";

const Card: React.FC<{ wordList: string[] }> = ({ wordList }) => {
  const [cellDataList, toggleStamped, setNewWords, clearAllCells] =
    useCard(wordList);

  const cellPropsList: CellProps[] = cellDataList.map((cellData, index) => ({
    ...cellData,
    toggleStamped: toggleStamped(index, cellData.stamped),
  }));

  const shareCard: ButtonClickHandler = () => {
    const message = emojiGrid(cellDataList);
    share({
      title: "Team Lindy Bingo",
      text: message,
      url: "https://bit.ly/lindybingocard",
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

  return <MainLayout headerContent={headerContent} body={body} />;
};

export default Card;
