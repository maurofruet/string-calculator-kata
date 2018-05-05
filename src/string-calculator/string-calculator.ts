import split from './parser/parser';
import checkNegativeNumbers from './validator/validator';

const biggestNumber = 1000;

/**
 * It adds the numbers passed as parameter.
 * The string must contain numbers that can be separated by multiple delimiters.
 * The currently supported delimiters are '\n' and ','. You can specify an additional delimiter with the following
 * syntax: "//[delimiter]\n[numbers...]".
 * The presence of negative numbers will throw an Exception showing the list of negative numbers.
 * @param {string} inputString - The string containing the numbers to be added and an optional delimiter.
 * @return {number} The sum of the numbers passed as parameter.
 */
export default function add(inputString: string): number {
  let sum = 0;
  const numbers: number[] = split(inputString);

  checkNegativeNumbers(numbers);

  for (const value of numbers) {
    if (value <= biggestNumber) {
      sum += value;
    }
  }

  return sum;
}
