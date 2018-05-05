import split from '../parser/parser';
export default function add(numbers) {
    const list = split(numbers);
    let sum = 0;
    for (const value of list) {
        sum += value;
    }
    return sum;
}
