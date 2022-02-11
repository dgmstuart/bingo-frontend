import React from 'react';
import { render, screen } from '@testing-library/react';
import Grid from './Grid';


const setStamped = function(stamped: boolean) {}
const cellPropsList = [
  { word: "Aardvark", stamped: false, setStamped: setStamped },
  { word: "Albatross", stamped: false, setStamped: setStamped },
  { word: "Alligator", stamped: false, setStamped: setStamped },
  { word: "Alpaca", stamped: false, setStamped: setStamped },
  { word: "Anole", stamped: false, setStamped: setStamped },
  { word: "Ant", stamped: false, setStamped: setStamped },
  { word: "Anteater", stamped: false, setStamped: setStamped },
  { word: "Antelope", stamped: false, setStamped: setStamped },
  { word: "Ape", stamped: false, setStamped: setStamped },
  { word: "Armadillo", stamped: false, setStamped: setStamped },
  { word: "Ass", stamped: false, setStamped: setStamped },
  { word: "Baboon", stamped: false, setStamped: setStamped },
  { word: "Badger", stamped: false, setStamped: setStamped },
  { word: "Barracuda", stamped: false, setStamped: setStamped },
  { word: "Bat", stamped: false, setStamped: setStamped },
  { word: "Bear", stamped: false, setStamped: setStamped },
  { word: "Beaver", stamped: false, setStamped: setStamped },
  { word: "Bee", stamped: false, setStamped: setStamped },
  { word: "Binturong", stamped: false, setStamped: setStamped },
  { word: "Bird", stamped: false, setStamped: setStamped },
  { word: "Bison", stamped: false, setStamped: setStamped },
  { word: "Bluebird", stamped: false, setStamped: setStamped },
  { word: "Boar", stamped: false, setStamped: setStamped },
  { word: "Bobcat", stamped: false, setStamped: setStamped },
  { word: "Budgie", stamped: false, setStamped: setStamped },
]

test('displays the words in a grid', () => {
  render(<Grid cellPropsList={cellPropsList}/>);

  var rows = screen.queryAllByRole("row");
  var row1 = rows[0];
  expect(row1).toHaveTextContent("Aardvark");
  expect(row1).toHaveTextContent("Albatross");
  expect(row1).toHaveTextContent("Alligator");
  expect(row1).toHaveTextContent("Alpaca");
  expect(row1).toHaveTextContent("Anole");
  var row2 = rows[1];
  expect(row2).toHaveTextContent("Ant");
  expect(row2).toHaveTextContent("Anteater");
  expect(row2).toHaveTextContent("Antelope");
  expect(row2).toHaveTextContent("Ape");
  expect(row2).toHaveTextContent("Armadillo");
  var row3 = rows[2];
  expect(row3).toHaveTextContent("Ass");
  expect(row3).toHaveTextContent("Baboon");
  expect(row3).toHaveTextContent("Badger");
  expect(row3).toHaveTextContent("Barracuda");
  expect(row3).toHaveTextContent("Bat");
  var row4 = rows[3];
  expect(row4).toHaveTextContent("Bear");
  expect(row4).toHaveTextContent("Beaver");
  expect(row4).toHaveTextContent("Bee");
  expect(row4).toHaveTextContent("Binturong");
  expect(row4).toHaveTextContent("Bird");
  var row5 = rows[4];
  expect(row5).toHaveTextContent("Bison");
  expect(row5).toHaveTextContent("Bluebird");
  expect(row5).toHaveTextContent("Boar");
  expect(row5).toHaveTextContent("Bobcat");
  expect(row5).toHaveTextContent("Budgie");
});
