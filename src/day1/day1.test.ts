import { part1, part2, step } from "./day1.js";

describe("part1", () => {
  it("correctly counts when it hits 0", () => {
    const result = part1(["R50"]);
    expect(result.count).toBe(1);
  });

  it("gets example correct", () => {
    const result = part1([
      "L68",
      "L30",
      "R48",
      "L5",
      "R60",
      "L55",
      "L1",
      "L99",
      "R14",
      "L82",
    ]);
    expect(result.count).toBe(3);
  });
});

describe("part2", () => {
  it("correctly counts when it passes 0", () => {
    const result = part2(["R51"]);
    expect(result.count).toBe(1);
    expect(result.position).toBe(1);
  });

  it("correctly counts when it passes 0 several times", () => {
    const result = part2(["R551"]);
    expect(result.count).toBe(6);
    expect(result.position).toBe(1);
  });

  it("correctly counts when it passes 0 several times Left", () => {
    const result = part2(["L551"]);
    expect(result.count).toBe(6);
    expect(result.position).toBe(99);
  });

  it("correctly counts when it lands on 0", () => {
    const result = part2(["R150"]);
    expect(result.position).toBe(0);
    expect(result.count).toBe(2);
  });

  it("correctly counts when it lands on 0 multiple times", () => {
    const result = part2(["R150", "L100"]);
    expect(result.position).toBe(0);
    expect(result.count).toBe(3);
  });

  it("some other test", () => {
    const result = part2(["R150", "L99"]);
    expect(result.position).toBe(1);
    expect(result.count).toBe(2);
  });

  it("gets example correct", () => {
    const result = part2([
      "L68",
      "L30",
      "R48",
      "L5",
      "R60",
      "L55",
      "L1",
      "L99",
      "R14",
      "L82",
    ]);
    expect(result.count).toBe(6);
    expect(result.position).toBe(32);
  });
});

describe("step", () => {
  it("adds 1 on R1", () => {
    const val = step(1, "R1");
    expect(val).toBe(2);
  });

  it("subtracts 1 on L1", () => {
    const val = step(2, "L1");
    expect(val).toBe(1);
  });

  it("handles step of >100", () => {
    const val = step(2, "R300");
    expect(val).toBe(2);
  });

  it("correctly goes past 100 on R", () => {
    const val = step(99, "R2");
    expect(val).toBe(1);
  });

  it("correctly goes past 0 on L", () => {
    const val = step(1, "L2");
    expect(val).toBe(99);
  });

  it("correctly counts when it passes 0 several times Left", () => {
    const val = step(50, "L551");
    expect(val).toBe(99);
  });

  it("correctly follows the first example step", () => {
    const val = step(50, "L68");
    expect(val).toBe(82);
  });
});
