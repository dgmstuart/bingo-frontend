export type Config = {
  name?: string;
  url: string;
  videoListUrl?: string;
  wordList: WordListData;
};
export type WordListData = WordListGroupData[];
export type WordListGroupData = {
  title: string;
  description?: string;
  words: WordData[];
};
export type WordData = {
  word: string;
  url?: string;
  emoji?: string;
  description?: string;
};
