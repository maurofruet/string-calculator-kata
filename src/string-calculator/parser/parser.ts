import ParserExceptionMessages from './parser-exception-messages';

/**
 * @name parser.split
 * @param {string} numbers - The string to be parsed to obtain an array of numbers.
 * @description It returns the array of numbers that can be found in the string passed as parameter.
 * The string must contain numbers that can be separated by multiple delimiters.
 * The currently supported delimiters are '\n' and ','. You can specify an additional delimiter with the following
 * syntax: "//[delimiter]\n[numbers...]".
 * The presence of negative numbers will throw an Exception showing the list of negative numbers.
 */
export default function split(numbers: string): number[] {
  const delimiters = [',', '\\n'];
  const prefix = '//';

  if (numbers.startsWith(prefix)) {
    const [defaultDelimiter, numbersToSplit] = getDefaultDelimiter(numbers, prefix);

    if (defaultDelimiter) {
      delimiters.push(defaultDelimiter);
      numbers = numbersToSplit;
    }
  }

  const regEx = `[${delimiters.join()}]`;
  const list: string[] = numbers.split(new RegExp(regEx));

  return list.map(Number);
}

/**
 * @name parser.getDefaultDelimiter
 * @param {string} numbers - The string to be parsed to obtain the optional delimiter specified by the user.
 * @description It returns an array composed of two elements.
 * The first element of the returned array is the additional delimiter that can be used to split the numbers passed
 * as parameter.
 * The second element of the returned array is the list of numbers found in the list passed as parameter.
 */
function getDefaultDelimiter(numbers: string, prefix: string): string[] {
  const linefeed = '\n';

    // remove the prefix to get the delimiter
  const stringWithoutPrefix = numbers.substr(prefix.length);
  const tokens = stringWithoutPrefix.split(linefeed);

  // check that there are at least two lines: one for the delimiter and one for the string to be parsed
  if (tokens.length > 1) {
    const delimiter = tokens[0];

    if (delimiter === '') {
      throw new Error(ParserExceptionMessages.MISSING_DELIMITER);
    }

    // Compute the index at which the string to be split starts
    const startIndex = prefix.length + delimiter.length + linefeed.length;
    const numbersToSplit = numbers.substr(startIndex);
    return [delimiter, numbersToSplit];
  } else {
    throw new Error(ParserExceptionMessages.MISSING_DELIMITER_AND_STRING);
  }
}
