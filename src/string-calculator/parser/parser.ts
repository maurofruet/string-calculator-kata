import ParserExceptionMessages from './parser-exception-messages';

const comma = ',';
const newline = '\n';
const delimiters = [comma, newline];
const prefix = '//';

/**
   * It splits a string and returns an array of numbers.
   * The input string must contain numbers that can be separated by multiple delimiters.
   * The currently supported delimiters are '\n' and ','. You can specify an additional delimiter with the following
   * syntax: "//[delimiter]\n[numbers...]".
   * The presence of negative numbers will throw an Exception showing the list of negative numbers.
   * @param {string} inputString - The string to be parsed to obtain an array of numbers.
   * @return {number[]} The array of numbers that are present in the string passed as parameter.
   */
export default function split(inputString: string): number[] {
  // Check whether the user has specified the optional delimiter.
  if (inputString.startsWith(prefix)) {
    const stringWithoutPrefix = inputString.substr(prefix.length);
    const defaultDelimiter = getDefaultDelimiter(stringWithoutPrefix);

    if (defaultDelimiter) {
      delimiters.push(defaultDelimiter);
      inputString = getNumbersWithoutPrefix(stringWithoutPrefix, defaultDelimiter);
    }
  }

  const regExp = `[${delimiters.join()}]`;
  const numbers = inputString.split(new RegExp(regExp));

  return numbers.map(Number);
}

/**
 * It returns the default delimiter specified by the user.
 * @param {string} stringWithoutPrefix - The string to be parsed to obtain the optional delimiter specified by the user.
 * @return {string} The additional delimiter that can be used to split the numbers.
 */
function getDefaultDelimiter(stringWithoutPrefix: string): string {
  const tokens = stringWithoutPrefix.split(newline);

  // Check that there are at least two lines: one for the delimiter and one for the string to be parsed
  if (tokens.length > 1) {
    const delimiter = tokens[0];

    if (delimiter === '') {
      throw new Error(ParserExceptionMessages.MISSING_DELIMITER);
    }

    return delimiter;

  } else {
    throw new Error(ParserExceptionMessages.MISSING_DELIMITER_AND_STRING);
  }
}

/**
 * It returns the string containing the numbers to be parsed, without the prefix and the delimiter
 * @param {string} stringWithoutPrefix - A string containing the delimiter, a new line and the numbers to be parsed.
 * @param {string} defaultDelimiter - The default delimiter specified by the user.
 * @return {string} A string containing the numbers to be parsed.
 */
function getNumbersWithoutPrefix(stringWithoutPrefix: string, defaultDelimiter: string): string {
  // Compute the index at which the string to be split starts
  const startIndex = defaultDelimiter.length + newline.length;
  return stringWithoutPrefix.substr(startIndex);
}
