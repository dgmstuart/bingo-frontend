import wordList from "../wordList.json";
import shuffle from "./shuffle";

export const newWords = function (): string[] {
  return shuffle(wordList).slice(0, 25);
};
