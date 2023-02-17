export type WordListData = WordListGroupData[];
export type WordListGroupData = {
  title: string;
  description?: string;
  words: WordData[];
};
export type WordData = { word: string; url?: string; description?: string };
