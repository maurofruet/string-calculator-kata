export default function checkNegativeNumbers(numberList: number[]) {
  const negativeNumbers = getNegativeNumbers(numberList);

  if (negativeNumbers.length > 0) {
    throw new Error('negatives not allowed: ' + negativeNumbers);
  }
}

function getNegativeNumbers(numberList: number[]) {
  return numberList.filter(isNegativeNumber);
}

function isNegativeNumber(number: number) {
  return number < 0;
}
