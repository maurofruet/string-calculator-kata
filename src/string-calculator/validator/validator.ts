import ValidatorExceptionMessages from './validator-exception-messages';

/**
 * It checks whether the given array contains negative numbers. In such a case, an exception is thrown
 * showing the list of negative numbers found in the list.
 * @param {number[]} numbers - The array of numbers to be checked.
 */
export default function checkNegativeNumbers(numbers: number[]) {
  const negativeNumbers = numbers.filter((number) => number < 0 );

  if (negativeNumbers.length > 0) {
    throw new Error(`${ValidatorExceptionMessages.NEGATIVES_NOT_ALLOWED}${negativeNumbers}`);
  }
}
