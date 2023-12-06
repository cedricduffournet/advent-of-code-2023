import { dayOne } from "./day-one";

describe("dayOne", () => {
  it("should return correct output", () => {
    const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

    expect(dayOne(input)).toBe(142);
  });
});
