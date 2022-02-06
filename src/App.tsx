import React from 'react';
import './App.css';
import wordList from './wordList.json'

function App() {
  var words: string[] = wordList.slice(0, 25)

  const Words: React.FC<{ words: string[] }> = ({ words }) => {
    return(
      <table className="Words">
        <Row words={words.slice(0,5)}/>
        <Row words={words.slice(5,10)}/>
        <Row words={words.slice(10,15)}/>
        <Row words={words.slice(15,20)}/>
        <Row words={words.slice(20,25)}/>
      </table>
    )
  }

  const Row: React.FC<{ words: string[] }> = ({ words }) => {
    return(
      <tr className="Row">
        {
          words.map((word, index)=>
            <Cell key={index} word={word}/>
          )
        }
      </tr>
    )
  }

  const Cell: React.FC<{ word: string }> = ({ word }) => {
    return(<td className="Cell">{word}</td>)
  }

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
