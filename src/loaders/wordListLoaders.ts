import defaultWordList from "../data/teamLindyWordList.json";
import loader from "../data/loader";
import type { Params } from "react-router-dom";
import type { WordListData } from "../data/wordList";

export const defaultWordListLoader = (): WordListData => {
  return defaultWordList;
};

export const wordListLoader = async ({
  params,
}: {
  params: Params<string>;
}): Promise<WordListData> => {
  if (params.wordListName) {
    return await loader(params.wordListName);
  } else {
    console.error(
      "expected a param of 'wordListName' but didn't find one or it had a falsey value",
    );
    return [];
  }
};
