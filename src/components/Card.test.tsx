import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";
import { BrowserRouter } from "react-router-dom";
import stripIndent from "strip-indent";
import teamLindy from "../data/teamLindy.json";
import flattenWordList from "../lib/flattenWordList";

const wordList: string[] = flattenWordList(teamLindy.wordList);

describe("'New card' button", () => {
  test("changes the words on the card", () => {
    render(
      <BrowserRouter>
        <Card wordList={wordList} name={""} url={""} id={""} />
      </BrowserRouter>,
    );
    const initialCells = screen.queryAllByRole("gridcell");
    const firstWord = initialCells[0].textContent;
    const secondWord = initialCells[1].textContent;

    fireEvent.click(screen.getByText("New card"));

    const updatedCells = screen.queryAllByRole("gridcell");
    expect(updatedCells[0].textContent).not.toEqual(firstWord);
    expect(updatedCells[1].textContent).not.toEqual(secondWord);
  });

  test("clears any stamped cells", () => {
    render(
      <BrowserRouter>
        <Card wordList={wordList} name={""} url={""} id={""} />
      </BrowserRouter>,
    );
    const cells = screen.queryAllByRole("gridcell");

    fireEvent.click(cells[0]);

    expect(cells[0]).toHaveClass("stamped");

    fireEvent.click(screen.getByText("New card"));
    const updatedCells = screen.queryAllByRole("gridcell");
    expect(updatedCells[0]).not.toHaveClass("stamped");
  });
});

describe("'Clear' button", () => {
  test("clears any stamped cells", () => {
    render(
      <BrowserRouter>
        <Card wordList={wordList} name={""} url={""} id={""} />
      </BrowserRouter>,
    );
    const cells = screen.queryAllByRole("gridcell");
    const firstCell = cells[0];
    const lastCell = cells[24];

    fireEvent.click(firstCell);
    fireEvent.click(lastCell);

    expect(firstCell).toHaveClass("stamped");
    expect(lastCell).toHaveClass("stamped");

    fireEvent.click(screen.getByText("Clear"));

    expect(firstCell).not.toHaveClass("stamped");
    expect(lastCell).not.toHaveClass("stamped");
  });
});

describe("'Share' button", () => {
  test("copies a representation of the card to the clipboard", async () => {
    const coordinates = [
      "A1",
      "A&nbsp;2", // non-breaking space
      "A&shy;3", // soft hyphen (only displays if the text wraps)
      "A&shy;&shy;4", // multiple hyphens
      "B1",
      "A5", // out of alphabetical order
      "B2",
      "B3",
      "B4",
      "B5",
      "C1",
      "C2",
      "C3",
      "C4",
      "C5",
      "D1",
      "D2",
      "D3",
      "D4",
      "D5",
      "E1",
      "E2",
      "E3",
      "E4",
      "E5",
    ];
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Card
          wordList={coordinates}
          name={"Team Lindy"}
          url={""}
          id={""}
          randomise={false}
        />
        <textarea rows={5} />
      </BrowserRouter>,
    );
    fireEvent.click(screen.getByText("New card"));
    const cells = screen.queryAllByRole("gridcell");
    const firstCell = cells[0];
    const lastCell = cells[24];

    fireEvent.click(firstCell);
    fireEvent.click(lastCell);

    expect(firstCell).toHaveClass("stamped");
    expect(lastCell).toHaveClass("stamped");

    fireEvent.click(screen.getByText("Share"));

    const textBox = screen.getByRole("textbox");

    await user.click(textBox);
    await user.paste();

    const message = `
      Team Lindy Bingo
      🟦⬜⬜⬜⬜
      ⬜⬜⬜⬜⬜
      ⬜⬜⬜⬜⬜
      ⬜⬜⬜⬜⬜
      ⬜⬜⬜⬜🟦
      Remaining:
      - A 2
      - A3
      - A4
      - A5
      - B1
      - B2
      - B3
      - B4
      - B5
      - C1
      - C2
      - C3
      - C4
      - C5
      - D1
      - D2
      - D3
      - D4
      - D5
      - E1
      - E2
      - E3
      - E4`;
    expect(textBox).toHaveValue(stripIndent(message).trim());
  });
});
