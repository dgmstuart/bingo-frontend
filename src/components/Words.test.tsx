import React from 'react';
import { render, screen } from '@testing-library/react';
import Words from './Words';

var words = [
  "Aardvark",
  "Albatross",
  "Alligator",
  "Alpaca",
  "Anole",
  "Ant",
  "Anteater",
  "Antelope",
  "Ape",
  "Armadillo",
  "Ass",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bee",
  "Binturong",
  "Bird",
  "Bison",
  "Bluebird",
  "Boar",
  "Bobcat",
  "Budgie",
]

test('displays the words in a grid', () => {
  render(<Words words={words}/>);

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
