import type { WordListGroupData } from "../data/config";

const flattenWordList = (wordList: WordListGroupData[]): string[] => {
  return wordList.reduce(
    (accumulator: string[], currentValue: WordListGroupData) => {
      const wordListGroupWords = currentValue["words"].map(({ word }) => word);
      return accumulator.concat(wordListGroupWords);
    },
    [],
  );
};

export default flattenWordList;
