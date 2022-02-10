import React, { useState } from 'react';
import './App.css';
import wordList from './wordList.json'
import Session from './lib/Session'
import shuffle from './lib/shuffle'
import Words from './components/Words'

export type WordList = string[]
type CellData = { word: string, stamped: boolean }
export type CellProps = { word: string, stamped: boolean, setStamped: (stamped: boolean) => void }

function App() {
  const session = new Session()

  const newWords = function(): WordList {
    const list = shuffle(wordList).slice(0, 25);
    session.setWords(list)

    return list
  }

  const words: WordList = session.words || newWords()

  const newCellDataList = function(words: WordList): CellData[] {
    return words.map(word => { return { word: word, stamped: false }})
  }

  const [cellDataList, setCellDataList] = useState<CellData[]>(newCellDataList(words))

  const setStamped = function(index: number, stamped: boolean): void {
    setCellDataList(
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
    setCellDataList(newCellDataList(newWords()))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Lindy Bingo</h1>
        <div className="App-actions">
          <button onClick={setNewWords}>New card</button>
        </div>
      </header>

      <Words cellPropsList={cellPropsList}/>
    </div>
  );
}

export default App;
