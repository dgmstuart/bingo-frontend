import React, { useState } from "react";
import type { MouseEvent } from "react";
import "./App.css";
import ActionButton from "./components/ActionButton";
import Grid from "./components/Grid";
import GuaranteedJsonSession from "./lib/GuaranteedJsonSession";
import { newWords } from "./lib/words";
import emojiGrid from "./lib/emojiGrid";

type ClickHandler<T> = (event: MouseEvent<T>) => void;
type CellClickHandler = ClickHandler<HTMLTableDataCellElement>;
export type ButtonClickHandler = ClickHandler<HTMLButtonElement>;
export type CellData = { word: string; stamped: boolean };
export type CellProps = CellData & { toggleStamped: CellClickHandler };

const App = () => {
  const newCellDataList = function (): CellData[] {
    return newWords().map((word) => {
      return { word: word, stamped: false };
    });
  };

  const session = new GuaranteedJsonSession<CellData[]>(newCellDataList);
  const [cellDataList, setCellDataList] = useState<CellData[]>(
    session.sessionData
  );

  const setAndSaveCellDataList = (list: CellData[]): void => {
    session.sessionData = list;
    setCellDataList(list);
  };

  const setStamped = (index: number, stamped: boolean): void => {
    setAndSaveCellDataList(
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
    setAndSaveCellDataList(newCellDataList());
  };

  const clearAllCells: ButtonClickHandler = () => {
    setAndSaveCellDataList(
      cellDataList.map((cellData) => ({ ...cellData, stamped: false }))
    );
  };

  const copyBoardToClipboard: ButtonClickHandler = () => {
    window.navigator.clipboard.writeText(emojiGrid(cellDataList));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Lindy Bingo</h1>
        <div className="App-actions">
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

export default App;
