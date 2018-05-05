import checkNegativeNumbers from './validator';

  describe('Negative numbers validator', () => {

  it('throws an exception with a negative number', () => {
    expect(() => {checkNegativeNumbers([-3, 1]); }).toThrow(new Error('negatives not allowed: -3'));
  });

  it('throws an exception with negative numbers', () => {
    expect(() => {checkNegativeNumbers([-3, -11]); }).toThrow(new Error('negatives not allowed: -3,-11'));
  });
});
