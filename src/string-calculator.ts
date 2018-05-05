export function add(numbers: string): number {
  const list = split(numbers);
  let sum = 0;

  for (const value of list) {
    sum += value;
  }

  return sum;
}

function split(numbers: string): number[] {
  const list = numbers.split(',');
  return list.map(Number);
}
