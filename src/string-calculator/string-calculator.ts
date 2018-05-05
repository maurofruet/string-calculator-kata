import split from '../parser/parser';

export default function add(numbers: string): number {
  const numberList: number[] = split(numbers);
  const negativeNumbers = getNegativeNumbers(numberList);
  let sum = 0;

  if (negativeNumbers.length > 0) {
    throw new Error('negatives not allowed: ' + negativeNumbers);
  }

  for (const value of numberList) {
    sum += value;
  }

  return sum;
}

function getNegativeNumbers(numberList: number[]) {
  return numberList.filter(isNegativeNumber);
}

function isNegativeNumber(number: number) {
  return number < 0;
}
