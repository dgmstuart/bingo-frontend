import defaultConfig from "../data/teamLindy.json";
import JsonDataImporter from "../lib/JsonDataImporter";
import type { Params } from "react-router-dom";
import type { WordListData } from "../data/config";

export const defaultConfigLoader = (): WordListData => {
  return defaultConfig;
};

export const configLoader = async ({
  params,
}: {
  params: Params<string>;
}): Promise<WordListData> => {
  if (params.gameName) {
    const importer = new JsonDataImporter({ defaultData: defaultConfig });
    return await importer.import(params.gameName);
  } else {
    console.error(
      "expected a param of 'gameName' but didn't find one or it had a falsey value",
    );
    return [];
  }
};