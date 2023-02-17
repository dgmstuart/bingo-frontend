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
          { word: "Aardvark", description: "eats ants" },
          { word: "Badger", url: "https://badgers.com" },
        ],
      },
      {
        title: "Desert animals",
        words: [
          { word: "Camel", description: "grumpy", url: "https://camels.com" },
          { word: "Desert Fox" },
        ],
      },
    ];

    render(
      <BrowserRouter>
        <WordList wordList={wordList} />
      </BrowserRouter>
    );

    const aardvark = screen.getByText(/Aardvark/);
    expect(aardvark.parentElement).toHaveTextContent("Aardvark - eats ants"); // eslint-disable-line testing-library/no-node-access

    const badger = screen.getByText("Badger");
    expect(badger).toHaveAttribute("href", "https://badgers.com");

    const camel = screen.getByText(/Camel/);
    expect(camel).toHaveAttribute("href", "https://camels.com");
    expect(camel.parentElement).toHaveTextContent("Camel - grumpy"); // eslint-disable-line testing-library/no-node-access

    screen.getByText("Desert Fox");
  });
});
