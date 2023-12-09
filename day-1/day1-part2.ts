function transformLettersToNumber(letters: string): string {
  const searchAndReplace = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9',
  };
  const reg = new RegExp(Object.keys(searchAndReplace).join('|'));

  let testLetters = '';
  let tranformedLetters = '';
  let i = 0;

  while (i < letters.length) {
    if (!isNaN(Number(letters[i]))) {
      tranformedLetters += letters[i];
      testLetters = '';

      i++;
      continue;
    }

    testLetters += letters[i];

    if (testLetters.length > 2 && reg.test(testLetters)) {
      const match = testLetters.match(
        reg,
      )?.[0] as keyof typeof searchAndReplace;

      if (match) {
        tranformedLetters += testLetters.replace(
          match,
          searchAndReplace[match],
        );
        testLetters = '';

        continue;
      }
    }

    i++;
  }

  return tranformedLetters;
}

export function day1Part2(input: string): number {
  const lines = input.split('\n');
  let sum = 0;

  for (const line of lines) {
    const transformedLine = transformLettersToNumber(line);
    const digits = transformedLine.replace(/\D/g, '');
    const fullDigits = digits.length === 1 ? digits.repeat(1) : digits;
    sum = sum + Number(`${fullDigits[0]}${fullDigits[fullDigits.length - 1]}`);
  }

  return sum;
}
