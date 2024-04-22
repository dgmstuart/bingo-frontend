import JsonSession from "./JsonSession";
import type { CellData } from "../components/Cell";

beforeEach(() => {
  window.localStorage.clear();
});

test("can store an array of cell data in the session", () => {
  const session = new JsonSession<CellData[]>("key");

  session.sessionData = [
    { word: "Aardvark", stamped: false },
    { word: "Budgie", stamped: true },
  ];

  expect(session.sessionData).toEqual([
    { word: "Aardvark", stamped: false },
    { word: "Budgie", stamped: true },
  ]);
});

test("returns null if nothing is stored", () => {
  const session = new JsonSession("Key");

  expect(session.sessionData).toEqual(null);
});
