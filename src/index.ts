import { day1 } from "./day1/day1.js";
import { getInput } from "./utils/textTools.js";

type days = 1;

const entrypoints: Record<days, (input: string[]) => unknown> = {
  1: day1,
};

const runDay = async (day: days) => {
  const input = await getInput(day);
  const handler = entrypoints[day];
  return handler(input);
};

console.log("results are:", await runDay(1));
