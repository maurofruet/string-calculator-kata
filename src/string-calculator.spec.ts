import { add } from './string-calculator';

describe('String calculator', () => {
  it('adds zero numbers', () => {
    const result = add('');
    expect(result).toBe(0);
  });

  it('adds one number', () => {
    const result = add('4');
    expect(result).toBe(4);
  });

  it('adds one negative number', () => {
    const result = add('-10');
    expect(result).toBe(-10);
  });

  it('adds two numbers', () => {
    const result = add('1,3');
    expect(result).toBe(4);
  });
});
