import React, { useState } from "react";
import "./App.css";
import ActionButton from "./components/ActionButton";
import Grid from "./components/Grid";
import GuaranteedJsonSession from "./lib/GuaranteedJsonSession";
import { newWords } from "./lib/words";
import emojiGrid from "./lib/emojiGrid";

export type CellData = { word: string; stamped: boolean };
export type CellProps = CellData & { toggleStamped: () => void };

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

  const setAndSaveCellDataList = function (list: CellData[]): void {
    session.sessionData = list;
    setCellDataList(list);
  };

  const setStamped = function (index: number, stamped: boolean): void {
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
  ): () => void {
    return function () {
      setStamped(index, !stamped);
    };
  };

  const cellPropsList: CellProps[] = cellDataList.map((cellData, index) => {
    return {
      ...cellData,
      toggleStamped: toggleStampedForIndex(index, cellData.stamped),
    };
  });

  const setNewWords = function (): void {
    setAndSaveCellDataList(newCellDataList());
  };

  const clearAllCells = function (): void {
    setAndSaveCellDataList(
      cellDataList.map((cellData) => {
        return { ...cellData, stamped: false };
      })
    );
  };

  const copyBoardToClipboard = function (): void {
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
