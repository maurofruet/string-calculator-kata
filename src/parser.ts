export default function split(numbers: string): number[] {
  const list: string[] = numbers.split(',');
  return list.map(Number);
}
