export default function split(numbers: string): number[] {
  const delimiters = [',', '\\n'];

  const [defaultDelimiter, numbersToSplit] = getDefaultDelimiter(numbers);

  if (defaultDelimiter) {
    delimiters.push(defaultDelimiter);
    numbers = numbersToSplit;
  }

  let regEx = '[';

  for (const delimiter of delimiters) {
    regEx += delimiter;
  }

  regEx += ']';
  const list: string[] = numbers.split(new RegExp(regEx));

  return list.map(Number);
}

function getDefaultDelimiter(numbers: string): string[] {
  const prefix = '//';
  const linefeed = '\n';

  if (numbers.startsWith(prefix)) {
    // remove the prefix to get the delimiter
    const subsrt = numbers.substr(prefix.length);
    const tokens = subsrt.split(linefeed);

    // check that there are at least two lines: one for the delimiter and one for the string to be parsed
    if (tokens.length > 1) {
      const delimiter = tokens[0];
      const startIndex = prefix.length + delimiter.length + linefeed.length;
      const numbersToSplit = numbers.substr(startIndex);
      return [delimiter, numbersToSplit];
    } else {
      return [undefined, numbers];
    }
  }

  return [undefined, numbers];
}
