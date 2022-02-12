import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

describe("'New card' button", () => {
  test("changes the words on the card", () => {
    render(<App />);
    const initialCells = screen.queryAllByRole("gridcell");
    const firstWord = initialCells[0].textContent;
    const secondWord = initialCells[1].textContent;

    fireEvent.click(screen.getByText("New card"));

    const updatedCells = screen.queryAllByRole("gridcell");
    expect(updatedCells[0].textContent).not.toEqual(firstWord);
    expect(updatedCells[1].textContent).not.toEqual(secondWord);
  });

  test("clears any stamped cells", () => {
    render(<App />);
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
    render(<App />);
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
