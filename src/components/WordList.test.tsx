import React from "react";
import { render, screen } from "@testing-library/react";
import WordList from "./WordList";
import { BrowserRouter } from "react-router-dom";

describe("Word list page", () => {
  test("Lists out all the words on the page", () => {
    const wordList = ["Aardvark", "Badger", "Camel"];
    render(
      <BrowserRouter>
        <WordList wordList={wordList} />
      </BrowserRouter>
    );
    screen.getByText("Aardvark");
    screen.getByText("Badger");
    screen.getByText("Camel");
  });
});
