export function add(numbers: string): number {
  const list: number[] = split(numbers);
  let sum = 0;

  for (const value of list) {
    sum += value;
  }

  return sum;
}

function split(numbers: string): number[] {
  const list: string[] = numbers.split(',');
  return list.map(Number);
}
