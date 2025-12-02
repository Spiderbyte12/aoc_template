import { readFile } from "fs/promises";

export const getInput = async (day: number) => {
  const relativePath = `input/day${day}.txt`;
  const file = await loadFile(`./res/${relativePath}`);
  const input = file.split("\n");
  return input;
};

const loadFile = async (path: string) => {
  const content = await readFile(path, "utf8");
  return content;
};
