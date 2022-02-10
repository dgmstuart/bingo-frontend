import React, { useState } from 'react';
import './App.css';
import wordList from './wordList.json'
import Session from './lib/Session'
import shuffle from './lib/shuffle'
import Grid from './components/Grid'

type WordList = string[]
export type CellData = { word: string, stamped: boolean }
export type CellProps = { word: string, stamped: boolean, setStamped: (stamped: boolean) => void }

function App() {
  const session = new Session()

  const newWords = function(): WordList {
    return shuffle(wordList).slice(0, 25);
  }

  const newCellDataList = function(): CellData[] {
    return newWords().map(word => { return { word: word, stamped: false }})
  }

  const initCellDataList = function(): CellData[] {
    const list = newCellDataList()
    session.setCellDataList(list)

    return list
  }

  const [cellDataList, setCellDataList] = useState<CellData[]>(session.cellDataList || initCellDataList())

  const setAndSaveCellDataList = function(list: CellData[]): void {
    session.setCellDataList(list)
    setCellDataList(list)
  }

  const setStamped = function(index: number, stamped: boolean): void {
    setAndSaveCellDataList(
      cellDataList.map((cellData, cellDataIndex) => {
        if (index === cellDataIndex) {
          return { ...cellData, stamped: stamped }
        } else {
          return cellData
        }
      })
    )
  }

  const setStampedForIndex = function(index: number): (stamped: boolean) => void {
    return function(stamped: boolean) {
      setStamped(index, stamped)
    }
  }

  const cellPropsList: CellProps[] = cellDataList.map((cellData, index) => { return { ...cellData, setStamped: setStampedForIndex(index) } })

  const setNewWords = function(): void {
    setAndSaveCellDataList(newCellDataList())
  }

  const clearAllCells = function(): void {
    setAndSaveCellDataList(
      cellDataList.map((cellData) => {
        return { ...cellData, stamped: false }
      })
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Lindy Bingo</h1>
        <div className="App-actions">
          <button onClick={setNewWords}>New card</button>
          <button onClick={clearAllCells}>Clear</button>
        </div>
      </header>

      <Grid cellPropsList={cellPropsList}/>
    </div>
  );
}

export default App;
