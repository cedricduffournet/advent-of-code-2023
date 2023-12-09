import { day1Part1 } from './day1-part1';
import { day1Part2 } from './day1-part2';

describe('day1Part1', () => {
  it('should return correct output', () => {
    const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

    expect(day1Part1(input)).toBe(142);
  });
});

describe('day1Part2', () => {
  it('should return correct output', () => {
    const input = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

    expect(day1Part2(input)).toBe(281);
  });
});
