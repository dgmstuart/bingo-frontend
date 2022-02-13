import React, { useState } from "react";
import "./App.css";
import ActionButton from "./components/ActionButton";
import Grid from "./components/Grid";
import GuaranteedJsonSession from "./lib/GuaranteedJsonSession";
import { newWords } from "./lib/words";
import stripIndent from "strip-indent";

export type CellData = { word: string; stamped: boolean };

export type CellProps = CellData & { setStamped: (stamped: boolean) => void };

function App() {
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

  const setStampedForIndex = function (
    index: number
  ): (stamped: boolean) => void {
    return function (stamped: boolean) {
      setStamped(index, stamped);
    };
  };

  const cellPropsList: CellProps[] = cellDataList.map((cellData, index) => {
    return { ...cellData, setStamped: setStampedForIndex(index) };
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
    const emojiList = cellDataList.map((cellData) => {
      return cellData.stamped ? "🟦" : "⬜";
    });
    const emojiGrid = `
      ${emojiList.slice(0, 5).join("")}
      ${emojiList.slice(5, 10).join("")}
      ${emojiList.slice(10, 15).join("")}
      ${emojiList.slice(15, 20).join("")}
      ${emojiList.slice(20, 25).join("")}`;
    window.navigator.clipboard.writeText(stripIndent(emojiGrid).trim());
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
}

export default App;
