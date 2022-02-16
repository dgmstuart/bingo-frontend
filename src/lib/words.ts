import wordList from "../wordList.json";
import shuffle from "./shuffle";

export const newWords = (): string[] => shuffle(wordList).slice(0, 25);
