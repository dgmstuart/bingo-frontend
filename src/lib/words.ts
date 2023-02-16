import wordList from "../wordList.json";
import shuffle from "./shuffle";
import type { WordListGroupData } from "../components/WordList";

const words = wordList.reduce(
  (accumulator: string[], currentValue: WordListGroupData) => {
    const wordListGroupWords = currentValue["words"].map(({ word }) => word);
    return accumulator.concat(wordListGroupWords);
  },
  []
);

export const newWords = (): string[] => shuffle(words).slice(0, 25);
