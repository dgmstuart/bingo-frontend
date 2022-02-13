import React from "react";
import { render, screen } from "@testing-library/react";
import Grid from "./Grid";

const toggleStamped = function () {};
const cellPropsList = [
  { word: "Aardvark", stamped: false, toggleStamped: toggleStamped },
  { word: "Albatross", stamped: false, toggleStamped: toggleStamped },
  { word: "Alligator", stamped: false, toggleStamped: toggleStamped },
  { word: "Alpaca", stamped: false, toggleStamped: toggleStamped },
  { word: "Anole", stamped: false, toggleStamped: toggleStamped },
  { word: "Ant", stamped: false, toggleStamped: toggleStamped },
  { word: "Anteater", stamped: false, toggleStamped: toggleStamped },
  { word: "Antelope", stamped: false, toggleStamped: toggleStamped },
  { word: "Ape", stamped: false, toggleStamped: toggleStamped },
  { word: "Armadillo", stamped: false, toggleStamped: toggleStamped },
  { word: "Ass", stamped: false, toggleStamped: toggleStamped },
  { word: "Baboon", stamped: false, toggleStamped: toggleStamped },
  { word: "Badger", stamped: false, toggleStamped: toggleStamped },
  { word: "Barracuda", stamped: false, toggleStamped: toggleStamped },
  { word: "Bat", stamped: false, toggleStamped: toggleStamped },
  { word: "Bear", stamped: false, toggleStamped: toggleStamped },
  { word: "Beaver", stamped: false, toggleStamped: toggleStamped },
  { word: "Bee", stamped: false, toggleStamped: toggleStamped },
  { word: "Binturong", stamped: false, toggleStamped: toggleStamped },
  { word: "Bird", stamped: false, toggleStamped: toggleStamped },
  { word: "Bison", stamped: false, toggleStamped: toggleStamped },
  { word: "Bluebird", stamped: false, toggleStamped: toggleStamped },
  { word: "Boar", stamped: false, toggleStamped: toggleStamped },
  { word: "Bobcat", stamped: false, toggleStamped: toggleStamped },
  { word: "Budgie", stamped: false, toggleStamped: toggleStamped },
];

test("displays the words in a grid", () => {
  render(<Grid cellPropsList={cellPropsList} />);

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
