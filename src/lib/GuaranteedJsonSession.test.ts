import GuaranteedJsonSession from "./GuaranteedJsonSession"
import type { CellData } from "../App"

beforeEach(() => {
  window.localStorage.clear();
});

test("can store an array of cell data in the session", () => {
  const initFunction = () => []
  const session = new GuaranteedJsonSession<CellData[]>(initFunction)

  session.sessionData = [
    { word: "Aardvark", stamped: false },
    { word: "Budgie", stamped: true}
  ]

  expect(session.sessionData).toEqual([
    { word: "Aardvark", stamped: false },
    { word: "Budgie", stamped: true}
  ])
});

test("returns a new array if nothing is stored", () => {
  const initFunction = () => [{ word: "Camel", stamped: false }]
  const session = new GuaranteedJsonSession<CellData[]>(initFunction)

  expect(session.sessionData).toEqual([{ word: "Camel", stamped: false }])
});
