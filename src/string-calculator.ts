import split from './parser';

export default function add(numbers: string): number {
  const list: number[] = split(numbers);
  let sum = 0;

  for (const value of list) {
    sum += value;
  }

  return sum;
}
