import Session from "./Session"

beforeEach(() => {
  window.localStorage.clear();
});

test("stores an array of cell data in the session", () => {
  const session = new Session()

  session.setCellDataList([
    { word: "Aardvark", stamped: false },
    { word: "Budgie", stamped: true}
  ])

  expect(session.cellDataList).toEqual([
    { word: "Aardvark", stamped: false },
    { word: "Budgie", stamped: true}
  ])
});

test("returns null if nothing is stored", () => {
  const session = new Session()

  expect(session.cellDataList).toEqual(null)
});
