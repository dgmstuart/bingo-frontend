import { render, screen } from "@testing-library/react";
import WordList from "./WordList";

describe("Word list page", () => {
  test("Lists out all the words on the page", () => {
    const wordList = [
      {
        title: "Forest animals",
        description: "Animals that live where there are trees",
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

    render(<WordList wordList={wordList} />);

    screen.getByText("Animals that live where there are trees");

    const aardvark = screen.getByText(/Aardvark/);
    expect(aardvark.parentElement).toHaveTextContent("Aardvark - eats ants");

    const badger = screen.getByText("Badger");
    expect(badger).toHaveAttribute("href", "https://badgers.com");

    const camel = screen.getByText(/Camel/);
    expect(camel).toHaveAttribute("href", "https://camels.com");
    expect(camel.parentElement).toHaveTextContent("Camel - grumpy");

    screen.getByText("Desert Fox");
  });
});
