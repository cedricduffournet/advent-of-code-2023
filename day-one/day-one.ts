export function dayOne(input: string): number {
  return input
    .split("\n")
    .map((line) => {
      const digits = line.replace(/\D/g, "");
      const fullDigits = digits.length === 1 ? digits.repeat(1) : digits;

      return Number(`${fullDigits[0]}${fullDigits[fullDigits.length - 1]}`);
    })
    .reduce((nextValue, currentValue) => nextValue + currentValue);
}
