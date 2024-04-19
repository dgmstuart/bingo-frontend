import defaultWordList from "../data/teamLindyWordList.json";
import JsonDataImporter from "../lib/JsonDataImporter";
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
    const importer = new JsonDataImporter({ defaultData: defaultWordList });
    return await importer.import(params.wordListName);
  } else {
    console.error(
      "expected a param of 'wordListName' but didn't find one or it had a falsey value",
    );
    return [];
  }
};
