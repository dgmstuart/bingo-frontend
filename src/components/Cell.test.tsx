import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Cell from './Cell';

test("toggles stamped when clicked", () => {
  render(
    <table>
      <tbody>
        <tr>
          <Cell word="Budgie"/>
        </tr>
      </tbody>
    </table>
  )

  expect(screen.getByText("Budgie")).not.toHaveClass("stamped")

  fireEvent.click(screen.getByText("Budgie"))

  expect(screen.getByText("Budgie")).toHaveClass("stamped")

  fireEvent.click(screen.getByText("Budgie"))

  expect(screen.getByText("Budgie")).not.toHaveClass("stamped")
});
