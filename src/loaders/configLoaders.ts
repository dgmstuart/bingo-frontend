import defaultConfig from "../data/teamLindy.json";
import nullConfig from "../data/teamLindy.json";
import importJsonData from "../lib/importJsonData";
import type { Params } from "react-router-dom";
import type { Config } from "../data/config";

export type KeyedConfig = { id: string } & Config;

const defaultKeyedConfig: KeyedConfig = { id: "teamLindy", ...defaultConfig };

export const defaultConfigLoader = (): KeyedConfig => {
  return defaultKeyedConfig;
};

export const configLoader = async ({
  params,
}: {
  params: Params<string>;
}): Promise<KeyedConfig> => {
  const id = params.gameName;
  if (id) {
    const { success, data } = await importJsonData<Config>(id);
    if (success) {
      return { id, ...data };
    } else {
      return defaultKeyedConfig;
    }
  } else {
    console.error(
      "expected a param of 'gameName' but didn't find one or it had a falsey value",
    );
    return { id: "null", ...nullConfig };
  }
};
