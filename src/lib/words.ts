import shuffle from "./shuffle";
import type { WordListGroupData } from "../data/wordList";

const flattenWordList = (wordList: WordListGroupData[]): string[] => {
  return wordList.reduce(
    (accumulator: string[], currentValue: WordListGroupData) => {
      const wordListGroupWords = currentValue["words"].map(({ word }) => word);
      return accumulator.concat(wordListGroupWords);
    },
    []
  );
};

export const newWords = (wordList: WordListGroupData[]): string[] => {
  const words = flattenWordList(wordList);
  return shuffle(words).slice(0, 25);
};
