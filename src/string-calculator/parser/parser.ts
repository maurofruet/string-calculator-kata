import ParserExceptionMessages from './parser-exception-messages';

/**
   * It splits a string and returns an array of numbers.
   * The returned string must contain numbers that can be separated by multiple delimiters.
   * The currently supported delimiters are '\n' and ','. You can specify an additional delimiter with the following
   * syntax: "//[delimiter]\n[numbers...]".
   * The presence of negative numbers will throw an Exception showing the list of negative numbers.
   * @param {string} numbers - The string to be parsed to obtain an array of numbers.
   * @return {number[]} The array of numbers that are present in the string passed as parameter.
   */
export default function split(numbers: string): number[] {
  const delimiters = [',', '\\n'];
  const prefix = '//';

  // Check whether the user has specified the optional delimiter.
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
 * It returns the default parameter specified by the user and the string to be split.
 * @param {string} numbers - The string to be parsed to obtain the optional delimiter specified by the user.
 * @return {string[]} An array composed of two elements: the first element is the additional delimiter that can be
 * used to split the numbers passed as parameter, while the second element is the list of numbers found in the list
 * passed as parameter.
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
