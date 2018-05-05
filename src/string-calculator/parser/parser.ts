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
    const [defaultDelimiter, numbersToSplit] = getDefaultDelimiter(inputString);

    if (defaultDelimiter) {
      delimiters.push(defaultDelimiter);
      inputString = numbersToSplit;
    }
  }

  const regExp = `[${delimiters.join()}]`;
  const list: string[] = inputString.split(new RegExp(regExp));

  return list.map(Number);
}

/**
 * It returns the default parameter specified by the user and the string to be split.
 * @param {string} inputString - The string to be parsed to obtain the optional delimiter specified by the user.
 * @return {string[]} An array composed of two elements: the first element is the additional delimiter that can be
 * used to split the numbers passed as parameter, while the second element is the list of numbers found in the list
 * passed as parameter.
 */
function getDefaultDelimiter(inputString: string): string[] {
  // remove the prefix to get the delimiter
  const stringWithoutPrefix = inputString.substr(prefix.length);
  const tokens = stringWithoutPrefix.split(newline);

  // check that there are at least two lines: one for the delimiter and one for the string to be parsed
  if (tokens.length > 1) {
    const delimiter = tokens[0];

    if (delimiter === '') {
      throw new Error(ParserExceptionMessages.MISSING_DELIMITER);
    }

    // Compute the index at which the string to be split starts
    const startIndex = prefix.length + delimiter.length + newline.length;
    const numbersToSplit = inputString.substr(startIndex);
    return [delimiter, numbersToSplit];
  } else {
    throw new Error(ParserExceptionMessages.MISSING_DELIMITER_AND_STRING);
  }
}
