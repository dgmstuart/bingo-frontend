import React from 'react';
import './App.css';
import wordList from './wordList.json'
import shuffle from './lib/shuffle'
import Words from './components/Words'

function App() {
  var words: string[] = shuffle(wordList).slice(0, 25)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Lindy Bingo</h1>
      </header>

      <Words words={words}/>
    </div>
  );
}

export default App;
