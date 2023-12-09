import { day1Part1 } from './day1-part1';

describe('day1Part1', () => {
  it('should return correct output', () => {
    const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

    expect(day1Part1(input)).toBe(142);
  });
});
