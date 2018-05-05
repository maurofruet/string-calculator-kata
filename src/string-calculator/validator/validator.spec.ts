import checkNegativeNumbers from './validator';
import ValidatorExceptionMessages from './validator-exception-messages';

describe('Negative numbers validator', () => {

  it('throws an exception with a negative number', () => {
    expect(() => {
      checkNegativeNumbers([-3, 1]);
    }).toThrow(new Error(`${ValidatorExceptionMessages.NEGATIVES_NOT_ALLOWED}-3`));
  });

  it('throws an exception with negative numbers', () => {
    expect(() => {
      checkNegativeNumbers([-3, -11]);
    }).toThrow(new Error(`${ValidatorExceptionMessages.NEGATIVES_NOT_ALLOWED}-3,-11`));
  });
});
