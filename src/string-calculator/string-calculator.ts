import split from '../parser/parser';
import checkNegativeNumbers from '../validator/validator';

/**
 * @name string-calculator.add
 * @param {string} numbers - The string containing the numbers to be added and an optional delimiter.
 * @description It returns the sum of the numbers passed as parameter.
 * The string must contain numbers that can be separated by multiple delimiters.
 * The currently supported delimiters are '\n' and ','. You can specify an additional delimiter with the following
 * syntax: "//[delimiter]\n[numbers...]".
 * The presence of negative numbers will throw an Exception showing the list of negative numbers.
 */
export default function add(numbers: string): number {
  const numberList: number[] = split(numbers);
  const biggestNumber = 1000;
  let sum = 0;

  checkNegativeNumbers(numberList);

  for (const value of numberList) {
    if (value <= biggestNumber) {
      sum += value;
    }
  }

  return sum;
}
