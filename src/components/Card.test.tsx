import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Card from "./Card";
import { BrowserRouter } from "react-router-dom";
import stripIndent from "strip-indent";
import teamLindy from "../data/teamLindy.json";
import flattenWordList from "../lib/flattenWordList";
import type { StyledWord } from "../data/config";

const wordList: StyledWord[] = flattenWordList(teamLindy.wordList);

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
    const user = userEvent.setup();
    render(
      <BrowserRouter>
        <Card wordList={wordList} name={""} url={""} id={""} />
        <textarea rows={5} />
      </BrowserRouter>,
    );
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

    const emojiGrid = `
      🟦⬜⬜⬜⬜
      ⬜⬜⬜⬜⬜
      ⬜⬜⬜⬜⬜
      ⬜⬜⬜⬜⬜
      ⬜⬜⬜⬜🟦`;
    expect(textBox).toHaveValue(stripIndent(emojiGrid).trim());
  });
});
