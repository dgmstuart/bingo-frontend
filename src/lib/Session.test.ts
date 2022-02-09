import Session from "./Session"

beforeEach(() => {
  window.localStorage.clear();
});

test("stores an array of words in the session", () => {
  const session = new Session()

  session.setWords(["Aardvark", "Budgie"])

  expect(session.words).toEqual(["Aardvark", "Budgie"])
});

test("returns null if nothing is stored", () => {
  const session = new Session()

  expect(session.words).toEqual(null)
});
