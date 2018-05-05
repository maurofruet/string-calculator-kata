import split from '../parser/parser';
import checkNegativeNumbers from '../validator/validator';

export default function add(numbers: string): number {
  const numberList: number[] = split(numbers);
  let sum = 0;

  checkNegativeNumbers(numberList);

  for (const value of numberList) {
    sum += value;
  }

  return sum;
}


