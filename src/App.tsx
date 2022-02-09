import React, { useState } from 'react';
import './App.css';
import wordList from './wordList.json'
import Session from './lib/Session'
import shuffle from './lib/shuffle'
import Words from './components/Words'
import type { WordList } from './components/Words'

function App() {
  const session = new Session()

  const newWords = function(): WordList {
    const list = shuffle(wordList).slice(0, 25);
    session.setWords(list)

    return list
  }

  const [words, setWords] = useState<WordList>(session.words || newWords())

  const setNewWords = function(): void {
    setWords(newWords())
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Lindy Bingo</h1>
        <div className="App-actions">
          <button onClick={setNewWords}>New card</button>
        </div>
      </header>

      <Words words={words}/>
    </div>
  );
}

export default App;
