import defaultWordList from "../data/teamLindyWordList.json";
import JsonDataImporter from "../lib/JsonDataImporter";
import i18n from "../i18n";
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
  setLanguage(params.lang);
  return await wordList(params.wordListName);
};

const setLanguage = async (language: string | undefined) => {
  if (i18n.language != language) {
    await i18n.changeLanguage(language);
  }
};

const wordList = async (
  wordListName: string | undefined,
): Promise<WordListData> => {
  if (wordListName) {
    const importer = new JsonDataImporter({ defaultData: defaultWordList });
    return await importer.import(wordListName);
  } else {
    console.error(
      "expected a param of 'wordListName' but didn't find one or it had a falsey value",
    );
    return [];
  }
};
