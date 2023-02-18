import React from "react";
import useSession from "../hooks/useSession";
import CardActions from "./CardActions";
import Grid from "./Grid";
import MainLayout from "../layouts/MainLayout";
import emojiGrid from "../lib/emojiGrid";
import shuffle from "../lib/shuffle";
import type { CellData, CellClickHandler, CellProps } from "./Cell";
import type { ClickHandler } from "../clickHandler";

export type ButtonClickHandler = ClickHandler<HTMLButtonElement>;

const Card: React.FC<{ wordList: string[] }> = ({ wordList }) => {
  const newWords = (): string[] => shuffle(wordList).slice(0, 25);

  const newCellDataList = function (): CellData[] {
    return newWords().map((word) => {
      return { word: word, stamped: false };
    });
  };

  const [cellDataList, setCellDataList] =
    useSession<CellData[]>(newCellDataList);

  const setStamped = (index: number, stamped: boolean): void => {
    setCellDataList(
      cellDataList.map((cellData, cellDataIndex) => {
        if (index === cellDataIndex) {
          return { ...cellData, stamped: stamped };
        } else {
          return cellData;
        }
      })
    );
  };

  const toggleStampedForIndex = function (
    index: number,
    stamped: boolean
  ): CellClickHandler {
    return () => {
      setStamped(index, !stamped);
    };
  };

  const cellPropsList: CellProps[] = cellDataList.map((cellData, index) => ({
    ...cellData,
    toggleStamped: toggleStampedForIndex(index, cellData.stamped),
  }));

  const setNewWords: ButtonClickHandler = () => {
    setCellDataList(newCellDataList());
  };

  const clearAllCells: ButtonClickHandler = () => {
    setCellDataList(
      cellDataList.map((cellData) => ({ ...cellData, stamped: false }))
    );
  };

  const copyBoardToClipboard: ButtonClickHandler = () => {
    const message = emojiGrid(cellDataList);

    window.navigator.clipboard.writeText(message);

    if (window.navigator.share) {
      window.navigator.share({
        title: "Team Lindy Bingo",
        text: message,
        url: "https://bit.ly/lindybingocard",
      });
    }
  };

  const headerContent = (
    <CardActions
      newClick={setNewWords}
      clearClick={clearAllCells}
      shareClick={copyBoardToClipboard}
    />
  );
  const body = <Grid cellPropsList={cellPropsList} />;

  return <MainLayout headerContent={headerContent} body={body} />;
};

export default Card;
