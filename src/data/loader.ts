import defaultWordList from "./teamLindyWordList.json";
import type { WordListData } from "./wordList";

export default async (listName: string): Promise<WordListData> => {
  let data = defaultWordList;

  try {
    data = (await import(`./${listName}.json`)).default;
  } catch (error) {
    console.error("Failed to load the word list", error);
  }

  return data;
};
