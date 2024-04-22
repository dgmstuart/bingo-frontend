import type { StyledWord, WordListGroupData } from "../data/config";

const flattenWordList = (wordList: WordListGroupData[]): StyledWord[] => {
  return wordList.reduce(
    (accumulator: StyledWord[], currentValue: WordListGroupData) => {
      const wordListGroupWords = currentValue["words"].map(
        ({ word, cssClasses }) => ({ word, cssClasses }),
      );
      return accumulator.concat(wordListGroupWords);
    },
    [],
  );
};

export default flattenWordList;
