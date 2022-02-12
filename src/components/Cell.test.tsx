import React from "react";
import { render, screen } from "@testing-library/react";
import Cell from "./Cell";

test("shows as stamped if stamped", () => {
  render(
    <table>
      <tbody>
        <tr>
          <Cell word="Budgie" stamped={true} setStamped={(stamped) => {}} />
        </tr>
      </tbody>
    </table>
  );

  expect(screen.getByText("Budgie")).toHaveClass("stamped");
});

test("shows as not stamped if not stamped", () => {
  render(
    <table>
      <tbody>
        <tr>
          <Cell word="Budgie" stamped={false} setStamped={(stamped) => {}} />
        </tr>
      </tbody>
    </table>
  );

  expect(screen.getByText("Budgie")).not.toHaveClass("stamped");
});
