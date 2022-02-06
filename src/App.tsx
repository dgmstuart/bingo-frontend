import React from 'react';
import './App.css';

function App() {
  var wordList: string[] = [
    "Wedge formation", "Circle formation", "A jam circle", "Square formation or Diamond formation", "A single line facing the audience",
    "The Pancake (aerial)", "Leapfrog ('Hoppa bock')", "The Snatch (aerial)", "The Lindy flip/ Lamppost/ Around the back (aerial)", "An aerial involving more than two people", "Fly toss/ Popover/ Coochie toss (aerial)", "Waterfall (aerial)", "Knickerbocker/ Baby flip (aerial)", "Kaye flip (Aerial)", "An aerial involving a cartwheel",
    "Mixed-nationality team", "All-Swedish Team", "A Lithuanian not in Lithuania", "An Swede not in Sweden", "Somebody you have personally taken class from",
    "16 or more people on stage", "An odd number of people on stage",
    "Shorty George", "Shimmy", "Itches", "Pecking",
    "The Chase", "A Minnie Dip", "Hacksaws", "Tandem Charleston/ Back Charleston", "Sailor Kicks", "Drags", "A really big kick",
    "Everyone jumps at the same time", "Everyone shouts at the same time", "Everyone freezes in a pose (mid-routine)",
    "Swingouts in opposite directions", "3 swingouts and a Circle", "More than 4 swingouts in a row", "Changing partners", "A canon (Kanon)", "Slow motion", "Syncopated clapping",
    "Somebody is upside-down", "Somebody is on the floor", "Somebody’s hand touches the ground", "Standing on shoulders", "Sitting on shoulders",
    "A leader in white trainers", "Braces (suspenders)", "A hat", "Brightly coloured trousers", "Brightly coloured safety shorts", "A metallic item of clothing", "Everyone is wearing the same colour (not black or white)",
    "Mime or ”Acting”",
    "Mid-routine song change"
  ]

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
