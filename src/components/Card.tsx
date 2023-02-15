import React from "react";
import useSession from "../hooks/useSession";
import "./Card.css";
import ActionButton from "./ActionButton";
import Grid from "./Grid";
import { newWords } from "../lib/words";
import emojiGrid from "../lib/emojiGrid";
import type { CellData, CellClickHandler, CellProps } from "./Cell";
import type { ClickHandler } from "../clickHandler";

export type ButtonClickHandler = ClickHandler<HTMLButtonElement>;

const Card: React.FC = () => {
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
    window.navigator.clipboard.writeText(emojiGrid(cellDataList));
  };

  return (
    <div className="Card">
      <header className="Card-header">
        <h1>Team Lindy Bingo</h1>
        <div className="Card-actions">
          <ActionButton
            text="New card"
            onClick={setNewWords}
            activeDuration={100}
          />
          <ActionButton
            text="Clear"
            onClick={clearAllCells}
            activeDuration={100}
          />
          <ActionButton
            text="Share"
            changeText="Copied"
            onClick={copyBoardToClipboard}
            activeDuration={1500}
          />
        </div>
      </header>

      <Grid cellPropsList={cellPropsList} />
    </div>
  );
};

export default Card;
