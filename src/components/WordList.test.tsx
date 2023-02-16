import React from "react";
import { render, screen } from "@testing-library/react";
import WordList from "./WordList";
import { BrowserRouter } from "react-router-dom";

describe("Word list page", () => {
  test("Lists out all the words on the page", () => {
    const wordList = [
      {
        title: "Forest animals",
        words: [
          { word: "Aardvark" },
          { word: "Badger", url: "https://badgers.com" },
        ],
      },
      {
        title: "Dessert animals",
        words: [{ word: "Camel" }],
      },
    ];

    render(
      <BrowserRouter>
        <WordList wordList={wordList} />
      </BrowserRouter>
    );

    screen.getByText("Aardvark");
    const badger = screen.getByText("Badger");
    expect(badger).toHaveAttribute("href", "https://badgers.com");
    screen.getByText("Camel");
  });
});
