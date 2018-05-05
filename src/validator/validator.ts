/**
 * @name validator.checkNegativeNumbers
 * @param {number[]} numberList
 * @description It checks whether the given array contains negative numbers. In such a case, an exception is thrown
 * showing the list of negative numbers found in the list.
 */
export default function checkNegativeNumbers(numberList: number[]) {
  const negativeNumbers = numberList.filter((number) => number < 0 );

  if (negativeNumbers.length > 0) {
    throw new Error('negatives not allowed: ' + negativeNumbers);
  }
}
