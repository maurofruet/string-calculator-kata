export default function split(numbers: string): number[] {
  const regEx = /[,\n]/;
  const list: string[] = numbers.split(regEx);
  return list.map(Number);
}
