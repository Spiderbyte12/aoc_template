export const day1 = (input: string[]) => {
  return {
    part1: part1(input),
    part2: part2(input),
  };
};

export const part1 = (input: string[]) => {
  let count = 0;
  let position = 50;
  input.map((instruction: string) => {
    position = step(position, instruction.trim());
    position === 0 && count++;
  });
  return { count, position };
};

export const part2 = (input: string[]) => {
  let count = 0;
  let position = 50;
  input.map((instruction: string) => {
    const change = parseInstruction(instruction.trim());
    const laps = Math.floor(Math.abs(change) / 100);
    count = count + laps;
    const newPos = step(position, instruction.trim());
    if (position > 0 && (position + change > 99 || position + change <= 0)) {
      console.log("incrementing", { position, change, val: position + change });
      count++;
    }
    console.log({ laps, position, newPos, count, change });
    position = newPos;
  });
  return { count, position };
};

const parseInstruction = (instruction: string) => {
  if (instruction.length < 2) {
    throw new Error(
      `Invalid Instruction: ${instruction}, length is ${instruction.length}`,
    );
  }
  const direction = instruction.charAt(0);
  const distance = parseInt(instruction.slice(1));
  if (direction !== "L" && direction !== "R") {
    throw `Invalid Direction: ${direction}`;
  }
  const modifier = direction === "R" ? 1 : -1;
  return modifier * distance;
};

export const step = (pos: number, instruction: string) => {
  const step = parseInstruction(instruction);
  return (((pos + step) % 100) + 100) % 100;
};
