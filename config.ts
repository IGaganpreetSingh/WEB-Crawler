import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://blocktechbrew.com/about-us/",
  match: "https://blocktechbrew.com/about-us/**",
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
