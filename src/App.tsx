import React from 'react';
import './App.css';
import wordList from './wordList.json'

function App() {
  var words: string[] = wordList.slice(0, 25)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Lindy Bingo</h1>
      </header>

      {words.map((word, index)=><p key={index}>{word}</p>)}
    </div>
  );
}

export default App;
