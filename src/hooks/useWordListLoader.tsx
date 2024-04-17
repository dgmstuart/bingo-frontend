import { useState, useEffect } from "react";
import defaultWordList from "../data/teamLindyWordList.json";
import type { WordListData } from "../data/wordList";

export default (listName: string | null) => {
  const [wordList, setWordList] = useState<WordListData>([]);

  useEffect(() => {
    const load = async () => {
      let data = defaultWordList;
      if (listName) {
        try {
          data = (await import(`../data/${listName}.json`)).default;
        } catch (error) {
          console.error("Failed to load the word list", error);
        }
      }
      setWordList(data);
    };

    load();
  }, [listName]);

  return wordList;
};
