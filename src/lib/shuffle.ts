// Implementation of the Fisher-Yates (aka Knuth) Shuffle
// Lifted from https://stackoverflow.com/a/2450976

type ArrayTransformation = <T>(array: T[]) => T[];

const shuffle: ArrayTransformation = (array) => {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

export default shuffle;
